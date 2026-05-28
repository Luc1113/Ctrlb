import logoImage from "../../assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img 
      src={logoImage} 
      alt="Ctrl B Studios"
      className={`h-20 md:h-24 w-auto ${className}`}
    />
  );
}
