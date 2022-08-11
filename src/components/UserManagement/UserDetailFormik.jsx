import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUserAction, updateUserInfoAction } from '../../store/actions/users.actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import { object, boolean, string } from 'yup';
import SubmitButton from '../form/SubmitButton/SubmitButton';

let userSchema = object({
  name: string().required('afwfw').max(25),
  active: boolean().required(),
});

function UserDetailFormik() {
  let { id } = useParams();
  const dispatch = useDispatch();
  // const user = {
  //   name: 'test',
  //   age: 0,
  //   active: true,
  // }
  const [user, setUser] = useState({
    name: '',
    age: 0,
    active: false,
  })

  // const formik = useFormik({
  //   initialValues: user,
  //   onSubmit: onSubmit,
  // });

  useEffect( () => {
    async function getUser() {
      const userInfo = await dispatch(fetchUserAction(id));
      setUser(userInfo);
    }
    getUser();
  }, [id]);

  function onSubmit(value) {
    dispatch(updateUserInfoAction(id, value));
  }

  function validate(values) {
    let errors = {};

    if (!values.name.length) {
      errors.name = 'Required';
    }

    return errors;
  }

  function validateName(value) {
    if (!value.length) {
      return 'Required';
    }
  }

  return (
    <>
      <h2>User Details</h2>

      {/*<form onSubmit={formik.handleSubmit}>*/}
      {/*  <div>*/}
      {/*    <label htmlFor="name">Name: </label>*/}
      {/*    <input id="name" name="name" type="text" value={formik.values.name} onChange={formik.handleChange}/>*/}
      {/*  </div>*/}

      {/*  <div>*/}
      {/*    <label htmlFor="age">Age: </label>*/}
      {/*    <input id="age" name="age" type="number" value={formik.values.age} onChange={formik.handleChange}/>*/}
      {/*  </div>*/}

      {/*  <div>*/}
      {/*    <label htmlFor="active">Active: </label>*/}
      {/*    <input id="active" name="active" type="checkbox" checked={formik.values.active} onChange={formik.handleChange}/>*/}
      {/*  </div>*/}

      {/*  <button type="submit" disabled={formik.isSubmitting || !formik.dirty}>Save</button>*/}
      {/*</form>*/}


    {/*<Formik*/}
    {/*  enableReinitialize={true}*/}
    {/*  initialValues={user}*/}
    {/*  onSubmit={onSubmit}*/}
    {/*  // validate={validate}*/}
    {/*  validationSchema={userSchema}*/}
    {/*>*/}
    {/*  {(formik ) => (*/}
    {/*    <Form>*/}
    {/*      <div>*/}
    {/*        <label htmlFor="name">Name: </label>*/}
    {/*        <Field id="name" name="name" type="text" validate={validateName}/>*/}
    {/*        <ErrorMessage name="name" component="div" />*/}
    {/*      </div>*/}

    {/*      <div>*/}
    {/*        <label htmlFor="age">Age: </label>*/}
    {/*        <Field id="age" name="age" type="number" />*/}
    {/*      </div>*/}

    {/*      <div>*/}
    {/*        <label htmlFor="active">Active: </label>*/}
    {/*        <Field id="active" name="active" type="checkbox"/>*/}
    {/*      </div>*/}

    {/*      <button type="submit" disabled={formik.isSubmitting || !formik.dirty}>Save</button>*/}
    {/*    </Form>*/}
    {/*  )}*/}
    {/*</Formik>*/}
    {/*</>*/}


      <Formik
        enableReinitialize={true}
        initialValues={user}
        onSubmit={onSubmit}
        validationSchema={userSchema}
      >
        <Form>
          <div>
            <label htmlFor="name">Name: </label>
            <Field id="name" name="name" type="text" validate={validateName}/>
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="age">Age: </label>
            <Field id="age" name="age" type="number" />
          </div>

          <div>
            <label htmlFor="active">Active: </label>
            <Field id="active" name="active" type="checkbox"/>
          </div>

          <SubmitButton></SubmitButton>
        </Form>
      </Formik>
    </>
  )
}

export default UserDetailFormik;