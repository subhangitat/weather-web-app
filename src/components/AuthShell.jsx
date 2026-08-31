import WeatherIllustration from "./WeatherIllustration"

export default function AuthShell({ children }) {
  return (
    <div className="min-h-full bg-[#030710] flex items-stretch">
      {/* Left decorative panel — hidden on mobile */}
      <div
        className="hidden lg:flex flex-col justify-between w-[480px] flex-shrink-0 relative overflow-hidden p-10"
        style={{
          background:
            "linear-gradient(135deg, #071428 0%, #0d2044 50%, #071428 100%)",
        }}
      >
        {/* Stars */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 70}%`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-9 h-9 rounded-xl bg-sky-500/25 border border-sky-400/30 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="5" fill="#38BDF8" />
              <path
                d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-white text-lg font-semibold tracking-tight"
          >
            Weatherly
          </span>
        </div>
        <div className="relative z-10">
          <div className="mb-10 flex justify-center">
            <WeatherIllustration type="partly-cloudy" size={160} />
          </div>
          <h2
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-3xl font-bold text-white mb-4 leading-snug"
          >
            Your personal
            <br />
            weather companion
          </h2>
          <p className="text-sky-200/60 text-base leading-relaxed">
            Real-time conditions, intelligent alerts, and your favorite cities —
            all in one beautiful dashboard.
          </p>
          <div className="mt-8 flex gap-2">
            {["Real-time data", "Smart alerts", "City favorites"].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-sky-300/80 bg-sky-500/10 border border-sky-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="text-sky-300/30 text-xs relative z-10">
          © 2025 Weatherly
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        {children}
      </div>
    </div>
  )
}
