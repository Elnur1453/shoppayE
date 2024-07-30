import {Regex} from './regex';
import {RegisterOptions} from 'react-hook-form';

export const FormRules = {
  email: {
    required: {
      message: 'Email is required',
      value: true,
    },
    pattern: {
      value: Regex.email,
      message: 'Email is not valid',
    },
  } as RegisterOptions,
  password: {
    required: {
      message: 'Password is required',
      value: true,
    },
    pattern: {
      value: Regex.password,
      message: 'Password is not valid',
    },
  } as RegisterOptions,
  fullName: {
    required: {
      message: 'Full name is required',
      value: true,
    },
    pattern: {
      value: Regex.fullName,
      message: 'Full name is not valid',
    },
  } as RegisterOptions,
  bankCard: {
    required: {
      message: 'Bank card is required',
      value: true,
    },
    pattern: {
      value: Regex.bankCard,
      message: 'Bank card is not valid',
    },
  } as RegisterOptions,
  cvv: {
    required: {
      message: 'CVV is required',
      value: true,
    },
    pattern: {
      value: Regex.cvv,
      message: 'CVV is not valid',
    },
  } as RegisterOptions,
};
