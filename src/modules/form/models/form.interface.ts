export interface IForm {
  formTitle: string;
  sections: IFormSection[];
  submitButtonTitle: string;
  submitButtonIcon?: string;
  resetBtnTitle: string;
  resetButtonIcon?: string;
  loading: boolean;
}
export interface IFormControl {
  name: string;
  label?: string;
  value?: string;
  options?: IDropdownItem[];
  url?: string;
  radioOptions?: string[];
  placeholder?: string;
  class?: string;
  type: string;
  validators: IValidator[];
  additionalLink?: IFormLink[]
}
export interface IFormSection {
  sectionName?: string;
  border?: boolean;
  formControls: IFormControl[];
  link?: IFormLink[]
}

export interface IValidator {
  validatorName?: string;
  message?: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  email?: string;
}

export interface IFormLink {
  name: string;
  url: string;
  
}

export interface IDropdownItem {
  id: number | string;
  value: number | string;
  name: string;
  image?: string;
}

export const controlTypes = {
  text : "text",
  email : "email",
  password : "password",
  link : "link",
  nubmer : "number",
  date : "date",
  select : "select",
  checkbox : "checkbox",
  radio : "radio",
  file : "file"
}

