// packages/@silence/language/src/index.ts

export const FORBIDDEN_TERMS = [
  'therapy', 'diagnosis', 'treatment', 'healing', 'wellness',
  'mental health', 'emotional', 'mood', 'spiritual', 'mystical',
  'advice', 'coach', 'journal', 'reflection', 'personality'
] as const;

export function validate(text: string): { valid: boolean; violations: string[] } {
  const lower = text.toLowerCase();
  const violations = FORBIDDEN_TERMS.filter(term => lower.includes(term));
  return { valid: violations.length === 0, violations };
}

export function sanitize(text: string): string {
  let result = text;
  FORBIDDEN_TERMS.forEach(term => {
    const regex = new RegExp(term, 'gi');
    result = result.replace(regex, '[structural term]');
  });
  return result;
}
