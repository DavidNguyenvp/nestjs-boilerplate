import { AutoMap } from '@automapper/classes';

export class UserResponse {
  @AutoMap()
  id: string;

  @AutoMap()
  firstName: string;

  @AutoMap()
  lastName: string;

  fullName: string;

  @AutoMap()
  email: string;
}
