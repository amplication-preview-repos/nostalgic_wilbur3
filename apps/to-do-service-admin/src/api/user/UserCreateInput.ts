import { InputJsonValue } from "../../types";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  tasks?: TaskCreateNestedManyWithoutUsersInput;
  username: string;
};
