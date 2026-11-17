/** Nonbreaking spaces are applied at render time, leaving source copy and anchors intact. */
export function caseText(text: string | undefined): string {
  if (!text) return '';
  const nbsp = '\u00a0';
  let result = text.replace(/(^|[\s(“‘])([AaI])[ \t]+(?=\S)/g, `$1$2${nbsp}`);
  // Keep a measurement with its unit or counted item (50 employees, 450+ screens).
  result = result.replace(/\b(\d[\d,.]*(?:[+%])?)[ \t]+(?=[A-Za-z])/g, `$1${nbsp}`);
  // Avoid a short final word stranded alone, without creating long unbreakable phrases.
  result = result.replace(/(\S+)[ \t]+(\S+)([ \t]*)$/, (match, previous: string, last: string, trailing: string) => {
    const lastWord = last.replace(/[^\p{L}\p{N}]/gu, '');
    return !last.includes(nbsp) && lastWord.length <= 7 && `${previous} ${last}`.length <= 20
      ? `${previous}${nbsp}${last}${trailing}`
      : match;
  });
  return result;
}
