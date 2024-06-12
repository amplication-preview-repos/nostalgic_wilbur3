import { ReminderCreateNestedManyWithoutTasksInput } from "./ReminderCreateNestedManyWithoutTasksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  dueDateTime?: Date | null;
  reminders?: ReminderCreateNestedManyWithoutTasksInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
