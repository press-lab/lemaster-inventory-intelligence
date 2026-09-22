# Lemaster Inventory & Deal Flow Intelligence

A working, local-first owner/operator intelligence layer for a boutique performance and luxury dealer. It turns inventory, pricing, listing readiness, website interest, leads, acquisition sources, and deal blockers into a ranked daily decision brief.

## Run locally

1. Install Node.js 20+.
2. Run `npm install`.
3. On Windows PowerShell, run `npm.cmd run dev` and open the local URL shown by Vite.

## What works

- A decision brief calculated from the current vehicle and lead records.
- Explainable priority scoring for age, market position, media/readiness, stale follow-up, consignor updates, remote-deal blockers, and view-to-lead conversion.
- Searchable and filterable inventory intelligence.
- Vehicle detail with market range, comparable count, reasons, recommended action, price history, editable price, and owner notes.
- Lead pipeline, stale-follow-up visibility, and source-quality comparisons.
- Acquisition-source performance and interest-to-inquiry reporting.
- Browser persistence, portable JSON backup/restore, and demo-data reset.

Edits are saved in the current browser. Use **Data & Settings → Export data** before moving the pilot to another computer or browser profile.

## Demo data and safety

All vehicles, stock numbers, VIN-like identifiers, leads, owners, pricing, and deal states are fictional seed data. The demo does not connect to Dealer.com, CRMs, finance platforms, lenders, or customer systems, and contains no sensitive PII or credit applications.

Priority scoring is transparent: aging inventory, price position, listing readiness, stale serious-lead follow-up, blocked remote handoffs, overdue consignment updates, and weak view-to-inquiry conversion contribute fixed points.

## Production path

Production would need authenticated exports or APIs for Dealer.com inventory, CRM and lead sources, listing-syndication status, finance/deal status, transport/title checklists, and a licensed market-comp provider. Data access, audit history, user roles, consent, and human approval for any outbound communication should be added before live use.
