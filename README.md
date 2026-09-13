# Promptopia - AI Prompt Sharing Platform

A full-stack Next.js application for discovering, creating, and sharing creative AI prompts.
Built with the Next.js App Router, React, Tailwind CSS, NextAuth.js, and MongoDB.

## Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Backend & Auth:** Next.js Route Handlers, NextAuth.js (Google Provider)
- **Database:** MongoDB, Mongoose

## Acknowledgement & Credits

**Original Project Tutorial:** Built following the full-stack MERN tutorial by [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) ([Watch on YouTube](https://youtu.be/wm5gMKuwSYk?si=F2AkHSO6SppkiHUE)).

## Key Improvements & Refactoring (Beyond the Tutorial)

### 1. Next.js App Router Modernization & Type Safety

- **Asynchronous Dynamic APIs:** Upgraded route handlers and client pages to comply with Next.js dynamic API standards by unwrapping `params` and `searchParams` via `await` and React's `use()` hook.
- **Strict Accessibility (a11y):** Added structured alternative text (`alt`) props across standard `<Image />` elements to satisfy strict runtime accessibility checks.

### 2. Database Population & Schema Integrity

- **Population Logic:** Enforced explicit Mongoose `.populate('creator')` execution across all server endpoints to ensure reference integrity and eliminate `TypeError` exceptions during client rendering.
- **Reference Validation:** Added optional chaining (`post.creator?.username`) and orphan record checks to handle edge-case data lookups without breaking UI rendering.
- **HMR-Safe Models:** Implemented idempotent Mongoose model initializations (`models.Prompt || model('Prompt', PromptSchema)`) to prevent runtime model overwrite crashes during hot module reloads.

### 3. Client UI & Interactivity Features

- **Debounced Live Search:** Added debounced search filters to search across prompts, tags, and usernames seamlessly without sending unnecessary request loads to the server.
- **Dynamic Profile Navigation:** Built dynamic routing for `/profile/[id]?name=[username]`, allowing users to inspect target profiles, their prompt collections, and author feeds.
- **Explicit Auth Callbacks:** Configured NextAuth `signOut({ callbackUrl: "/" })` execution across desktop and mobile navigation layouts to enforce home route redirects upon session destruction.
