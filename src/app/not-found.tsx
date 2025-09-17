import Link from "next/link";
import Button from "@/components/ui/Button";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
      <div className="text-center">
        <Logo size="xl" className="mb-8" />
        <h1 className="text-6xl font-bold text-[var(--ink)] mb-4">404</h1>
        <p className="text-xl text-[var(--ink-dim)] mb-8">
          Page not found
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

