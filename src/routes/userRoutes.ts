import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const userController = new UserController();

// Rotas públicas
router.post('/register', (req, res) => userController.register(req, res));
router.post('/login', (req, res) => userController.login(req, res));

// Rotas protegidas
router.get('/profile/:id', authMiddleware, (req, res) => userController.getProfile(req, res));
router.get('/', authMiddleware, (req, res) => userController.getAllUsers(req, res));

export default router;