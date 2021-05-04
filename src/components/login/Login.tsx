import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/formsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {AppRootState} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
// import styles from './../common/formsControls/FormsControls.module.css';
import styles from './Login.module.css'
import { UserButton } from '../common/userButton/UserButton';

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
    return <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.userBox}>
            <Field name={'login'} placeholder={'Login'} component={Input}
                   validate={[required]}
            />
        </div>
        <div className={styles.userBox}>
            <Field name={'password'} placeholder={'Password'} type={'password'} component={Input}
                   validate={[required]}/>
        </div>
        <div className={styles.checkBox}>
            <Field name={'checkbox'} type="checkbox" component={Input} id={'checkbox'}/>
            <label htmlFor="checkbox">Remember me</label>
        </div>
        {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
        {captchaUrl &&
        <div className={styles.userBox}>
            <Field name={'captcha'} placeholder={'captcha'} component={Input}
                   validate={[required]}
            />
        </div>
        }

        {error && <div className={styles.commonErrorField}>
            {error}
        </div>}
        <div>
            <UserButton label={'Login'}/>
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
    return <div className={styles.loginBox}>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}
                        initialValues={{login: 'free@samuraijs.com', password: 'free'}}/>
    </div>

}
