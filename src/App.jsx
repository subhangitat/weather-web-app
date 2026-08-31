import { useState } from "react"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Dashboard from "./pages/Dashboard"

export default function App() {
  const [view, setView] = useState("login")
  return (
    <div className="size-full">
      {view === "login" && (
        <LoginPage
          onLogin={() => setView("dashboard")}
          onGoRegister={() => setView("register")}
        />
      )}
      {view === "register" && (
        <RegisterPage
          onRegister={() => setView("dashboard")}
          onGoLogin={() => setView("login")}
        />
      )}
      {view === "dashboard" && <Dashboard onLogout={() => setView("login")} />}
    </div>
  )
}
