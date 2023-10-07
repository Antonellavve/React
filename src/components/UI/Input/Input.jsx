import { ErrorMessage, Field } from "formik";
import { MessageOfError, InputBox, InputLabel, Input as CustomInput } from "./InputStyles";

const Input = ({ children, htmlFor, type, id, placeholder, name }) => {
    return (
        <Field name={name}>
            {({ field, form: { errors, touched } }) => (
                <InputBox>
                    <InputLabel htmlFor={htmlFor}>{children}</InputLabel>
                    <CustomInput
                        type={type}
                        id={id}
                        placeholder={placeholder}
                        {...field}
                        isError={errors[field.name] && touched[field.name]}
                    />
                    <ErrorMessage name={field.name}>
                        {(message) => <MessageOfError>{message}</MessageOfError>}
                    </ErrorMessage>
                </InputBox>
            )}
        </Field>
    );
};

export default Input;
