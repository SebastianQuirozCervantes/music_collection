import {
    InvalidPropertyError,
    InvalidNullError,
    FormatDocumentError,
    InvalidDateError,
  } from './errors';
  import messages from './../../application/use-cases/support/messages.json';
  import messages_en from './../../application/use-cases/support/messages_en.json';
  
  const message = messages.helpers.validations;
  const message_en = messages_en.helpers.validations;
  
  export const requiredParam = function (param, language) {
    const mess = language && language === 'en' ? message_en : message;
    const requiredParamError = new Error(mess.requiredParamError + param);
    Error.captureStackTrace(requiredParamError,
      requiredParam);
    throw requiredParamError;
  };
  
  export const validateEmail = function (email, language) {
    const mess = language && language === 'en' ? message_en : message;
    if (email) {
      const valid = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
      if (!valid.test(email)) {
        throw new InvalidPropertyError(mess.bad_email,
          'email');
      }
    }
  };
  
  export const validatePasswordFormat = function (password, language) {
    const mess = language && language === 'en' ? message_en : message;
    if (password) {
      const valid = new RegExp(
        /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d)[A-ZñÑa-z\d!¡?¿$%@#£€*&^<>()+-_{}]{8,}$/
      );
      if (!valid.test(password)) {
        throw new InvalidPropertyError(mess.pass_format,
          'password');
      }
    }
  };