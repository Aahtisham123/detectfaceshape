import Shell from "@/components/layout/Shell";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <Shell footer={<Footer />}>{children}</Shell>;
}
