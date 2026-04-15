import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-32 text-center">
      <p className="font-mono text-sm font-semibold tracking-[0.2em] uppercase text-[#94a3b8] mb-4">
        404
      </p>
      <h1 className="text-4xl md:text-5xl mb-4">Page not found</h1>
      <p className="text-[#94a3b8] max-w-md mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <Link href="/blog" className="btn">
          Blog
        </Link>
        <Link href="/contact" className="btn">
          Contact
        </Link>
      </div>
    </div>
  );
}
