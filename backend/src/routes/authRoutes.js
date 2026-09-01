import express from "express"
import { protect } from "../middlewear/authMiddleware.js"
import { register, login } from "../controllers/authController.js"
const router = express.Router()

router.post("/register", register)
router.post("/login", login)
export default router

router.get("/profile", protect, (req, res) => {
  res.json({
    message: "You are authorized",
    userId: req.user,
  })
})