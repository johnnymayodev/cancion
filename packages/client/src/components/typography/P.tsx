export function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className || ""}`}>
      {children}
    </p>
  );
}
