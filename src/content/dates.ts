/**
 * Parse a YYYY-MM-DD date as a LOCAL date.
 *
 * `new Date("2026-11-13")` is parsed as UTC midnight, which displays as the previous
 * day for anyone west of Greenwich, including Montreal. Building the date from its
 * parts avoids that. Use this anywhere a date from src/content/ is displayed.
 */
export function parseLocalDate(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}
