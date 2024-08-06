import { User } from 'src/domain/entities/user.entity';
import { IUserService } from 'src/ports/input/user-service.interface';
import { IMemoryUserRepository } from 'src/ports/output/memory-user-repository.interface';

export class UserService implements IUserService {
  constructor(private userRepository: IMemoryUserRepository) {}

  createUser(user: User): User {
    return this.userRepository.save(user);
  }

  getAllUsers(): User[] {
    return this.userRepository.findAll();
  }

  getUserById(id: string): User | null {
    return this.userRepository.findById(id);
  }

  getUserByEmail(email: string): User | null {
    return this.userRepository.findByEmail(email);
  }
}
