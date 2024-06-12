import { Reminder as TReminder } from "../api/reminder/Reminder";

export const REMINDER_TITLE_FIELD = "id";

export const ReminderTitle = (record: TReminder): string => {
  return record.id?.toString() || String(record.id);
};
