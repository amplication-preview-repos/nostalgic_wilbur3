import { Task } from "../task/Task";

export type Reminder = {
  createdAt: Date;
  id: string;
  reminderTime: Date | null;
  task?: Task | null;
  updatedAt: Date;
};
