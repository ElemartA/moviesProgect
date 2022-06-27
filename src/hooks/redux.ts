import { AppDispatch, RootState } from "./../store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// этот хук возвращает useDispatch, только типизированный
export const useAppDispatch = () => useDispatch<AppDispatch>();

// обычный useSelector, но типизированный
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
