import React from 'react';
import {Field, Form, Formik} from 'formik'
import {UsersReducerFilterType} from '../../redux/users-reducer';

const usersSearchFormValidate = (values: UsersSearchFormType) => {
    const errors = {};
    return errors;
}
type UsersSearchFormType = {
    term: string
    friend: null | string
}
type UsersSearchFormPropsType = {
    changeFilter: (filter: UsersReducerFilterType) => void;
}
export const UsersSearchForm: React.FC<UsersSearchFormPropsType> = React.memo((props) => {

    const submit = (values: UsersSearchFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: UsersReducerFilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        console.log(filter)
        props.changeFilter(filter);
        setSubmitting(false);
    }

    return <div>
        <Formik
            initialValues={{term: '', friend: 'null'}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
})