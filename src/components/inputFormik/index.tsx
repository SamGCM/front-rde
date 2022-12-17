import { Field } from "formik";
import { TInput } from "./interface";
import { Input } from "../Input";
import { InputMasked } from "../InputMasked";
import { ContainerInput } from "../ContainerInput";
import { ErrorInput } from "../ErrorInput";

export const InputFormik = ({
    handleChange,
    value,
    id,
    name,
    withMask,
    mask,
    errorBorderColor,
    errorMessage,
    ...rest
}: TInput
): React.ReactElement => {

    return (
        <ContainerInput>
            <Field
                { ...rest }
                handlechange={handleChange}
                id={id}
                name={name}
                mask={withMask ? mask : undefined}
                value={value}
                maskChar={null}
                errorBorderColor={errorBorderColor}
                as={withMask ? InputMasked : Input}
            />
            { 
                errorBorderColor 
                    && <ErrorInput>
                        { errorMessage }
                    </ErrorInput> 
            }
        </ContainerInput>
    )
}

export default Input