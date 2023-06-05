import { AutoMap } from '@automapper/classes';

export class UserKey {
  @AutoMap()
  id: string;
}

export class User extends UserKey {
  @AutoMap()
  firstName: string;

  @AutoMap()
  lastName: string;

  @AutoMap()
  email: string;

  password: string;
}
