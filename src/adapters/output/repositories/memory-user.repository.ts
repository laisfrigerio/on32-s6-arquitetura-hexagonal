import { uuid } from 'uuidv4';
import { User } from 'src/domain/entities/user.entity';
import { IMemoryUserRepository } from 'src/ports/output/memory-user-repository.interface';

export class MemoryUserRepository implements IMemoryUserRepository {
  private users: User[] = [];

  constructor() {}

  save(user: User): User {
    user.id = uuid();
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findById(id: string): User | null {
    return this.users.find((user) => user.id === id);
  }

  findByEmail(email: string): User | null {
    return this.users.find((user) => user.email === email);
  }
}
