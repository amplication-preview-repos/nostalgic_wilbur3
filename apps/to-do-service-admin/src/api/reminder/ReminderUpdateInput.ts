import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type ReminderUpdateInput = {
  reminderTime?: Date | null;
  task?: TaskWhereUniqueInput | null;
};
