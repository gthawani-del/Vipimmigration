# Implementation ledger — 2026-11-23 portal

- User approved responsive site/shared CMS and Next.js/TypeScript with Supabase later; instructed proceed.
- Feature branch feat/responsive-portal-cms; main unchanged.
- Plan recorded; authorised parallel CMS implementation completed against shared types.
- Eight source assets extracted, WebP encoded, deduplicated, uploaded and read back from Drive before committing.
- Public templates and local interaction state implemented; CMS includes page/media/SEO/translations/video production briefs/settings.
- Review defects fixed: saved-state schema, full section translation resolver, query synchronization, shared logo, midnight reset and modal keyboard handling.
- Automated tests, typecheck, build and HTTP route checks pass. Visual QA blocked by preview infrastructure.

## Rulings
- Proceeded with implementation under explicit user instruction rather than requesting another planning approval.
- Browser-local preview adapter used until Supabase is wired; never production auth or secure usage enforcement.
- Day reset defaults to Asia/Kolkata for the India-first preview; production timezone remains configurable.
- Layout templates retain fixed structural blocks, while registered content sections support add/remove/reorder; arbitrary drag-and-drop not included.
- Source-derived small thumbnails retained for layout review, with production-quality replacements deferred until video production is agreed.
- No new image synthesis performed: reusable supplied artwork met this extraction pass. Any future generation must use native OpenAI.

## Limitations
Full visual QA, server-rendered CMS metadata integration, live authentication/AI/email/video services and production content approval remain pending. Do not merge/publish as a production service yet.
