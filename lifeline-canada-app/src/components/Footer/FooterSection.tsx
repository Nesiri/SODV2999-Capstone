import { type ReactNode } from 'react';

interface FooterSectionProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

export default function FooterSection({
  title,
  children,
  icon,
}: FooterSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}
