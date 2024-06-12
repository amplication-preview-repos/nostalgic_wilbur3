import { ReminderUpdateManyWithoutTasksInput } from "./ReminderUpdateManyWithoutTasksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  description?: string | null;
  dueDateTime?: Date | null;
  reminders?: ReminderUpdateManyWithoutTasksInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
