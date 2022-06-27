import React from "react";
import MiniCard from "../MiniCard";
import s from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { FormInputs } from "../../types/formInputsType";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { formSlice } from "../../store/reducers/FormSlice";

const Form = () => {
  const { miniCardValue } = useAppSelector((state) => state.formReducer);
  const { crete_miniCard } = formSlice.actions;
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormInputs>({
    mode: "all",
  });

  const submit = (data: FormInputs) => {
    let value = "";
    let agree = "";
    data.checkbox === true
      ? (value = "хочу получать уведомления")
      : (value = "не хочу получать уведомления");

    data.switch === true
      ? (agree = "согласен на обработку данных")
      : (agree = "не согласен на обработку данных");

    if (data.file.length !== 0) {
      dispatch(
        crete_miniCard([
          ...miniCardValue,
          {
            name: data.firstName,
            date: data.lastName,
            country: data.country,
            check: value,
            check2: agree,
            imgSrc: URL.createObjectURL(data.file[0] as Blob),
          },
        ])
      );
    }

    reset();
  };

  return (
    <div className={s.wrap}>
      <form onSubmit={handleSubmit(submit)} className={s.form}>
        <label>
          Имя:
          <input
            placeholder="Имя"
            data-testid="name"
            {...register("firstName", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 5,
                message: "Длинна не менее 5 символов",
              },
            })}
          ></input>
        </label>
        <div style={{ height: 40, color: "red" }}>
          {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div>
        <label>
          Фамилия:
          <input
            placeholder="Фамилия"
            {...register("lastName", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 5,
                message: "Длинна не менее 5 символов",
              },
            })}
          ></input>
        </label>
        <div style={{ height: 40, color: "red" }}>
          {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
        </div>
        <label>
          <input
            data-testid="date"
            type="date"
            {...register("date", {
              required: "Поле обязательно к заполнению",
            })}
          />
        </label>
        <div style={{ height: 40, color: "red" }}>
          {errors?.date && <p>{errors?.date?.message || "Error!"}</p>}
        </div>
        <label htmlFor="country">
          Страна:
          <select
            {...register("country", {
              required: "Поле обязательно к заполнению",
            })}
          >
            <option>Belarus</option>
            <option>Russia</option>
            <option>Ukraine</option>
          </select>
          <div style={{ height: 40, color: "red" }}>
            {errors?.country && <p>{errors?.country?.message || "Error!"}</p>}
          </div>
        </label>
        <label>
          Загрузите фото:
          <input
            {...register("file", {
              required: "Загрузите фото",
            })}
            type="file"
          />
          <div style={{ height: 40, color: "red" }}>
            {errors?.file && <p>{errors?.file?.message || "Error!"}</p>}
          </div>
        </label>
        <div className={s.checkbox}>
          <label className={s.switch}>
            <input {...register("checkbox")} type="checkbox"></input>
            <span className={`${s.slider} ${s.round}`}></span>
          </label>
          <label style={{ paddingLeft: 23 }}>
            не хочу/хочу получать уведомления об акциях
          </label>
        </div>
        <div className={s.check}>
          <input
            className={s.check__input}
            type="checkbox"
            {...register("switch")}
          />
          <label className={s.check__label}>
            Я согласен на обработку данных
          </label>
        </div>
        <input
          disabled={!isValid}
          className={s.submit}
          type="submit"
          value="Отправить"
        />
      </form>
      <MiniCard value2={miniCardValue} />
    </div>
  );
};

export default Form;
