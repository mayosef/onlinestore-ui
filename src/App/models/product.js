import * as yup from 'yup';


export default yup.object().shape({
    title:yup.string()
    .required(),
    categoryId:yup.string()
    .required(),
    price:yup.number()
    .required(),
    brand:yup.string(),
    image:yup.mixed(),
})