import { env } from './env';

export const Urls = {
  optionUrls: {
    getOptions: `${env.baseUrl}Option/GetOptions`,
    getOptionTypes: `${env.baseUrl}Option/GetOptionTypes`,
    getOptionById: (id: number) => {
      return `${env.baseUrl}Option/GetOptionById/${id}`;
    },
    getOptionTypeById: (id: number) => {
      return `${env.baseUrl}Option/GetOptionTypeById/${id}`;
    },
    addOption: `${env.baseUrl}Option/AddOption`,
    addOptionType: `${env.baseUrl}Option/AddOptionType`,
    updateOption: `${env.baseUrl}Option/UpdateOption`,
    updateOptionType: `${env.baseUrl}Option/UpdateOptionType`,
    deleteOption: `${env.baseUrl}Option/DeleteOption`,
    deleteOptionType: `${env.baseUrl}Option/DeleteOptionType`,
  },
  authUrls: {
    regiter: `${env.baseUrl}Auth/Register`,
    login: `${env.baseUrl}Auth/Login`,
  },
  countryUrls: {
    addCountry: `${env.baseUrl}Country/AddCountry`,
    UpdateCountry: `${env.baseUrl}Country/UpdateCountry`,
    getCountryById: (id: number) => {
      return `${env.baseUrl}Country/GetCountryById/${id}`;
    },
  },
};
