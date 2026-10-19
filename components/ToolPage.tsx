import Link from "next/link";
import ToolWidget from "@/components/tools/ToolWidget";
import { Breadcrumbs, Byline, FaqList, JsonLd, Markdown, RelatedTools } from "@/components/Page";
import type { Tool } from "@/lib/content/tools";
import { hubBySlug } from "@/lib/content/typeHubs";
import { breadcrumbs, faqPage, graph, webApp } from "@/lib/schema";
import { SITE } from "@/lib/site";

export default function ToolPage({ tool, children }: { tool: Tool; children?: React.ReactNode }) {
  const crumbs = tool.path === "/" ? [{ name: "Home", path: "/" }] : [{ name: "Home", path: "/" }, { name: "Tools", path: "/tools/" }, { name: tool.name, path: tool.path }];
  const hub = tool.hub && tool.hub !== "face-shapes" ? hubBySlug(tool.hub) : null;
  return (
    <article className="wrap tool-page">
      <JsonLd data={graph(webApp(tool.name, tool.path, tool.description), faqPage(tool.faqs), breadcrumbs(crumbs))} />
      {tool.path !== "/" && <Breadcrumbs items={crumbs} />}
      <header className="page-head">
        <h1>{tool.h1}</h1>
        <p className="lead">{tool.intro}</p>
        {tool.forFun && <p className="badge">Just for fun</p>}
      </header>
      <div className="tool-shell">
        <ToolWidget slug={tool.slug} />
      </div>
      {children}
      <div className="content">
        <Byline />
        <Markdown src={tool.body} />
        {tool.slug === "face-shape-quiz" && <EmbedSnippet />}
        {hub && (
          <p className="callout">
            Want to learn about every type? Read our guide to <Link href={`/${hub.slug}/`}>{hub.name.toLowerCase()}</Link>.
          </p>
        )}
        <FaqList faqs={tool.faqs} />
      </div>
      <RelatedTools slugs={tool.related} />
    </article>
  );
}

function EmbedSnippet() {
  const code = `<iframe src="${SITE.url}/embed/face-shape-quiz/" width="100%" height="640" style="border:0;max-width:720px" title="Face shape quiz" loading="lazy"></iframe>`;
  return (
    <section id="embed" className="embed-box">
      <h2>Embed this quiz on your site</h2>
      <p>Free for salons, barbers, stylists, eyewear shops and bloggers. Copy this code into your page:</p>
      <pre><code>{code}</code></pre>
    </section>
  );
}
