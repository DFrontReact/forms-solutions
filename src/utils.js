export const validateValue = (value, validations = []) => {
  try {
    validations.forEach((v) => {
      switch (v.type) {
        case 'required':
          if (value?.toString().trim().length === 0)
            throw new Error('El campo es requerido');
          break;
        case 'requiredBool':
          if (!value) throw new Error('El campo es requerido');
          break;
        case 'min':
          if (parseInt(value) < parseInt(v.value))
            throw new Error(`El valor mínimo debe ser ${v.value}`);
          break;
        case 'max':
          if (parseInt(value) > parseInt(v.value))
            throw new Error(`El valor máximo debe ser ${v.value}`);
          break;
        default:
      }
    });
    return '';
  } catch (error) {
    return error.message;
  }
};

export const formValidation = {
  name: [{ type: 'required' }],
  age: [
    { type: 'required' },
    { type: 'min', value: 18 },
    { type: 'max', value: 30 },
  ],
  password: [{ type: 'required' }, { type: 'regex', value: '' }],
  email: [{ type: 'required' }],
  genre: [{ type: 'required' }],
  allAccepted: [{ type: 'requiredBool' }],
};
