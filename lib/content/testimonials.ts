export type Testimonial = { quote: string; name: string; context: string; rating?: 1 | 2 | 3 | 4 | 5 };

/**
 * Real user feedback only. Add entries here (with the person's permission) and the testimonials
 * section appears automatically on the homepage and tool pages. Never add invented quotes:
 * fake reviews break consumer-protection rules (e.g. the FTC's 2024 rule on fake reviews).
 */
export const TESTIMONIALS: Testimonial[] = [];
