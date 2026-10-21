import {
  ArrowRight, ArrowUp, BookOpen, Brain, Brush, CalendarDays, Calculator, Camera, Check, ChevronDown, Crop, SwitchCamera, LoaderCircle, ChevronRight, CircleAlert,
  CircleCheck, CircleHelp, CircleUser, Clock, Compass, Cookie, Copy, Crown, Diamond, Droplet, Eye, FileText, Fingerprint,
  FlipHorizontal2, Gauge, Gem, GitCompare, Glasses, Grid3x3, Heart, Hexagon, House, Info, Layers, Lightbulb, ListChecks, Lock,
  Globe, Languages, Mail, Menu, MessageSquare, PanelLeftClose, PanelLeftOpen, Palette, Pipette, Quote, Ratio, RotateCcw, Ruler, ScanFace, Scissors, Search, SearchX, Share2, Shapes, ShieldCheck,
  Shirt, Smile, Sparkles, Star, Target, Triangle, TriangleAlert, Upload, UserRound, Users, Wind, X, Zap, Cake,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  ArrowRight, ArrowUp, BookOpen, Brain, Brush, CalendarDays, Calculator, Camera, Check, ChevronDown, Crop, SwitchCamera, LoaderCircle, ChevronRight, CircleAlert,
  CircleCheck, CircleHelp, CircleUser, Clock, Compass, Cookie, Copy, Crown, Diamond, Droplet, Eye, FileText, Fingerprint,
  FlipHorizontal2, Gauge, Gem, GitCompare, Glasses, Grid3x3, Heart, Hexagon, House, Info, Layers, Lightbulb, ListChecks, Lock,
  Globe, Languages, Mail, Menu, MessageSquare, PanelLeftClose, PanelLeftOpen, Palette, Pipette, Quote, Ratio, RotateCcw, Ruler, ScanFace, Scissors, Search, SearchX, Share2, Shapes, ShieldCheck,
  Shirt, Smile, Sparkles, Star, Target, Triangle, TriangleAlert, Upload, UserRound, Users, Wind, X, Zap, Cake,
};

export type IconName = keyof typeof ICONS;

/** Decorative by default (aria-hidden); pass `label` when the icon carries meaning on its own. */
export function Icon({ name, size = 18, label, ...rest }: { name: IconName; size?: number; label?: string } & LucideProps) {
  const C = ICONS[name];
  return <C size={size} aria-hidden={label ? undefined : true} aria-label={label} role={label ? "img" : undefined} strokeWidth={2} {...rest} />;
}
