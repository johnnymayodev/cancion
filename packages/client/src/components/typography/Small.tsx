export function Small({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <small className={`text-sm font-medium leading-none ${className || ""}`}>
      {children}
    </small>
  );
}
