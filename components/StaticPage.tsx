import { Breadcrumbs, Byline, JsonLd, Markdown } from "@/components/Page";
import { breadcrumbs, graph } from "@/lib/schema";

export default function StaticPage({ title, path, body, extra }: { title: string; path: string; body: string; extra?: object }) {
  const crumbs = [{ name: "Home", path: "/" }, { name: title, path }];
  return (
    <article className="wrap">
      <JsonLd data={graph(breadcrumbs(crumbs), ...(extra ? [extra] : []))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-head"><h1>{title}</h1></header>
      <div className="content">
        <Byline />
        <Markdown src={body} />
      </div>
    </article>
  );
}
