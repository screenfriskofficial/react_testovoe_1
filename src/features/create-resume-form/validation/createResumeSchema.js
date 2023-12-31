import * as yup from "yup";

export const createResumeSchema = yup.object({
  fio: yup.string().required("Укажите ФИО"),
  title: yup.string().required("Укажите специальность!"),
  salary: yup.string().required("Укажите з/п!"),
  phone_number: yup.string().required("Укажите номер телефона!"),
  email: yup.string().required("Укажите почту!"),
  address: yup.string().notRequired(),
  experience: yup.number().required("Укажите опыт работы!"),
  description: yup.string().notRequired(),
});
