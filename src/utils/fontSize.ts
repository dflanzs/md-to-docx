export function toDocxFontSize(value?: number, fallback?: number): number | undefined {
  const resolved = value ?? fallback;
  if (resolved === undefined || resolved === null) {
    return undefined;
  }
  return Math.round(resolved * 2);
}
