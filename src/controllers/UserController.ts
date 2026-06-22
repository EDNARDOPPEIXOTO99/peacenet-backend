import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

const userService = new UserService();

export class UserController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.register(req.body);
      res.status(201).json({ message: '✅ Usuário criado com sucesso!', user });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const result = await userService.login(email, password);
      res.status(200).json({ message: '✅ Login realizado!', ...result });
    } catch (err: any) {
      res.status(401).json({ error: err.message });
    }
  }

  async getProfile(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const user = await userService.getProfile(id);
      if (!user) {
        res.status(404).json({ error: 'Usuário não encontrado!' });
        return;
      }
      res.status(200).json(user);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}