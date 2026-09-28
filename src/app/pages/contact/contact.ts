import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { ContactService } from '../../core/services/contact.service';
import { PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/components/icon/icon';

type FormState = 'idle' | 'submitting' | 'success' | 'error';
type FieldName = 'name' | 'email' | 'subject' | 'message';

const MESSAGE_MIN = 20;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly contactService = inject(ContactService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly injector = inject(Injector);

  protected readonly profile = PROFILE;
  protected readonly state = signal<FormState>('idle');
  protected readonly statusMessage = signal('');
  protected readonly submitted = signal(false);
  protected readonly messageMin = MESSAGE_MIN;

  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(MESSAGE_MIN)]],
  });

  protected showError(field: FieldName): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || this.submitted());
  }

  protected errorFor(field: FieldName): string {
    const errors = this.form.controls[field].errors;
    if (!errors) return '';
    if (errors['required']) return 'This field is required.';
    if (errors['email']) return 'Enter a valid email address, e.g. name@company.com.';
    if (errors['minlength']) {
      return `Please enter at least ${errors['minlength'].requiredLength} characters.`;
    }
    return 'Please check this field.';
  }

  protected submit(): void {
    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.focusFirstInvalid();
      return;
    }

    this.state.set('submitting');
    this.contactService
      .submitContactForm(this.form.getRawValue())
      .pipe(
        finalize(() => {
          if (this.state() === 'submitting') this.state.set('idle');
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (result) => {
          this.statusMessage.set(result.message);
          this.state.set(result.ok ? 'success' : 'error');
          if (result.ok) this.focus('.success');
        },
        error: () => {
          this.statusMessage.set('Something went wrong. Please try again, or reach out on LinkedIn.');
          this.state.set('error');
        },
      });
  }

  protected reset(): void {
    this.form.reset();
    this.submitted.set(false);
    this.state.set('idle');
  }

  private focusFirstInvalid(): void {
    const fields = Object.keys(this.form.controls) as FieldName[];
    const first = fields.find((field) => this.form.controls[field].invalid);
    if (first) this.focus(`#cf-${first}`);
  }

  /** Focus an element once the view has re-rendered. */
  private focus(selector: string): void {
    afterNextRender(
      () => this.host.nativeElement.querySelector<HTMLElement>(selector)?.focus(),
      { injector: this.injector },
    );
  }
}
