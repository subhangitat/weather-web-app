import SmallIcon from "./SmallIcon"

export default function WeeklyForecast({ weekly }) {
  return (
    <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-5">
      <p
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4"
      >
        7-Day Forecast
      </p>
      <div className="space-y-1">
        {weekly.map((d, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-3 py-3 rounded-2xl hover:bg-white/[0.04] transition-colors"
          >
            <span className="text-sm text-slate-400 w-12 flex-shrink-0">
              {d.day}
            </span>
            <SmallIcon type={d.icon} />
            <span className="text-slate-500 text-xs flex-1">{d.condition}</span>
            <div className="flex items-center gap-3">
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-slate-500 text-sm"
              >
                {d.low}°
              </span>
              <div className="w-16 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-600 to-amber-400"
                  style={{
                    width: `${Math.min(100, Math.max(20, ((d.high - d.low + 10) / 40) * 100))}%`,
                  }}
                />
              </div>
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-white text-sm font-semibold"
              >
                {d.high}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
