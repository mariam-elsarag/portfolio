# Mariam Tarek — Portfolio

A responsive portfolio for a full-stack developer, built with Next.js, React, and TypeScript. It includes project filtering and pagination, animated portfolio sections, and a contact form that sends submissions through Resend.

## Features

- Responsive portfolio layout with project, experience, skills, and contact sections
- Project cards with category filters, pagination, preview images, and optional GitHub and live-preview links
- Contact form with client-side and server-side validation
- Server-side email delivery using Resend
- Vercel Analytics in production

## Requirements

- Node.js 20.9 or later
- pnpm 12 (the package manager declared by this project)

## Getting started

Install dependencies:

```bash
pnpm install
```

Copy `.env.example` to `.env.local` and set the contact-form configuration:

```dotenv
RESEND_API_KEY=re_your_api_key
CONTACT_EMAIL=your-email@example.com
```

Keep the Resend API key private. It is read only by the server-side contact API route. `.env.local` is ignored by Git.

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Run the production build |

## Contact form setup

The form submits to `POST /api/contact`. The server validates the name (2–100 characters), email address, and message (3–500 characters), then sends the submission using Resend.

1. Create an account at [Resend](https://resend.com/) and generate an API key.
2. Put the key in `RESEND_API_KEY` in `.env.local`.
3. Set `CONTACT_EMAIL` to the inbox where contact submissions should arrive.
4. For production delivery, configure a verified sending domain in Resend and update the `from` address in `app/api/contact/route.ts` to use that domain.

Do not use a `NEXT_PUBLIC_` prefix for `RESEND_API_KEY`; that would expose it to browser code.

## Updating projects

Edit the project list in `components/portfolio/Projects.tsx`. Each project supports:

- `title`, `type`, `description`, and `tags`
- `category` (`frontend` or `backend`)
- `image` (a path under `public/`, such as `/projects/my-project.svg`)
- Optional `githubUrl` and `previewUrl` fields; the corresponding links appear on the card when provided

Replace the included concept previews in `public/projects/` with your own project screenshots or artwork as needed.

## Project structure

```text
app/
  api/contact/route.ts   Contact form API and Resend email delivery
  globals.css            Global styles and design system
  page.tsx               Portfolio page entry point
components/
  layout/                Navigation, footer, and back-to-top button
  portfolio/             Portfolio sections and project cards
  ui/                    Shared UI components
public/
  projects/              Project preview artwork
```
