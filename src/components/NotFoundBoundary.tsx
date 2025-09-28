"use client";

import {notFound} from "next/navigation";
import {ErrorBoundary} from "react-error-boundary";

export function NotFoundBoundary({children}: {children: React.ReactNode}) {
  return (
    <ErrorBoundary fallback={null} onError={() => notFound()}>
      {children}
    </ErrorBoundary>
  );
}
