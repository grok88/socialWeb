import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/formsControls/FormsControls";
import {ProfileType} from "../profileInfo";
import styles from "../../../common/formsControls/FormsControls.module.css";


//Profile FORM
export type ProfileDataFormType = {
    aboutMe: string;
    fullName: string;
    lookingForAJobDescription: string;
}
type PropsType = {
    profile:ProfileType;
}

const ProfileDataForm: React.FC<PropsType & InjectedFormProps<ProfileDataFormType,PropsType >> = (props) => {

    return <form onSubmit={props.handleSubmit}>

        {props.error && <div className={styles.commonErrorField}>
            {props.error}
		</div>}
        <div>
            <b>Full name </b>: <Field name={'fullName'} placeholder={'Full name '} component={Input}/>
        </div>
        <div>
            <b>Looking for a job </b>: <Field name={'checkbox'} placeholder={''} type={'checkbox'} component={Input}/>
        </div>

        <div>
            <b>Looking for a job description </b>: <Field name={'lookingForAJobDescription'}
                                                          placeholder={'Looking for a job description '}
                                                          component={Textarea}/>
        </div>

        <div>
            <b>About me</b>: <Field name={'aboutMe'}
                                    placeholder={'About me'}
                                    component={Textarea}/>
        </div>
        <div>
            <b>Contacts </b>: {Object.keys(props.profile.contacts).map(key => <div key={key}>
            <b>{key}</b>:
            <Field name={'contacts.' + key} placeholder={key} component={Input} />
        </div>)}
        </div>
        <div>
            <button >save</button>
        </div>
    </form>
}
const ProfileDataFormRedux = reduxForm< ProfileDataFormType, PropsType>({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormRedux;