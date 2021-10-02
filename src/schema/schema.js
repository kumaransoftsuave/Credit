import * as yup from 'yup';
const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .required('This field is required')
    .min(16, 'Please enter a vaild card number.')
    .max(19),
  expiry: yup
    .string()
    .required('This field is required')
    .min(5, 'Please enter a vaild expiry')
    .max(5),
  cvv: yup
    .string()
    .required('This field is required')
    .min(3, 'Please enter a vaild cvv')
    .max(4),
  monthlyLimit: yup
    .string()
    .required('This field is required')
    .min(1, 'Please enter a vaild monthly limit')
    .max(10),
});
export default schema;
