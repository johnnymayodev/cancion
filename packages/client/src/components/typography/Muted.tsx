export function Muted({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-sm text-muted-foreground ${className || ""}`}>
      {children}
    </p>
  );
}
