import * as Yup from "yup";

const validations = Yup.object().shape({
    text: Yup.string().required("bu alan gereklidir")
})

export default validations;