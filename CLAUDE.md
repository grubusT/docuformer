# DischargeFormer

A web app that provides the Westpac home loan discharge authority form as a free, fillable PDF download. Built with Next.js 15 and TypeScript.

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

- **PDF stamping at runtime:** The original PDF is loaded server-side, user inputs are stamped over the existing form fields using pdf-lib, and the modified PDF is streamed back as a download. We do NOT use interactive PDF form fields - we draw text directly onto the page at fixed coordinates.
- **API route for PDF generation:** PDF creation happens in `src/app/api/generate-pdf/route.ts`, not in a client component, to keep pdf-lib server-side only.
- **No client-side PDF manipulation:** pdf-lib runs only in the API route. The form UI is a plain React form that POSTs to the API endpoint.

## Code Conventions

- Use `async/await`, never `.then()` chains
- Always type function parameters and return values explicitly - no implicit `any`
- Use named exports, not default exports, for components (except `page.tsx` and `layout.tsx` which Next.js requires as default)
- Tailwind classes only - no inline styles, no CSS modules
- Keep API routes thin: business logic lives in `src/lib/`, routes just call lib functions
- Validate all user input before passing it to pdf-lib

## What NOT To Do

- Do NOT modify `public/forms/discharge-authority.pdf` - it is the source of truth
- Do NOT install alternative PDF libraries (pdfjs, react-pdf, puppeteer) - we use pdf-lib only
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
