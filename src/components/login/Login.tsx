import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/formsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect, useSelector, useDispatch} from 'react-redux';
import {login, logout} from '../../redux/auth-reducer';
import {AppRootState} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import styles from './../common/formsControls/FormsControls.module.css'

export type FormDataType = {
    login: string;
    password: string;
    checkbox: boolean;
    captcha: string | null;
}
type LoginFormPropsType = {
    captchaUrl: string | null;
}
export const LoginForm: React.FC<LoginFormPropsType & InjectedFormProps<FormDataType, LoginFormPropsType>> = (props) => {
    const {handleSubmit, error, captchaUrl} = props;
    return <form onSubmit={handleSubmit}>
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
        {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
        {captchaUrl && <Field name={'captcha'} placeholder={'captcha'} component={Input}
                              validate={[required]}
        />}

        {error && <div className={styles.commonErrorField}>
            {error}
        </div>}
        <div>
            <button type={'submit'}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormPropsType>({form: 'login'})(LoginForm);


export const LoginPage = () => {
    const isAuth = useSelector<AppRootState, boolean>(state => state.auth.isAuth);
    const captchaUrl = useSelector<AppRootState, string | null>(state => state.auth.captchaUrl);
    const dispatch = useDispatch();

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    const onSubmit = (formData: FormDataType) => {
       dispatch(login(formData.login, formData.password, formData.checkbox, formData.captcha));
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}
                        initialValues={{login: 'free@samuraijs.com', password: 'free'}}/>
    </div>
}
