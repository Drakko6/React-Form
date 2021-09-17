import * as yup from "yup";

export const regimes = [
  "Régimen de asalariados",
  "Régimen de actividades profesionales",
  "Régimen de arrendamiento de inmuebles",
  "Régimen de actividad empresarial",
  "Régimen de incorporación fiscal",
];
export const businesses = [
  "Sociedad en Nombre Colectivo",
  "Sociedad en Comandita por Acciones (S. en C. por A.)",
  "Sociedad en Comandita Simple (S. en C. S.)",
  "Sociedad de Responsabilidad L imitada (S. DE R.L.)",
  "Sociedad Anónima (S.A.) Sociedad Cooperativa (S.C.)",
];
export const industries = [
  "Alimentaria",
  "Textil",
  "Química",
  "Siderúrgica",
  "Militar",
  "Cementera",
  "Turística",
  "Forestal",
  "Automovilística",
];

export const genders = ["Masculino", "Femenino", "Otro"];

export const maritalStatus = [
  "Casado(a)",
  "Unión libre",
  "Anulado(a)",
  "Separado(a) de unión legal",
  "Separado(a) de unión de hecho",
  "Viudo(a)",
  "Soltero(a)",
];

export const ValidationSchema = yup.object({
  business: yup.string().required("La razón social es requerida"),
  commercialName: yup.string().required("El nombre comercial es requerido"),
  userNacionality: yup.string().required("La nacionalidad es requerida"),
  createDate: yup.date().required("La fecha es requerida"),
  startDate: yup.date().required("La fecha es requerida"),
  userRFC: yup
    .string()
    .matches(
      /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$/,
      "RFC inválido"
    )
    .required("El RFC es requerido"),
  regime: yup.string().required("El régimen es requerido"),
  industry: yup.string().required("El tipo de insdustria es requerido"),

  userStreet: yup.string().required("La calle es requerida"),
  userExtNumber: yup.string().required("El número exterior es requerido"),
  userIntNumber: yup.number("Debe ser un número"),
  userCP: yup
    .number("Código Postal inválido")
    .min(10000, "Código Postal inválido")
    .required("El Código Postal es requerido"),
  userDistrict: yup.string().required("La colonia es requerida"),
  userMunicipality: yup
    .string()
    .required("El municipio o delegación es requerido"),
  userCity: yup.string().required("La ciudad o Población es requerida"),
  userState: yup.string().required("El estado es requerido"),
  userCountry: yup.string().required("El país es requerido"),
  representativeStreet: yup.string().required("La calle es requerida"),
  representativeExtNumber: yup
    .string()
    .required("El número exterior es requerido"),
  representativeIntNumber: yup.number("Debe ser un número"),
  representativeCP: yup
    .number("Código Postal inválido")
    .min(10000, "Código Postal inválido")
    .required("El Código Postal es requerido"),
  representativeDistrict: yup.string().required("La colonia es requerida"),
  representativeMunicipality: yup
    .string()
    .required("El municipio o delegación es requerido"),
  representativeCity: yup
    .string()
    .required("La ciudad o Población es requerida"),
  representativeState: yup.string().required("El estado es requerido"),
  representativeCountry: yup.string().required("El país es requerido"),
  addressProof: yup.mixed().required("El comprobante es requerido"),
  phone: yup.string().required("El teléfono es requerido"),
  clabe: yup
    .string()
    .matches(/[0-9]{18}/, "La clabe debe tener 18 dígitos")
    .length(18, "La clabe debe tener 18 dígitos")
    .required("La CLABE es requerida"),
  bank: yup.string().required("El banco es requerido"),
  userEmail: yup
    .string("Ingresa tu email")
    .email("Email inválido")
    .required("El email es requerido"),
  representativeName: yup.string().required("El nombre es requerido"),
  representativeGender: yup.string().required("El género es requerido"),
  representativeMaritalStatus: yup
    .string()
    .required("El estado civil es requerido"),
  representativeBirthday: yup
    .string()
    .required("El día de nacimiento es requerido"),
  representativeBirthState: yup
    .string()
    .required("La entidad de nacimiento es requerida"),
  representativeBirthCountry: yup
    .string()
    .required("El país de nacimiento es requerido"),
  representativeNacionality: yup
    .string()
    .required("La nacionalidad es requerida"),
  representativeCURP: yup
    .string()
    .matches(
      /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
      "CURP inválida"
    )
    .required("La CURP es requerida"),
  representativeRFC: yup
    .string()
    .matches(
      /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$/,
      "RFC inválido"
    )
    .required("El RFC es requerido"),
  representativePhone: "",
  representativeEmail: yup
    .string("Ingresa tu email")
    .email("Email inválido")
    .required("El email es requerido"),
  representativeID: undefined,

  beneficiaryName: yup.string().required("El nombre es requerido"),
  beneficiaryGender: yup.string().required("El género es requerido"),
  beneficiaryBirthday: yup
    .string()
    .required("El día de nacimiento es requerido"),
  beneficiaryCURP: yup
    .string()
    .matches(
      /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
      "CURP inválida"
    )
    .required("La CURP es requerida"),
  beneficiaryPhone: "",
  beneficiaryEmail: yup
    .string("Ingresa tu email")
    .email("Email inválido")
    .required("El email es requerido"),
  beneficiaryStreet: yup.string().required("La calle es requerida"),
  beneficiaryExtNumber: yup
    .string()
    .required("El número exterior es requerido"),
  beneficiaryIntNumber: yup.number("Debe ser un número"),
  beneficiaryCP: yup
    .number("Código Postal inválido")
    .min(10000, "Código Postal inválido")
    .required("El Código Postal es requerido"),
  beneficiaryDistrict: yup.string().required("La colonia es requerida"),
  beneficiaryMunicipality: yup
    .string()
    .required("El municipio o delegación es requerido"),
  beneficiaryCity: yup.string().required("La ciudad o Población es requerida"),
  beneficiaryState: yup.string().required("El estado es requerido"),
  beneficiaryCountry: yup.string().required("El país es requerido"),
});
