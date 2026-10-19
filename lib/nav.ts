import type { IconName } from "@/components/icons";

export type NavItem = { href: string; label: string; icon: IconName };
export type NavGroup = { title: string; items: NavItem[] };

/** Sidebar navigation. Every href must be a real page (checked by tests/content.test.ts). */
export const NAV: NavGroup[] = [
  {
    title: "Face shape",
    items: [
      { href: "/", label: "Face Shape Detector", icon: "ScanFace" },
      { href: "/face-shape-quiz/", label: "Face Shape Quiz", icon: "ListChecks" },
      { href: "/face-shape-calculator/", label: "Face Shape Calculator", icon: "Calculator" },
      { href: "/face-shapes/", label: "Face Shapes Chart", icon: "Shapes" },
    ],
  },
  {
    title: "Facial features",
    items: [
      { href: "/eye-shape-detector/", label: "Eye Shape Detector", icon: "Eye" },
      { href: "/nose-shape-detector/", label: "Nose Shape Detector", icon: "Triangle" },
      { href: "/lip-shape-analyzer/", label: "Lip Shape Analyzer", icon: "Smile" },
      { href: "/jawline-analyzer/", label: "Jawline Analyzer", icon: "Hexagon" },
      { href: "/head-shape-detector/", label: "Head Shape Detector", icon: "CircleUser" },
      { href: "/canthal-tilt-calculator/", label: "Canthal Tilt", icon: "Ruler" },
    ],
  },
  {
    title: "Tests & fun",
    items: [
      { href: "/face-symmetry-test/", label: "Face Symmetry Test", icon: "FlipHorizontal2" },
      { href: "/golden-ratio-face/", label: "Golden Ratio Face", icon: "Ratio" },
      { href: "/facial-proportions-calculator/", label: "Facial Proportions", icon: "Grid3x3" },
      { href: "/attractiveness-test/", label: "Attractiveness Test", icon: "Star" },
      { href: "/how-old-do-i-look/", label: "How Old Do I Look", icon: "Cake" },
      { href: "/face-comparison/", label: "Face Comparison", icon: "GitCompare" },
    ],
  },
  {
    title: "Color & style",
    items: [
      { href: "/skin-undertone-test/", label: "Skin Undertone Test", icon: "Droplet" },
      { href: "/color-analysis/", label: "Color Analysis", icon: "Palette" },
      { href: "/foundation-shade-finder/", label: "Foundation Finder", icon: "Pipette" },
      { href: "/kibbe-body-type-test/", label: "Kibbe Body Type Test", icon: "Shirt" },
    ],
  },
  {
    title: "Guides",
    items: [
      { href: "/eye-shapes/", label: "Eye Shapes", icon: "BookOpen" },
      { href: "/nose-shapes/", label: "Nose Shapes", icon: "BookOpen" },
      { href: "/lip-shapes/", label: "Lip Shapes", icon: "BookOpen" },
      { href: "/blog/", label: "Blog", icon: "FileText" },
    ],
  },
];
