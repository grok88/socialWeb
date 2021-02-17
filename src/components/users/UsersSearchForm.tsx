import React from 'react';
import {Field, Form, Formik} from 'formik'

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}
type UsersSearchFormType = {
    term: string
}
type UsersSearchFormPropsType = {
    changeFilter: (term: string) => void;
}
export const UsersSearchForm: React.FC<UsersSearchFormPropsType> = (props) => {
    return <div>
        <Formik
            initialValues={{term: ''}}
            validate={usersSearchFormValidate}
            onSubmit={(values: UsersSearchFormType, {setSubmitting}) => {
                props.changeFilter(values.term);
                setSubmitting(false);
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}