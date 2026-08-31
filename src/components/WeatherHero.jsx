import WeatherIllustration from "./WeatherIllustration"

export default function WeatherHero({
  weather,
  theme,
  isFav,
  onToggleFavorite,
}) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${theme.grad}`}
      style={{ boxShadow: `0 0 80px ${theme.glow}` }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${theme.glow.replace("0.18", "0.25")} 0%, transparent 70%)`,
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="relative z-10 p-6 sm:p-8">
        {/* Top row */}
        <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                  stroke="#94A3B8"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                  stroke="#94A3B8"
                  strokeWidth="2"
                />
              </svg>
              <span className="text-slate-400 text-sm">
                {weather.city}, {weather.country}
              </span>
            </div>
            <p className="text-slate-300 text-sm">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <button
            onClick={onToggleFavorite}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl border text-xs font-semibold transition-all ${
              isFav
                ? "bg-amber-500/15 border-amber-500/30 text-amber-400"
                : "bg-white/[0.05] border-white/[0.10] text-slate-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/10"
            }`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill={isFav ? "#F59E0B" : "none"}
              stroke={isFav ? "#F59E0B" : "currentColor"}
              strokeWidth="2"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {isFav ? "Saved" : "Save"}
          </button>
        </div>

        {/* Temperature + icon */}
        <div className="flex items-end gap-6 mb-8">
          <div>
            <div
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[96px] sm:text-[120px] font-bold text-white leading-none tracking-tighter"
            >
              {weather.temp}°
            </div>
            <p className="text-slate-300 text-lg font-medium mt-1">
              {weather.condition}
            </p>
          </div>
          <div className="pb-4 ml-auto">
            <WeatherIllustration type={weather.icon} size={110} />
          </div>
        </div>

        {/* Stat pills */}
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              label: "Humidity",
              value: `${weather.humidity}%`,
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2c0 0-8 7.5-8 13a8 8 0 1 0 16 0C20 9.5 12 2 12 2Z"
                    stroke="#38BDF8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ),
            },
            {
              label: "Wind",
              value: `${weather.windSpeed} km/h`,
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
                    stroke="#38BDF8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ),
            },
            {
              label: "Feels like",
              value: `${weather.feelsLike}°C`,
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"
                    stroke="#38BDF8"
                    strokeWidth="1.8"
                  />
                </svg>
              ),
            },
          ].map(({ label, value, icon }) => (
            <div
              key={label}
              className="bg-white/[0.06] border border-white/[0.08] rounded-2xl px-4 py-3.5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-1.5 mb-2">
                {icon}
                <span className="text-xs text-slate-400">{label}</span>
              </div>
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-white font-bold text-lg"
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
