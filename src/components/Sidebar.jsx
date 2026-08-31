export default function Sidebar({
  searchQuery,
  setSearchQuery,
  onSearch,
  appState,
  favorites,
  onSelectFavorite,
  onRemoveFavorite,
}) {
  return (
    <aside className="space-y-4 xl:order-first">
      {/* Search */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-5 backdrop-blur-sm">
        <p
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4"
        >
          Search
        </p>
        <div className="relative mb-3">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="11"
              cy="11"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
            placeholder="City name…"
            className="w-full bg-white/[0.04] border border-white/[0.07] rounded-2xl pl-10 pr-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.06] transition-all"
          />
        </div>
        <button
          onClick={onSearch}
          disabled={appState === "loading"}
          className="w-full bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-white font-semibold py-3 rounded-2xl transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
        >
          {appState === "loading" ? (
            <>
              <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Searching…
            </>
          ) : (
            "Search"
          )}
        </button>
        <p className="text-slate-700 text-xs mt-3 text-center">
          Try: New York, Miami, Moscow
        </p>
      </div>

      {/* Favorites */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-5 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-4">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-xs font-semibold text-slate-500 uppercase tracking-wider"
          >
            Favorites
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="py-8 text-center">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mx-auto mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  stroke="#475569"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Search a city and tap the star to save it here.
            </p>
          </div>
        ) : (
          <ul className="space-y-1">
            {favorites.map((city) => (
              <li
                key={city}
                className="group flex items-center justify-between rounded-2xl px-3 py-2.5 hover:bg-white/[0.04] transition-colors cursor-pointer"
                onClick={() => onSelectFavorite(city)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xs font-bold text-amber-400">
                    {city[0]}
                  </div>
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                    {city}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onRemoveFavorite(city)
                  }}
                  className="opacity-0 group-hover:opacity-100 text-slate-600 hover:text-red-400 transition-all p-1 rounded-lg hover:bg-red-500/10"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <line
                      x1="18"
                      y1="6"
                      x2="6"
                      y2="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="6"
                      y1="6"
                      x2="18"
                      y2="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  )
}
