export default function WeatherAlerts({ alerts, city }) {
  return (
    <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            stroke="#F87171"
            strokeWidth="2"
          />
          <line
            x1="12"
            y1="9"
            x2="12"
            y2="13"
            stroke="#F87171"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="17" r="1" fill="#F87171" />
        </svg>
        <p
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-xs font-semibold text-slate-500 uppercase tracking-wider"
        >
          Weather Alerts
        </p>
        {alerts.length > 0 && (
          <span className="ml-0.5 px-1.5 py-0.5 rounded-md bg-red-500/20 text-red-400 text-xs font-bold">
            {alerts.length}
          </span>
        )}
      </div>

      {alerts.length === 0 ? (
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/15">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                stroke="#34D399"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <polyline
                points="22 4 12 14.01 9 11.01"
                stroke="#34D399"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-emerald-300 text-sm font-medium">All clear</p>
            <p className="text-slate-500 text-xs mt-0.5">
              No active weather alerts for {city}.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {alerts.map((alert) => {
            const s = {
              extreme: {
                bg: "bg-red-500/[0.08] border-red-500/20",
                badge: "bg-red-500/20 text-red-300 border-red-500/25",
                dot: "bg-red-400",
                label: "Extreme",
              },
              severe: {
                bg: "bg-orange-500/[0.08] border-orange-500/20",
                badge: "bg-orange-500/20 text-orange-300 border-orange-500/25",
                dot: "bg-orange-400",
                label: "Severe",
              },
              moderate: {
                bg: "bg-yellow-500/[0.08] border-yellow-500/20",
                badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/25",
                dot: "bg-yellow-400",
                label: "Moderate",
              },
            }[alert.severity]
            return (
              <div key={alert.id} className={`rounded-2xl border p-4 ${s.bg}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${s.badge}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    {s.label}
                  </span>
                  <span className="text-white text-sm font-semibold">
                    {alert.title}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {alert.message}
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
