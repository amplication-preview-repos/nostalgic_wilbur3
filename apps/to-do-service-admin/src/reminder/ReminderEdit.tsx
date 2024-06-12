import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TaskTitle } from "../task/TaskTitle";

export const ReminderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="reminderTime" source="reminderTime" />
        <ReferenceInput source="task.id" reference="Task" label="Task">
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
