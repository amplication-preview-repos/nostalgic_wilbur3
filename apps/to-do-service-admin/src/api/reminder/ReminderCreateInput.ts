import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type ReminderCreateInput = {
  reminderTime?: Date | null;
  task?: TaskWhereUniqueInput | null;
};
