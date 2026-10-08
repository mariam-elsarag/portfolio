"use client";

import { API } from "@/app/lib/api_url";
import { Button } from "@/components/ui/button";
import { Check, Send, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type SubmissionState = "idle" | "success" | "error";

function ContactSuccessToast({ onClose }: { onClose: () => void }) {
  return (
    <div className="contact-success-toast" role="status" aria-live="polite">
      <span className="contact-success-icon">
        <Check size={17} />
      </span>
      <span>Thanks — your message was sent.</span>
      <button
        className="contact-success-dismiss"
        type="button"
        onClick={onClose}
        aria-label="Dismiss success message"
      >
        <X size={16} />
      </button>
    </div>
  );
}

const ContactForm = () => {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState("idle");

    try {
      const response = await fetch(API.contact, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim(),
          message: data.message.trim(),
        }),
      });

      if (!response.ok) {
        setSubmissionState("error");
        return;
      }

      reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <form
      className="contact-form border border-white/5 bg-white/5 reveal"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {submissionState === "success" && (
        <ContactSuccessToast onClose={() => setSubmissionState("idle")} />
      )}
      <div className="contact-form-fields">
        <div className="contact-field">
          <label htmlFor="contact-name">Full name</label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name", {
              required: "Please enter your full name.",
              minLength: {
                value: 2,
                message: "Your name must be at least 2 characters.",
              },
              maxLength: {
                value: 100,
                message: "Your name must be 100 characters or fewer.",
              },
              validate: (value) =>
                value.trim().length >= 2 ||
                "Your name must be at least 2 characters.",
            })}
          />
          {errors.name && (
            <span
              className="contact-field-error"
              id="contact-name-error"
              role="alert"
            >
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Your email</label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email", {
              required: "Please enter your email address.",
              maxLength: {
                value: 254,
                message: "Your email address is too long.",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
              validate: (value) =>
                value.trim() === value ||
                "Remove spaces from your email address.",
            })}
          />
          {errors.email && (
            <span
              className="contact-field-error"
              id="contact-email-error"
              role="alert"
            >
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="contact-field contact-field-message">
          <label htmlFor="contact-message">Your message</label>
          <textarea
            id="contact-message"
            placeholder="Tell me a little about what you have in mind..."
            maxLength={500}
            className="resize-none"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            {...register("message", {
              required: "Please add a message.",
              minLength: {
                value: 3,
                message: "Your message must be at least 3 characters.",
              },
              maxLength: {
                value: 500,
                message: "Your message must be 500 characters or fewer.",
              },
              validate: (value) =>
                value.trim().length >= 3 ||
                "Your message must be at least 3 characters.",
            })}
          />
          {errors.message && (
            <span
              className="contact-field-error"
              id="contact-message-error"
              role="alert"
            >
              {errors.message.message}
            </span>
          )}
        </div>
      </div>
      <div className="contact-form-footer">
        {submissionState === "error" && (
          <p aria-live="polite" aria-atomic="true">
            We couldn’t send your message. Please try again or email me directly
            at hello@mariamtarek.dev.
          </p>
        )}
        <Button variant="default" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send a message"} <Send size={16} />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
