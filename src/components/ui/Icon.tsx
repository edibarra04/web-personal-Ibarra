export type IconName =
  | "camera"
  | "globe"
  | "stamp"
  | "image"
  | "arrow-right"
  | "arrow-up-right"
  | "chat"
  | "sparkle";

const filledIcons: IconName[] = ["sparkle"];

const paths: Record<IconName, React.ReactNode> = {
  camera: (
    <>
      <path d="M4 8a2 2 0 0 1 2-2h2l1.2-1.6A2 2 0 0 1 10.8 3.6h2.4a2 2 0 0 1 1.6.8L16 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
      <circle cx="12" cy="13" r="3.2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.7 3.8 5.8 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.8-3.8-9s1.3-6.3 3.8-9Z" />
    </>
  ),
  stamp: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M8.5 13 7 21l5-3 5 3-1.5-8" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </>
  ),
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  chat: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  sparkle: <path d="M12 2c0 4.5 1.5 7 6 8-4.5 1-6 3.5-6 8 0-4.5-1.5-7-6-8 4.5-1 6-3.5 6-8Z" />,
};

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  const isFilled = filledIcons.includes(name);

  return (
    <svg
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
