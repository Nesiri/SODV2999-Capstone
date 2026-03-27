// test/providers.tsx
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import type { ReactNode } from "react";

// This file only exports components - good for Fast Refresh
export function AllTheProviders({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <AuthProvider>
        {children}
      </AuthProvider>
    </BrowserRouter>
  );
}