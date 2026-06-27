import Link from "next/link";
import { cn } from "@/lib/cn";
import Icon from "./Icon";

type ButtonVariant = "primary" | "secondary" | "dark";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  showArrow?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-ink hover:brightness-95",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-bg",
  dark: "bg-ink text-bg hover:opacity-90",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  showArrow = true,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-transform duration-200 hover:-translate-y-0.5",
    variants[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <Icon name="arrow-right" className="h-4 w-4" />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
