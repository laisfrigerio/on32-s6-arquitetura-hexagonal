import { Module } from '@nestjs/common';
import { UserController } from './adapters/input/controllers/user.controller';
import { UserService } from './domain/services/user.service';
import { MemoryUserRepository } from './adapters/output/repositories/memory-user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: 'IUserService',
      useFactory: (userRepository: MemoryUserRepository) => {
        return new UserService(userRepository);
      },
      inject: ['IMemoryUserRepository'],
    },
    {
      provide: 'IMemoryUserRepository',
      useClass: MemoryUserRepository,
    },
  ],
})
export class AppModule {}
