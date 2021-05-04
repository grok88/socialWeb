import React from 'react';
import {Field, Form, Formik} from 'formik'
import {UsersReducerFilterType} from '../../redux/users-reducer';
import {useSelector} from 'react-redux';
import {getFilter} from '../../redux/users-selectors';
import styles from './UsersSearchForm.module.css'
import {UserButton} from '../common/userButton/UserButton';

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
    const filter = useSelector(getFilter);
    const submit = (values: UsersSearchFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: UsersReducerFilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.changeFilter(filter);
        setSubmitting(false);
    }

    return <div className={styles.searchFormBox}>
        <Formik
            enableReinitialize
            initialValues={{term: filter.term, friend: filter.friend as null | string}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form className={styles.searchForm}>
                    <Field type="text" name="term" className={styles.nameBox}/>
                    <Field name="friend" as="select" className={styles.selectBox} >
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <UserButton label={'Find'}/>
                    {/*<button type="submit" disabled={isSubmitting}>*/}
                    {/*    Find*/}
                    {/*</button>*/}
                </Form>
            )}
        </Formik>
    </div>
})

