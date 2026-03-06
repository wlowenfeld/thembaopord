import { micromark } from "micromark";

/**
 * Convert markdown string to HTML using micromark.
 * Used for rendering blog post content from .mdx files.
 */
export function markdownToHtml(content: string): string {
  return micromark(content);
}
