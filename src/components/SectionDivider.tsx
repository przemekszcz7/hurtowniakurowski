import { cn } from '@/src/lib/utils';

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className={cn("h-2 w-full warning-stripe", className)} />
  );
}
