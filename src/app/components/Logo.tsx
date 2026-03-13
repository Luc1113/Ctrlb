import logoImage from "figma:asset/549a15e338865e07f09cb575dbc27cf1358bf69f.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img 
      src={logoImage} 
      alt="Ctrl B Studios"
      className={`h-8 md:h-10 w-auto ${className}`}
    />
  );
}
