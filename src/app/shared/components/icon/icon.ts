import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'arrow-up-right'
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
  | 'flag';

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
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(18);
}
