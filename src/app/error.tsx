"use client";
import { useEffect } from "react";
import Button from "@/components/ui/Button";
import Logo from "@/components/Logo";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
      <div className="text-center">
        <Logo size="xl" className="mb-8" />
        <h1 className="text-4xl font-bold text-[var(--ink)] mb-4">
          Something went wrong
        </h1>
        <p className="text-lg text-[var(--ink-dim)] mb-8">
          We&apos;re working to fix this issue.
        </p>
        <Button variant="primary" size="lg" onClick={reset}>
          Try again
        </Button>
      </div>
    </div>
  );
}

