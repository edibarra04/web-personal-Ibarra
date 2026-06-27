import { cn } from "@/lib/cn";
import Tag from "./Tag";

type SectionHeadingProps = {
  tag?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {tag && <Tag>{tag}</Tag>}
      <h2 className="max-w-3xl font-display text-3xl uppercase leading-[1.05] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base text-ink-soft sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Palabra clave del titular: script con peso + color de acento. */
export function ScriptWord({ children }: { children: React.ReactNode }) {
  return <span className="font-script text-accent normal-case tracking-normal">{children}</span>;
}
