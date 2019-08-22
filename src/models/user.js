import * as yup from 'yup';

export default yup.object().shape({
    name:yup
    .string()
    .required()
    .min(2)
    .max(20),
    age:yup
    .number()
    .required()
    .positive()
    .min(18)
    .integer(),
    email:yup
    .string()
    .required()
    .email()
    .min(6)
    .max(60),
    email2:yup.string()
    .oneOf([yup.ref('email')],
    'Email must be match!'
    ),
    password:yup.string()
    .required()
    .min(6)
    .max(12),
    password2:yup.string()
    .oneOf([yup.ref('password')],
    'Passwords must be match!')
})