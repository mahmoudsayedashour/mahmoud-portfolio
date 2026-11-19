import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto grid min-h-[70vh] max-w-xl place-items-center px-5 pt-24 text-center">
      <div>
        <p className="section-eyebrow">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold">Page not found</h1>
        <p className="mt-3 text-muted">The page you are looking for does not exist.</p>
        <Link href="/" className="btn btn-primary mt-6">Back to home</Link>
      </div>
    </div>
  );
}
