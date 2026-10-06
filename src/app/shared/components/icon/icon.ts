import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'arrow-up-right'
  | 'arrow-down-right'
  | 'arrow-right'
  | 'arrow-left'
  | 'arrow-up'
  | 'linkedin'
  | 'mail'
  | 'pin'
  | 'menu'
  | 'close'
  | 'check'
  | 'image'
  | 'compass'
  | 'layers'
  | 'code'
  | 'flag'
  | 'star'
  | 'building'
  | 'search'
  | 'workflow'
  | 'layout'
  | 'mouse-pointer'
  | 'braces'
  | 'smartphone'
  | 'grid'
  | 'users-2'
  | 'palette'
  | 'ui-layout'
  | 'download'
  | 'sitemap'
  | 'hierarchy'
  | 'flowchart';

/** Decorative inline SVG icon. Give the parent element an accessible label, not the icon. */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  styles: `
    :host {
      display: inline-flex;
      flex-shrink: 0;
      line-height: 0;
    }
  `,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
    >
      @switch (name()) {
        @case ('arrow-up-right') {
          <path d="M7 17 17 7M8 7h9v9" />
        }
        @case ('arrow-down-right') {
          <path d="M7 7 17 17M8 17h9v-9" />
        }
        @case ('arrow-right') {
          <path d="M4 12h16M14 6l6 6-6 6" />
        }
        @case ('arrow-left') {
          <path d="M20 12H4M10 6l-6 6 6 6" />
        }
        @case ('arrow-up') {
          <path d="M12 20V4M6 10l6-6 6 6" />
        }
        @case ('linkedin') {
          <path
            fill="currentColor"
            stroke="none"
            d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.44 13.4c0-3.1-1.65-4.54-3.86-4.54-1.78 0-2.58.98-3.02 1.67V8.5h-3.38c.05.96 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.93.27-.68.9-1.39 1.94-1.39 1.37 0 1.92 1.05 1.92 2.58V20h3.38l-.49-6.6Z"
          />
        }
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
        }
        @case ('pin') {
          <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.5" />
        }
        @case ('menu') {
          <path d="M4 8h16M4 16h16" />
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6 6 18" />
        }
        @case ('check') {
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        }
        @case ('compass') {
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
        }
        @case ('layers') {
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 13 9 5 9-5" />
        }
        @case ('code') {
          <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
        }
        @case ('flag') {
          <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
        }
        @case ('image') {
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="1.8" />
          <path d="m21 16-5.5-5.5L6 20" />
        }
        @case ('star') {
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        }
        @case ('building') {
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        }
        @case ('search') {
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        }
        @case ('workflow') {
          <circle cx="6" cy="6" r="3" />
          <path d="M6 9v6" />
          <path d="M6 15a3 3 0 0 0 3 3h6" />
          <circle cx="18" cy="18" r="3" />
        }
        @case ('layout') {
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        }
        @case ('mouse-pointer') {
          <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3" />
          <path d="m13 13 6 6" />
        }
        @case ('braces') {
          <path d="M8 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4" />
          <path d="M16 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        }
        @case ('smartphone') {
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
        }
        @case ('grid') {
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        }
        @case ('users-2') {
          <path d="M8 21v-2a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v2" />
          <circle cx="4" cy="7" r="4" />
          <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        }
        @case ('palette') {
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        }
        @case ('ui-layout') {
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        }
        @case ('download') {
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        }
        @case ('sitemap') {
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="8.5" y="14" width="7" height="7" rx="1" />
          <path d="M6.5 10v4" />
          <path d="M17.5 10v4" />
          <path d="M12 14v-4" />
        }
        @case ('hierarchy') {
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <path d="M12 8v6" />
          <path d="M12 14H9a2 2 0 0 0-2 2v2" />
          <path d="M12 14h3a2 2 0 0 1 2 2v2" />
        }
        @case ('flowchart') {
          <rect x="3" y="3" width="6" height="4" rx="1" />
          <rect x="15" y="3" width="6" height="4" rx="1" />
          <rect x="9" y="17" width="6" height="4" rx="1" />
          <path d="M6 7v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
          <path d="M12 14v3" />
        }
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(18);
}
