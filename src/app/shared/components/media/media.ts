import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { MediaAsset } from '../../../core/models/portfolio.models';
import { IMAGE_PLACEHOLDER } from '../../../core/constants';
import { Icon } from '../icon/icon';

/**
 * Image frame with a designed placeholder state.
 * Renders the image at `asset.src`. When that is the shared placeholder image, the
 * suggested filename (`hint`) is overlaid so the owner knows which file to add.
 * With no `src` (or if loading fails) a CSS placeholder panel is shown instead.
 */
@Component({
  selector: 'app-media',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[style.aspect-ratio]': 'ratio()' },
  templateUrl: './media.html',
  styleUrl: './media.scss',
})
export class Media {
  readonly asset = input.required<MediaAsset>();
  readonly ratio = input('4 / 3');
  readonly priority = input(false);

  private readonly failed = signal(false);
  protected readonly showImage = computed(() => !!this.asset().src && !this.failed());
  protected readonly isPlaceholder = computed(() => this.asset().src === IMAGE_PLACEHOLDER);
  protected readonly altText = computed(() =>
    this.isPlaceholder() ? `${this.asset().alt} (image to be added)` : this.asset().alt,
  );

  protected onError(): void {
    this.failed.set(true);
  }
}
