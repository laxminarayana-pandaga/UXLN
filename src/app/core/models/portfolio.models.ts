/** A calendar month, 1-based (1 = January). */
export interface YearMonth {
  readonly year: number;
  readonly month: number;
}

/**
 * An image slot. `src` stays undefined until a real asset exists;
 * `hint` tells the owner where to drop the file so the placeholder can be swapped.
 */
export interface MediaAsset {
  readonly src?: string;
  readonly alt: string;
  readonly hint: string;
  readonly caption?: string;
}

/** Copy that still needs real information from the portfolio owner. */
export interface DraftableText {
  readonly text: string;
  readonly isPlaceholder?: boolean;
}

export interface SocialLink {
  readonly label: string;
  readonly url: string;
  readonly handle: string;
}

export interface Profile {
  readonly name: string;
  readonly shortName: string;
  readonly roles: readonly string[];
  readonly headline: string;
  readonly headlineSuffix: string;
  readonly summary: string;
  readonly currentRole: string;
  readonly careerStart: YearMonth;
  readonly portrait: MediaAsset;
  readonly contact: ContactDetails;
  readonly linkedIn: SocialLink;
}

export interface ContactDetails {
  readonly email: DraftableText;
  readonly location: DraftableText;
}

export interface SnapshotItem {
  readonly value: string;
  readonly label: string;
  readonly detail: string;
  /** Small category tag shown in the card corner. */
  readonly tag?: string;
}

export interface CapabilityGroup {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly items: readonly string[];
}

export interface ProcessStep {
  readonly title: string;
  readonly description: string;
}

// ── Experience ──────────────────────────────────────────────

export interface Role {
  readonly title: string;
  readonly start: YearMonth;
  /** `null` means the role is current. */
  readonly end: YearMonth | null;
  readonly summary?: string;
  readonly highlights?: readonly string[];
  readonly skills?: readonly string[];
}

export interface Employer {
  readonly company: string;
  readonly location?: string;
  readonly workplace?: string;
  /** Ordered most senior / most recent first. Roles may overlap in time. */
  readonly roles: readonly Role[];
}

// ── Projects ────────────────────────────────────────────────

export type RoleArea = 'UX' | 'UI' | 'Research' | 'Prototyping' | 'Frontend' | 'Collaboration';

export interface KeyDecision {
  readonly title: string;
  readonly description: string;
}

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly category: string;
  readonly role: string;
  readonly company: string;
  readonly timeline: string;
  readonly industry: string;
  readonly contributions: readonly string[];
  readonly cover: MediaAsset;
  readonly featured: boolean;
  readonly challenge: readonly string[];
  readonly approach: readonly string[];
  readonly gallery: readonly MediaAsset[];
  readonly decisions: readonly KeyDecision[];
  readonly outcome: DraftableText;
  readonly myRole: readonly { readonly area: RoleArea; readonly detail: string }[];
}

// ── SEO ─────────────────────────────────────────────────────

export interface SeoData {
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly type?: 'website' | 'article' | 'profile';
}

// ── Contact ─────────────────────────────────────────────────

export interface ContactMessage {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

export interface ContactResult {
  readonly ok: boolean;
  readonly message: string;
}
