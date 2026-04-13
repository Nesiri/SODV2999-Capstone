export const CenteredLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen min-w-screen bg-gradient-to-br from-amber-50 to-white flex items-center justify-center">
    <div className="w-full max-w-md px-4">{children}</div>
  </div>
);
