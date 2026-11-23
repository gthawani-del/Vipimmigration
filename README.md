# VIP Immigration Services

Responsive information-portal and CMS UI preview. Next.js 16 + React 19 + TypeScript. Supabase is intentionally not wired yet.

## Run
```
npm ci
npm run dev
```
Port 4173. `/` website, `/backoffice` CMS, `/review` mobile/desktop review harness.

## Check
```
npm test
npm run typecheck
npm run build
```

## Preview boundary
Local browser sample data only. The member preview switch is not authentication. Draft content is visible for design review; all routes are noindex. Live AI, protected video playback, Google/email sign-in, emails and production persistence are pending integration. Do not deploy as a live service until the integration checklist is complete.

[Agreed scope](docs/superpowers/specs/2026-11-23-portal-design.md) · [Plan](docs/superpowers/plans/2026-11-23-portal.md) · [Integration checklist](docs/integration-handoff.md) · [Asset register](docs/assets.json)
