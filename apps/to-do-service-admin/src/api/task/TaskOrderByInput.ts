import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDateTime?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
