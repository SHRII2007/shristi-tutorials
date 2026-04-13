interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  variant?: "default" | "white";
}

const sizeMap = {
  sm: { img: 32, title: "text-sm", tagline: "text-[10px]", gap: "gap-2" },
  md: { img: 44, title: "text-base", tagline: "text-xs", gap: "gap-2.5" },
  lg: { img: 72, title: "text-xl", tagline: "text-sm", gap: "gap-3" },
};

export function Logo({
  size = "md",
  showTagline = true,
  variant = "default",
}: LogoProps) {
  const s = sizeMap[size];
  const isWhite = variant === "white";

  // For 'lg' size on login page, show logo centered above title (stacked)
  if (size === "lg") {
    return (
      <div className="flex flex-col items-center gap-2">
        <div
          className="rounded-2xl overflow-hidden shadow-glow-sm border-2 border-primary/30 flex-shrink-0"
          style={{ width: s.img, height: s.img }}
        >
          <img
            src="/assets/logo.jpeg"
            alt="Shristi Tutorials Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center leading-tight">
          <span
            className={`font-display font-bold tracking-tight ${s.title} ${
              isWhite ? "text-white" : "text-primary"
            }`}
          >
            Shristi Tutorials
          </span>
          {showTagline && (
            <span
              className={`font-body ${s.tagline} font-medium ${
                isWhite ? "text-white/80" : "text-purple-500"
              }`}
            >
              Where learning is fun ✨
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${s.gap}`}>
      <div
        className="rounded-xl overflow-hidden shadow-glow-sm border border-primary/20 flex-shrink-0"
        style={{ width: s.img, height: s.img }}
      >
        <img
          src="/assets/logo.jpeg"
          alt="Shristi Tutorials Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={`font-display font-bold tracking-tight ${s.title} ${
            isWhite ? "text-white" : "text-primary"
          }`}
        >
          Shristi Tutorials
        </span>
        {showTagline && (
          <span
            className={`font-body ${s.tagline} font-medium ${
              isWhite ? "text-white/80" : "text-purple-500"
            }`}
          >
            Where learning is fun ✨
          </span>
        )}
      </div>
    </div>
  );
}
