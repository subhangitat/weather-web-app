import { useState } from "react"
import WeatherIllustration from "../components/WeatherIllustration"
import Sidebar from "../components/Sidebar"
import WeatherHero from "../components/WeatherHero"
import HourlyForecast from "../components/HourlyForecast"
import WeeklyForecast from "../components/WeeklyForecast"
import WeatherAlerts from "../components/WeatherAlerts"
import { conditionTheme } from "../data/mockWeather"

export default function Dashboard({ onLogout }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [appState, setAppState] = useState("idle")
  const [weather, setWeather] = useState(null)
  const [alerts, setAlerts] = useState([])
  const [favorites, setFavorites] = useState([])
  const [isFav, setIsFav] = useState(false)
async function doSearch(query) {
  const q = query.trim()

  if (!q) return

  setAppState("loading")
  setWeather(null)
  setAlerts([])

  try {
    const response = await fetch(
      `http://localhost:5000/api/weather?city=${encodeURIComponent(q)}`
    )

    if (!response.ok) {
      setAppState("invalid-city")
      return
    }

    const data = await response.json()

    const weatherData = {
      city: data.name,
      country: data.sys.country,
      temp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      condition: data.weather[0].description,
      icon: "sunny",
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6),
      hourly: [],
      weekly: [],
    }

    setWeather(weatherData)
    setIsFav(favorites.includes(weatherData.city))
    setAppState("ready")
  } catch (error) {
    console.error(error)
    setAppState("error")
  }
}

  function handleSearch() {
    doSearch(searchQuery)
  }

  function toggleFavorite() {
    if (!weather) return
    if (isFav) {
      setFavorites((p) => p.filter((f) => f !== weather.city))
      setIsFav(false)
    } else {
      setFavorites((p) => [...p, weather.city])
      setIsFav(true)
    }
  }

  function removeFavorite(city) {
    setFavorites((p) => p.filter((f) => f !== city))
    if (weather?.city === city) setIsFav(false)
  }

  function selectFavorite(city) {
    setSearchQuery(city)
    doSearch(city)
  }

  const theme = weather
    ? conditionTheme[weather.icon]
    : conditionTheme["partly-cloudy"]

  return (
    <div className="min-h-full bg-[#030710] flex flex-col">
      {/* Header */}
      <header className="border-b border-white/[0.05] bg-[#030710]/95 backdrop-blur-xl sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
              className="text-white font-semibold tracking-tight"
            >
              Weatherly
            </span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 text-slate-500 hover:text-white text-xs font-medium transition-colors px-3 py-1.5 rounded-xl hover:bg-white/[0.05]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Sign out
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-6">
          {/* ── Sidebar ── */}
          <Sidebar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearch}
            appState={appState}
            favorites={favorites}
            onSelectFavorite={selectFavorite}
            onRemoveFavorite={removeFavorite}
          />

          {/* ── Main ── */}
          <div className="space-y-5 min-w-0">
            {/* Idle */}
            {appState === "idle" && (
              <div className="rounded-3xl border border-white/[0.05] bg-white/[0.02] flex flex-col items-center justify-center py-28 text-center">
                <div className="mb-6 opacity-80">
                  <WeatherIllustration type="partly-cloudy" size={110} />
                </div>
                <h2
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-2xl font-bold text-white mb-3"
                >
                  Check the weather
                </h2>
                <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                  Search for any city to see real-time conditions, forecasts,
                  and alerts.
                </p>
              </div>
            )}

            {/* Loading */}
            {appState === "loading" && (
              <div className="rounded-3xl border border-white/[0.05] bg-white/[0.02] flex flex-col items-center justify-center py-28">
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-sky-500/20" />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-sky-500 animate-spin" />
                  <div
                    className="absolute inset-2 rounded-full border-2 border-transparent border-t-sky-300/40 animate-spin"
                    style={{
                      animationDirection: "reverse",
                      animationDuration: "0.8s",
                    }}
                  />
                </div>
                <h3
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-lg font-semibold text-white mb-1"
                >
                  Loading weather…
                </h3>
                <p className="text-slate-600 text-sm">
                  Fetching real-time conditions
                </p>
              </div>
            )}

            {/* Invalid city */}
            {appState === "invalid-city" && (
              <div className="rounded-3xl border border-orange-500/15 bg-orange-500/[0.04] flex flex-col items-center justify-center py-24 text-center px-8">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#FB923C"
                      strokeWidth="2"
                    />
                    <line
                      x1="12"
                      y1="8"
                      x2="12"
                      y2="12"
                      stroke="#FB923C"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="16" r="1" fill="#FB923C" />
                  </svg>
                </div>
                <h3
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-xl font-bold text-white mb-2"
                >
                  City not found
                </h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  We couldn't find{" "}
                  <span className="text-orange-300 font-medium">
                    "{searchQuery}"
                  </span>
                  . Double-check the spelling and try again.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setAppState("idle")
                  }}
                  className="mt-6 px-5 py-2.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] text-white text-sm font-medium transition-all"
                >
                  Clear search
                </button>
              </div>
            )}

            {/* API Error */}
            {appState === "error" && (
              <div className="rounded-3xl border border-red-500/15 bg-red-500/[0.04] flex flex-col items-center justify-center py-24 text-center px-8">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                </div>
                <h3
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-xl font-bold text-white mb-2"
                >
                  Connection error
                </h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Unable to reach the weather service. Check your connection and
                  try again.
                </p>
                <button
                  onClick={handleSearch}
                  className="mt-6 px-5 py-2.5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold transition-all shadow-lg shadow-sky-500/20"
                >
                  Try again
                </button>
              </div>
            )}

            {/* ── Weather Ready ── */}
            {appState === "ready" && weather && (
              <>
                {/* Hero weather card */}
                <WeatherHero
                  weather={weather}
                  theme={theme}
                  isFav={isFav}
                  onToggleFavorite={toggleFavorite}
                />

                {/* Hourly forecast */}
                <HourlyForecast hourly={weather.hourly} />

                {/* 7-day forecast */}
                <WeeklyForecast weekly={weather.weekly} />

                {/* Alerts */}
                <WeatherAlerts alerts={alerts} city={weather.city} />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
