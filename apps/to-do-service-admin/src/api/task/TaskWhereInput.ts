import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReminderListRelationFilter } from "../reminder/ReminderListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  description?: StringNullableFilter;
  dueDateTime?: DateTimeNullableFilter;
  id?: StringFilter;
  reminders?: ReminderListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
