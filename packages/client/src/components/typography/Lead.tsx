export function Lead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-xl text-muted-foreground ${className || ""}`}>
      {children}
    </p>
  );
}
