import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { MediaAsset } from '../../../core/models/portfolio.models';
import { Icon } from '../icon/icon';

/**
 * Image frame with a designed placeholder state.
 * Renders the real image when `asset.src` is set; otherwise (or if loading fails)
 * shows a neutral panel telling the owner which file to add.
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

  protected onError(): void {
    this.failed.set(true);
  }
}
