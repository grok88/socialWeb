import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {AppRootState} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import styles from './../common/formsControls/FormsControls.module.css'

export type FormDataType = {
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
            <Field name={'password'} placeholder={'Password'} type={'password'} component={Input}
                   validate={[required]}/>
        </div>
        <div>
            <Field name={'checkbox'} type="checkbox" component={Input}/>
        </div>
        {props.error && <div className={styles.commonErrorField}>
            {props.error}
		</div>}
        <div>
            <button type={'submit'}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

type MapStateToPropsType = {
    isAuth: boolean;
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void;
    logout: () => void;
}

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void;
    isAuth: boolean;
}

const Login = (props: LoginPropsType) => {
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.checkbox);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootState>(mapStateToProps, {
    login,
    logout
})(Login);