import logoImage from "../../assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img 
      src={logoImage} 
      alt="Ctrl B Studios"
      className={`h-8 md:h-10 w-auto ${className}`}
    />
  );
}
