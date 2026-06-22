import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/UserRepository';
import { User } from '../entities/User';

const userRepository = new UserRepository();

export class UserService {
  async register(data: {
    name: string;
    username: string;
    email: string;
    password: string;
    bio?: string;
    country?: string;
    role?: 'CITIZEN' | 'GOV' | 'NGO' | 'ORG';
  }): Promise<User> {
    const emailExists = await userRepository.findByEmail(data.email);
    if (emailExists) throw new Error('Email já cadastrado!');

    const usernameExists = await userRepository.findByUsername(data.username);
    if (usernameExists) throw new Error('Username já em uso!');

    const password_hash = await bcrypt.hash(data.password, 10);

    const user = await userRepository.create({
      name: data.name,
      username: data.username,
      email: data.email,
      password_hash,
      bio: data.bio,
      country: data.country,
      role: data.role || 'CITIZEN',
    });

    return user;
  }

  async login(email: string, password: string): Promise<{ token: string; user: Partial<User> }> {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error('Usuário não encontrado!');

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) throw new Error('Senha incorreta!');

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    );

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role,
        country: user.country,
        peace_score: user.peace_score,
      }
    };
  }

  async getProfile(id: number): Promise<User | null> {
    return await userRepository.findById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return await userRepository.findAll();
  }
}