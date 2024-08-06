import { User } from '../../domain/entities/user.entity';

export interface IMemoryUserRepository {
  save(user: User): User;
  findAll(): User[];
  findById(id: string): User | null;
  findByEmail(email: string): User | null;
}
