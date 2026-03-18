import DOMPurify from 'dompurify';

export function purify(input: string): string {
  return DOMPurify.sanitize(input);
}
