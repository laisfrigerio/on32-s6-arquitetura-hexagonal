import { User } from '../../domain/entities/user.entity';

export interface IUserService {
  createUser(user: User): User;
  getAllUsers(): User[];
  getUserById(id: string): User | null;
  getUserByEmail(email: string): User | null;
}
