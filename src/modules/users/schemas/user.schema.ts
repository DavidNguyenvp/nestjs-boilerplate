import { Schema } from 'dynamoose';

export const UserSchema = new Schema(
  {
    id: {
      type: String,
      hashKey: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true },
);
