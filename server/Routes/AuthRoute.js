import express from 'express'
import { loginUser, registerUser } from '../Controllers/AuthControllers.js'

const router = express.Router() // pathway route

router.post('/register', registerUser)
router.post('/login', loginUser)
export default router