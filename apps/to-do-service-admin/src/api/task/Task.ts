import { Reminder } from "../reminder/Reminder";
import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  description: string | null;
  dueDateTime: Date | null;
  id: string;
  reminders?: Array<Reminder>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
