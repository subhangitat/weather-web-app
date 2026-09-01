import SmallIcon from "./SmallIcon"

export default function HourlyForecast({ hourly = [] })  {
  return (
    <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-5">
      <p
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4"
      >
        Hourly Forecast
      </p>
      <div
        className="flex gap-3 overflow-x-auto pb-1"
        style={{ scrollbarWidth: "none" }}
      >
        {hourly.map((h, i) => (
          <div
            key={i}
            className={`flex-shrink-0 flex flex-col items-center gap-2.5 px-4 py-3.5 rounded-2xl border transition-all ${
              i === 0
                ? "bg-sky-500/15 border-sky-500/30"
                : "bg-white/[0.03] border-white/[0.05] hover:bg-white/[0.06]"
            }`}
          >
            <span className="text-xs text-slate-400 font-medium">{h.time}</span>
            <SmallIcon type={h.icon} />
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-sm font-bold text-white"
            >
              {h.temp}°
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
