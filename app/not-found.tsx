import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap page-head" style={{ padding: "64px 16px" }}>
      <h1>Page not found</h1>
      <p>That page doesn&apos;t exist. Try the <Link href="/">face shape detector</Link> or the <Link href="/face-shapes/">face shapes chart</Link>.</p>
    </main>
  );
}
