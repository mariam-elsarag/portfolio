import { ArrowUpRight } from "lucide-react";
import ContactForm from "./ContactForm";

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.96 10.96 0 0 1 5.73 0c2.19-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.77 1.06.77 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

const Contact = () => {
  return (
    <section id="contact" className="contact ">
      <div className="container ">
        <div className="contact-glow" />
        <div className="section-label reveal">
          07 <span /> Get in touch
        </div>
        <div className="contact-content-grid">
          <div className="contact-intro">
            <h2 className="contact-heading reveal">
              Have an idea?
              <br />
              <span>Let&apos;s build it.</span>
            </h2>
            <p className="contact-copy reveal">
              Whether you&apos;re building a product, improving an existing
              experience, or just want to talk about technology, I&apos;d love
              to hear from you.
            </p>
            <a
              className="contact-email reveal"
              href="mailto:hello@mariamtarek.dev"
            >
              hello@mariamtarek.dev <ArrowUpRight size={16} />
            </a>
            <div className="contact-links reveal">
              <a
                href="https://www.linkedin.com/in/mariamelsarag/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon /> LinkedIn
              </a>
              <a
                href="https://github.com/mariam-elsarag"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon /> GitHub
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
