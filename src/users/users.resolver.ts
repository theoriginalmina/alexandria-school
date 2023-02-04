import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { UsersService } from './users.service';
import {User} from "./models/user.model"

@Resolver('User')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(returns => User)
  async create(@Args('email') email: string): Promise<User> {
    const createdUser = await this.userService.create({email});
    return createdUser;
  }

}
