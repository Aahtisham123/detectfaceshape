import { Breadcrumbs, Byline, JsonLd, Markdown } from "@/components/Page";
import { Icon, type IconName } from "@/components/icons";
import Toc from "@/components/ui/Toc";
import { breadcrumbs, graph } from "@/lib/schema";

export default function StaticPage({ title, path, body, icon = "Info", extra }: { title: string; path: string; body: string; icon?: IconName; extra?: object }) {
  const crumbs = [{ name: "Home", path: "/" }, { name: title, path }];
  return (
    <article className="wrap">
      <JsonLd data={graph(breadcrumbs(crumbs), ...(extra ? [extra] : []))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-hero">
        <div className="page-hero-text">
          <span className="hero-badge"><Icon name={icon} size={18} /> Face Shape Detector</span>
          <h1>{title}</h1>
        </div>
      </header>
      <div className="article-grid">
        <div className="content">
          <Byline />
          <Markdown src={body} />
        </div>
        <aside className="article-aside"><Toc /></aside>
      </div>
    </article>
  );
}
