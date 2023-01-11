import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user.entity';
import { UsersController } from './controllers/users/users.controller';
import { AnotherOneMiddleware } from './middlewares/another-one/another-one.middleware';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExampleMiddleware)
      .forRoutes(
        {
          path: 'users',
          method: RequestMethod.GET,
        },
        {
          path: 'users/:id',
          method: RequestMethod.GET,
        },
      )
      .apply(AnotherOneMiddleware)
      .forRoutes({
        path: 'users',
        method: RequestMethod.GET,
      });
  }
}
