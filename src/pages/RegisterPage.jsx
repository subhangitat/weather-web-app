import { useState } from "react"
import AuthShell from "../components/AuthShell"

export default function RegisterPage({ onRegister, onGoLogin }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !email || !password) {
      setError("Please fill in all fields.")
      return
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }
    onRegister()
  }

  return (
    <AuthShell>
      <div className="w-full max-w-[400px]">
        <div className="lg:hidden flex items-center gap-2.5 mb-8">
          <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="5" fill="#38BDF8" />
              <path
                d="M12 2v2M12 20v2M2 12h2M20 12h2"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-white font-semibold"
          >
            Weatherly
          </span>
        </div>

        <h1
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-3xl font-bold text-white mb-2"
        >
          Create account
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          Start tracking weather in your cities
        </p>

        {error && (
          <div className="mb-6 px-4 py-3 rounded-2xl bg-red-500/8 border border-red-500/20 flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#F87171" strokeWidth="2" />
              <line
                x1="12"
                y1="8"
                x2="12"
                y2="12"
                stroke="#F87171"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="16" r="1" fill="#F87171" />
            </svg>
            <span className="text-red-300 text-sm">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            {
              label: "Full name",
              type: "text",
              val: name,
              set: setName,
              placeholder: "Alex Johnson",
            },
            {
              label: "Email",
              type: "email",
              val: email,
              set: setEmail,
              placeholder: "you@example.com",
            },
            {
              label: "Password",
              type: "password",
              val: password,
              set: setPassword,
              placeholder: "Min. 8 characters",
            },
          ].map(({ label, type, val, set, placeholder }) => (
            <div key={label}>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                {label}
              </label>
              <input
                type={type}
                value={val}
                onChange={(e) => set(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-white/[0.04] border border-white/[0.07] rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3.5 rounded-2xl transition-colors text-sm mt-2 shadow-lg shadow-sky-500/20"
          >
            Create account
          </button>
        </form>

        <div className="flex items-center gap-4 my-7">
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-slate-600 text-xs">or</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>

        <p className="text-center text-slate-500 text-sm">
          Already have an account?{" "}
          <button
            onClick={onGoLogin}
            className="text-sky-400 hover:text-sky-300 font-semibold transition-colors"
          >
            Sign in
          </button>
        </p>
      </div>
    </AuthShell>
  )
}
