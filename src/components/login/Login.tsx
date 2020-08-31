import React from "react";
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {Input} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string;
    password: string;
    checkbox: boolean;
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'login'} placeholder={'Login'} component={Input}
                   validate={[required]}
            />
        </div>
        <div>
            <Field name={'password'} placeholder={'Password'} component={Input}   validate={[required]}/>
        </div>
        <div>
            <Field name={'checkbox'} type="checkbox" component={Input}/>
        </div>
        <div>
            <button type={'submit'}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}