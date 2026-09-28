import { Pipe, PipeTransform } from '@angular/core';

/** 1 → "01" — for editorial index labels. */
@Pipe({ name: 'pad' })
export class PadPipe implements PipeTransform {
  transform(value: number, length = 2): string {
    return String(value).padStart(length, '0');
  }
}
