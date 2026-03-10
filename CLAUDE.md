# DocuFormer

A web app that provides official home loan discharge authority forms as free, fillable PDF downloads. Currently serves the Westpac form; designed to scale to other banks and document types. Built with Next.js 15 and TypeScript.

## Tech Stack

- **Framework:** Next.js 15 (App Router, `src/` directory)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **PDF:** pdf-lib (stamp user inputs onto original PDF at runtime)
- **Package manager:** npm

## Key Commands

```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # Production build
npm run lint       # ESLint
npx tsc --noEmit   # TypeScript type check (no output files)
```

## Project Structure

```
src/
  app/
    page.tsx              # Landing page with form
    api/
      generate-pdf/
        route.ts          # POST handler: accepts form data, returns stamped PDF
  components/             # Reusable UI components
  lib/
    pdf.ts                # pdf-lib logic: load base PDF, stamp fields, return bytes
  types/
    form.ts               # Shared TypeScript types for form fields
public/
  forms/
    discharge-authority.pdf   # Original Westpac form (DO NOT MODIFY)
```

## Architecture Decisions

- **Serve original PDF, never modify it:** The Westpac discharge authority form is a legally certified document. We serve the original file bytes unchanged. Users fill the interactive fields in their browser's native PDF viewer. Recreating or modifying it is illegal.
- **PDF has native interactive fields:** The form is PDF 1.6 with AcroForm fields in compressed object streams. The browser decodes and renders them. We do not need pdf-lib at all.
- **Download gating via API route:** The PDF is served through `src/app/api/download/route.ts` (not as a static asset) so we can add payment/auth checks in that route later without changing anything else.
- **No pdf-lib needed for current phase:** pdf-lib fails to load this certified PDF anyway. It will only be needed if a future feature requires generating a separate summary document.

## Code Conventions

- Use `async/await`, never `.then()` chains
- Always type function parameters and return values explicitly - no implicit `any`
- Use named exports, not default exports, for components (except `page.tsx` and `layout.tsx` which Next.js requires as default)
- Tailwind classes only - no inline styles, no CSS modules
- Keep API routes thin: business logic lives in `src/lib/`, routes just call lib functions
- Validate all user input before passing it to pdf-lib

## What NOT To Do

- Do NOT modify `public/forms/discharge-authority.pdf` - it is a legally certified document, modifying or recreating it is illegal
- Do NOT serve the PDF as a static public asset - it must go through the API route for future payment gating
- Do NOT install PDF libraries - the browser handles rendering natively, no library needed
- Do NOT add a database or auth layer yet - that comes in a later phase
- Do NOT add payment logic yet - Stripe integration is a future phase
- Do NOT use `any` type - if unsure, use `unknown` and narrow it
- Do NOT create unnecessary abstraction layers for one-off operations

## Current Phase

**Phase 3 - Core PDF Feature**

Building the fillable form UI and the PDF stamping API. No auth, no payments yet.

## Form Fields (Westpac Discharge Authority)

The form collects these fields from the user (exact field names to be confirmed against the original PDF):
- Borrower name(s)
- Loan account number
- Property address
- Settlement date
- Contact phone number
- Solicitor/conveyancer details (name, firm, phone)
- Reason for discharge (sale, refinance, full repayment)

## Environment

No `.env` variables required for the current phase. When Stripe is added later, keys will go in `.env.local` (gitignored).
