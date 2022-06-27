import { TData } from "./defaultStateTypes";

export type TGetDataType = {
  items: TData[];
  totalPages: number;
  isLoading: boolean;
};
