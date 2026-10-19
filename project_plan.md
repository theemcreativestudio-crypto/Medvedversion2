# Team Medved — Website Redesign Plan

## 1. Project Description
Redesign of the Team Medved website (teammedved.net) — a Los Angeles luxury real estate
team led by Karen Medved, affiliated with Compass California, Inc.

- **Positioning:** Boutique, relationship-driven luxury real estate team.
- **Target users:** LA buyers and sellers (Hollywood Hills, Lake Hollywood, Studio City,
  Valley Village, Sherman Oaks, Toluca Lake and surrounding areas), plus relocation and
  investment clients.
- **Core value:** Local expertise, a curated listing portfolio, a strong neighborhood
  guide system, and a clear path to a free home valuation.

**Source of truth:** existing sections, existing content, existing imagery and existing
brand colors from the current website. The redesign elevates presentation, hierarchy, UX
and visual quality while keeping the brand identity intact.

## 1.1 Brand & Design System
- **Palette (confirmed with client):** warm sand / champagne gold — soft and muted, *not*
  orange. Cream/ivory canvas (`background`), champagne sand as the primary/CTA color
  (`primary`, dark espresso text on sand buttons), deep bronze as the accent (`accent`),
  warm taupe/stone as the secondary (`secondary`), and a warm espresso near-black for text
  (`foreground`). All colors are StyleSystem OKLCH scale tokens consumed via
  `oklch(var(--token))`.
- **Typography:** an elegant serif (Cormorant Garamond) stands in for the brand font
  *Kellina* for headings, paired with *Onest* for body, navigation, buttons and labels.
  (Kellina is not available on Google Fonts; a free serif alternative is used until the
  licensed Kellina files are provided.)
- **Assets:** real brand assets from the live site — the LA skyline sunset hero **video**,
  the Team Medved **logo** (light + dark variants), real property photography, real
  neighborhood imagery, the team group photo and the Compass mark.
- **Layout direction:** editorial, airy, cream/sand; large, impactful cards with generous
  image areas; alternating background tones for rhythm; no heavy shadows.

## 2. Page Structure
- `/` - Home
- `/about` - Meet the Team
- `/our-community` - Our Community
- `/properties/sale` - Featured Listings
- `/properties/lease` - For Leases
- `/properties/sold` - Sold Listings
- `/properties/leased` - Leased Properties
- `/properties/:slug` - Property Detail
- `/buyers-guide` - Buyer's Guide
- `/sellers-guide` - Seller's Guide
- `/communities` - Neighborhoods
- `/neighborhoods/:slug` - Neighborhood Detail
- `/home-valuation` - Home Valuation
- `/testimonials` - Testimonials
- `/contact` - Contact Us
- `/terms-and-conditions` - Privacy Policy

## 3. Core Features
- [x] Global header nav with slide-out sidebar menu
- [x] Global contact modal
- [x] Home page (hero, stats, quick-jump, featured listings, about, buy/sell, neighborhoods,
      newsletter, work-with-us, instagram, footer)
- [ ] Listings index + property detail
- [ ] Neighborhood directory + neighborhood detail
- [ ] Buyer's & Seller's guides
- [ ] Home valuation tool
- [ ] Testimonials + Contact page
- [ ] Our Community page

## 4. Data Model Design
No Supabase database required. This is a marketing/brochure site.
- Contact inquiries and newsletter signups are handled by the built-in Form service.
- Listings and neighborhood content are static content managed in front-end data files.

## 5. Backend / Third-party Integration Plan
- Database: not required — static content + built-in Form service.
- Shopify: not needed.
- Stripe / Toss / PayPal: not needed.
- Form: used for the header Contact Us modal and the home page Newsletter signup.
- Others: none.

## 6. Development Phase Plan

### Phase 1: Home Page
- Goal: Rebuild the full Team Medved home page with the elevated champagne brand design system.
- Deliverable: Design tokens (warm sand/champagne palette + Cormorant/Onest typography),
  global header (real logo) / footer / contact modal, a real-video hero, and all home page
  sections in the exact existing order using the real brand imagery.

### Phase 2: Meet the Team + Our Community
- Goal: Team credibility pages.
- Deliverable: About page with Karen's bio and past-sales carousel; Community page.

### Phase 3: Properties
- Goal: Listing discovery.
- Deliverable: Sale / Lease / Sold / Leased index pages and the property detail template.

### Phase 4: Buyers & Sellers Guides
- Goal: Educational lead-capture content.
- Deliverable: Buyer's Guide and Seller's Guide pages.

### Phase 5: Neighborhoods
- Goal: Local SEO depth.
- Deliverable: Neighborhood directory and the neighborhood detail template.

### Phase 6: Conversion Pages
- Goal: Valuation, social proof and contact.
- Deliverable: Home Valuation, Testimonials and Contact pages.