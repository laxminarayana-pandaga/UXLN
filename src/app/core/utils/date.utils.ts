import { YearMonth } from '../models/portfolio.models';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatYearMonth(value: YearMonth | null): string {
  return value ? `${MONTHS[value.month - 1]} ${value.year}` : 'Present';
}

export function formatRange(start: YearMonth, end: YearMonth | null): string {
  return `${formatYearMonth(start)} – ${formatYearMonth(end)}`;
}

function toIndex(value: YearMonth): number {
  return value.year * 12 + (value.month - 1);
}

function nowYearMonth(): YearMonth {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
}

/** Whole months between two dates, counting both the start and end month (LinkedIn style). */
export function monthsBetween(start: YearMonth, end: YearMonth | null): number {
  return toIndex(end ?? nowYearMonth()) - toIndex(start) + 1;
}

export function formatDuration(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months) parts.push(`${months} mo${months > 1 ? 's' : ''}`);
  return parts.join(' ') || '1 mo';
}

/** Completed years since a date — used for the "18+ years" figure. */
export function yearsSince(start: YearMonth): number {
  return Math.floor((toIndex(nowYearMonth()) - toIndex(start)) / 12);
}

export function earliest(values: readonly YearMonth[]): YearMonth {
  return values.reduce((a, b) => (toIndex(b) < toIndex(a) ? b : a));
}

/** Latest end date; `null` (present) wins over any fixed date. */
export function latest(values: readonly (YearMonth | null)[]): YearMonth | null {
  if (values.some((v) => v === null)) return null;
  return (values as YearMonth[]).reduce((a, b) => (toIndex(b) > toIndex(a) ? b : a));
}
