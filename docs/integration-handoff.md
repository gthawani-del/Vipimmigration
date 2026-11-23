# Integration handoff

## Implemented for UI review
- Next.js App Router public templates: home, explore, updates, India-to-Canada, guides/list/detail, videos, Ask VIP, account and saved library.
- Distinct desktop/mobile CSS, native language picker (English, Hindi, Gurmukhi Punjabi, Gujarati), visible English fallback for unapproved content translations.
- Shared typed content state and localStorage preview adapter. Google/email buttons explicitly explain pending integration; separate member preview toggle does not create accounts.
- Single-admin backoffice preview: page CRUD, ordered sections, visibility, sources, review status, media register/alt/focal points/usage, SEO fields, full section translations, video records, blog-to-video production drafts, guest/member limits.
- Eight deduplicated source WebP assets uploaded and read back from Drive before GitHub. See assets.json and drive-assets.json.
- Six source-linked guide drafts, three editorial update drafts (NOT current news), four video draft records with no playable URLs.

## Supabase and service connection — next stage
1. Replace browser-local ContentState with server content adapter; tables pages, sections, translations, media, video_records, video_jobs, profiles, bookmarks, conversations/messages and usage counters. Server-render published approved records; drafts only visible to authenticated admin preview.
2. Configure Google/email auth, single admin authorization and row-level policies before exposing a backoffice. Member flag/localStorage is never authorization. Do not connect production writes to the current public preview without replacing this.
3. Protected uploaded-video storage and signed delivery URLs server-side; authenticated YouTube page gating cannot prevent shared external links.
4. Atomic per-visitor/per-account daily AI usage server-side (guest3/day; proposed reset Asia/Kolkata, configurable). Browser count currently only demonstrates UI, not abuse prevention.
5. Approved-source retrieval, model provider, citations and budgets; no live AI responses in this preview. Confirm member limits before activation.
6. Account email templates and actual delivery. No newsletter workflow.
7. Domain, localized server URLs/hreflang, canonical URLs, server metadata from published CMS, sitemap and valid structured data. Global preview noindex stays on until production approval. CMS metadata preview edits are local and do not change server seed metadata.
8. Reviewed translations and generated video assets. AI versus deterministic video provider routing/costs intentionally not implemented pending separate discussion.
9. Privacy, retention, account deletion and legal copy need operating details before public launch.

## Important preview boundaries
- Seed drafts intentionally visible in this design preview, prominently labelled draft, with indexing disabled.
- Browser-local editing in another tab requires reload. Nothing is written to a production database.
- Source thumbnails are only ~150px wide and retain mockup copy; replace/recreate in native OpenAI image generation before production video release. No synthetic image generation was needed for this source-slicing pass.
- Shared references are exact assets, not separate mobile duplicates. Standard line icons use lucide-react.
