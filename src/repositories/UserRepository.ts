import { pool } from '../config/database';
import { User } from '../entities/User';

export class UserRepository {
  async create(user: User): Promise<User> {
    const { name, username, email, password_hash, bio, avatar_url, country, role } = user;
    const result = await pool.query(
      `INSERT INTO users (name, username, email, password_hash, bio, avatar_url, country, role)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [name, username, email, password_hash, bio, avatar_url, country, role || 'CITIZEN']
    );
    return result.rows[0];
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    return result.rows[0] || null;
  }

  async findByUsername(username: string): Promise<User | null> {
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );
    return result.rows[0] || null;
  }

  async findById(id: number): Promise<User | null> {
    const result = await pool.query(
      'SELECT id, name, username, email, bio, avatar_url, country, role, peace_score, created_at FROM users WHERE id = $1',
      [id]
    );
    return result.rows[0] || null;
  }

  async findAll(): Promise<User[]> {
    const result = await pool.query(
      'SELECT id, name, username, email, bio, avatar_url, country, role, peace_score, created_at FROM users'
    );
    return result.rows;
  }
}