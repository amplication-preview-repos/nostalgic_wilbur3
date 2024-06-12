import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type ReminderWhereInput = {
  id?: StringFilter;
  reminderTime?: DateTimeNullableFilter;
  task?: TaskWhereUniqueInput;
};
