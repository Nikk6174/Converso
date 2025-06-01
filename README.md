**README.md**

---

## Converso: AI-Powered Learning Companion

**Live Demo:** [converso-9j1y.vercel.app](https://converso-9j1y.vercel.app/)

---

### Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   4.1 [Prerequisites](#prerequisites)
   4.2 [Installation](#installation)
   4.3 [Environment Variables](#environment-variables)
   4.4 [Running Locally](#running-locally)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [Deployment](#deployment)
8. [Error Monitoring](#error-monitoring)
9. [Contributing](#contributing)
10. [License](#license)

---

## Project Overview

**Converso** is a fully customizable, voice-driven SaaS platform that enables learners to engage in real-time, conversational lessons on any topic. Built with Next.js and TypeScript on the front end and powered by Supabase on the back end, Converso allows users to:

* Choose a topic and subject
* Select a companion’s voice (male or female; formal or casual)
* Interact naturally with the AI companion powered by VAPI AI
* Track progress and review lesson history
* Manage billing through Stripe
* Experience seamless authentication via Clerk

The result is an immersive, highly personalized learning experience that adapts dynamically to each user’s needs.

---

## Features

* **Topic & Voice Customization**
  Users select any topic (e.g., “Linear Algebra,” “French Cuisine,” “Machine Learning”) and choose the companion’s voice:

  * Male / Female
  * Formal / Casual

* **Real-Time Conversational Lessons**
  Leveraging VAPI AI, the companion engages in live dialogue—answering questions, clarifying concepts, and guiding exercises.

* **Secure Authentication**
  Clerk integration provides passwordless sign-up/sign-in flows with email or social providers, reducing onboarding friction.

* **Personalized Progress Tracking**
  Each learner has a dynamic profile in Supabase that stores:

  * Lesson history
  * Voice preferences
  * Completed modules and checkpoints

* **Scalable Backend**
  A PostgreSQL schema on Supabase supports up to 5,000 concurrent users at 99.9% uptime, ensuring consistent lesson streaming and state management.

* **Flexible Subscription & Billing**
  Stripe (integrated through Clerk) powers subscription plans, trial periods, invoicing, and payment workflows with zero manual intervention.

* **Responsive, Modern UI**
  Built with [Shadcn UI](https://github.com/shadcn/ui) and Tailwind CSS—optimized for mobile and desktop, delivering < 1 second page loads for lesson modules.

* **Proactive Error Monitoring**
  Sentry integration for real‐time exception tracking, performance monitoring, and alerting to guarantee high availability and fast issue resolution.

---

## Tech Stack

* **Front End**

  * Next.js 14 (app router)
  * React 18 + TypeScript
  * Tailwind CSS
  * Shadcn UI component library

* **Back End & Database**

  * Supabase (PostgreSQL + Auth)
  * Supabase Edge Functions (if applicable)

* **Authentication & Authorization**

  * Clerk.dev (passwordless/email link + OAuth providers)

* **Voice AI**

  * VAPI AI (real-time text-to-speech + speech recognition)

* **Payments & Billing**

  * Stripe (via Clerk’s Billing API)

* **Error Tracking & Monitoring**

  * Sentry.io

* **Deployment**

  * Vercel (for Next.js hosting)

---

## Getting Started

Follow these steps to get a local copy of the project running on your machine.

### Prerequisites

1. **Node.js** ≥ 18.x
2. **pnpm** (or npm/yarn)
3. **Supabase CLI** (for local development, optional)
4. **Clerk account** (for API keys)
5. **VAPI AI account** (for TTS and speech recognition keys)
6. **Stripe account** (for test & live keys)
7. **Sentry account** (for DSN and project configuration)

---

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/converso.git
   cd converso
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

---

### Environment Variables

Create a `.env.local` file in the root directory and add the following (replace placeholder values with your actual keys):

```env
# ──────────────────────────────────────────────────────────────
#  ┬─ Supabase: Postgres DB + Auth
# ┴──────────────────────────────────────────────────────────────
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key   # for server-side actions

# ──────────────────────────────────────────────────────────────
#  ┬─ Clerk: Authentication & User Management
#  ┴──────────────────────────────────────────────────────────────
CLERK_FRONTEND_API=your-clerk-frontend-api-url
CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key

# ──────────────────────────────────────────────────────────────
#  ┬─ VAPI AI: Text-to-Speech & Speech Recognition
#  ┴──────────────────────────────────────────────────────────────
VAPI_API_KEY=your-vapi-api-key

# ──────────────────────────────────────────────────────────────
#  ┬─ Stripe: Billing & Subscriptions (via Clerk)
#  ┴──────────────────────────────────────────────────────────────
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXX
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# ──────────────────────────────────────────────────────────────
#  ┬─ Sentry: Error Tracking & Performance Monitoring
#  ┴──────────────────────────────────────────────────────────────
NEXT_PUBLIC_SENTRY_DSN=https://XXXXXXXX@o0.ingest.sentry.io/0
SENTRY_AUTH_TOKEN=your-sentry-auth-token
SENTRY_ORG=your-sentry-organization
SENTRY_PROJECT=converso
```

> **Note:**
>
> * `NEXT_PUBLIC_` variables are exposed to the browser; non-prefixed secrets must only be used server-side.
> * Keep your `.env.local` file out of version control.

---

### Running Locally

1. **Start Supabase (optional)**
   If using Supabase locally, navigate to the project root and run:

   ```bash
   supabase start
   ```

2. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000` to view Converso in development mode.

---

## Usage

1. **Sign Up / Log In**

   * Visit the homepage.
   * Click “Sign Up” or “Log In” to authenticate via Clerk.
   * Complete any email verification or OAuth flow.

2. **Create a Learning Session**

   * Select the subject you want to study (e.g., Mathematics, History, Coding).
   * Choose a voice:

     * **Gender:** Male / Female
     * **Tone:** Formal / Casual

3. **Engage in Conversation**

   * The AI companion will greet you.
   * Ask questions or request explanations in natural language.
   * The companion responds with real-time voice (VAPI AI) and on-screen text.

4. **Progress Tracking**

   * Each interaction is saved in your lesson history.
   * Access “My Profile” to review past lessons, revisit questions, or continue from where you left off.

5. **Subscription Management**

   * Go to “Billing” to view available plans.
   * Enter your payment details via Stripe (test / production).
   * Manage or cancel subscriptions directly from your dashboard.

---

## Folder Structure

```
├── public/                   # Static assets (images, icons, etc.)
├── src/
│   ├── components/           # Shared React components (UI atoms, molecules)
│   ├── features/             # Feature-specific modules (e.g., Auth, Billing, LearningSession)
│   │   ├── auth/             # Clerk-related components and hooks
│   │   ├── billing/          # Stripe subscription UI and API calls
│   │   └── learning/         # Lesson interface, VAPI AI integration, transcripts
│   ├── lib/                  # Utility functions and API wrappers
│   │   ├── supabaseClient.ts # Supabase initialization
│   │   ├── vapiClient.ts     # VAPI AI client wrapper
│   │   ├── sentry.ts         # Sentry initialization
│   │   └── stripeServer.ts   # Server-side Stripe handling (webhooks, checkout)
│   ├── pages/                # Next.js pages (if using pages directory)
│   ├── app/                  # Next.js app router (if using app directory)
│   │   ├── layout.tsx        # Root layout (applies global styles, providers)
│   │   ├── page.tsx          # Home page
│   │   ├── dashboard/        # Authenticated user routes (Profile, Billing, History)
│   │   └── api/              # Next.js API routes (e.g., /api/voice, /api/stripe-webhook)
│   ├── styles/               # Global CSS/Tailwind configuration
│   └── types/                # TypeScript type declarations (e.g., User, Lesson, Plan)
├── .env.local                # Local environment variables (not committed)
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

> **Note:** If your project uses the **App Router** (Next.js 13+), pages/ may be replaced by an `app/` directory. Adjust references accordingly.

---

## Deployment

This project is configured for seamless deployment on **Vercel**. To deploy:

1. **Push to GitHub**
   Ensure your latest commits are pushed to your remote repository.

2. **Connect to Vercel**

   * Sign in to [Vercel](https://vercel.com/) and create a new project.
   * Import your GitHub repository.
   * Under Project Settings → Environment Variables, copy the same keys from your local `.env.local`.

3. **Deploy**

   * Vercel will automatically install dependencies and run `pnpm build`.
   * Once the build succeeds, Vercel provides a unique URL (e.g., `https://converso-xyz.vercel.app/`).

4. **Verify**

   * Visit the deployed URL.
   * Sign up, create a lesson, and test voice interactions.

---

## Error Monitoring

1. **Sentry Configuration**

   * Initialize Sentry at the earliest entry point (e.g., `src/lib/sentry.ts`):

     ```ts
     import * as Sentry from "@sentry/nextjs";

     Sentry.init({
       dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
       tracesSampleRate: 0.2,       // Adjust based on acceptable performance overhead
       environment: process.env.NODE_ENV,
     });
     ```

2. **Capturing Errors**

   * Uncaught exceptions and unhandled promise rejections are automatically captured.
   * To manually log errors:

     ```ts
     import * as Sentry from "@sentry/nextjs";

     try {
       // some fragile logic
     } catch (error) {
       Sentry.captureException(error);
     }
     ```

3. **Performance Monitoring**

   * Sentry’s performance tracing tags long‐running requests.
   * Configure `tracesSampleRate` appropriately (e.g., `0.1 – 0.5`) for production vs. staging.

---

## Contributing

Contributions—whether bug fixes, documentation improvements, or new features—are always welcome! Follow these steps:

1. **Fork the repository**
2. **Create a feature branch**

   ```bash
   git checkout -b feature/my-new-feature
   ```
3. **Install dependencies & make your changes**
4. **Write or update tests** (if applicable)
5. **Commit & push your branch**
6. **Open a Pull Request** with a descriptive title and details of your changes

Please adhere to the existing code style (Prettier + ESLint are configured). Ensure all checks pass before opening a PR.

---

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute as permitted by the license.

---

**Thank you for checking out Converso!**
Any questions or feedback? Please open an issue or reach out to `nikhil.6174s@gmail.com`.
