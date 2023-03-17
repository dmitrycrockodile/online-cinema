import { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';

import MainButton from "../mainButton/MainButton";

import styles from "./authForm.module.scss";

const CustomInput = ({...props}) => {
   const [field, meta] = useField(props);

   return (
      <>
         <input {...props} {...field} />
         {meta.touched && meta.error ? (
            <div className={styles.error}>{meta.error}</div>
         ) : null}
      </>
   )
}

const validationSchema = Yup.object({
   name: Yup.string()
         .min(4, 'Minimum 4 characters')
         .required('This field is required!'),
   email: Yup.string()
          .email('Please type correct email address')
          .required('This field is required!'),
   password: Yup.string()
             .min(6, 'Password must be minimum 6 characters')
             .required('This field is required!'),
   repeatedPassword: Yup.string()
                     .oneOf([Yup.ref('password'), null], 'Password does not match!')
})

function AuthForm({name = 'Sign in'}) {
   const [isLoading, setIsLoading] = useState(false);
   const { login, signup, currentUser } = useAuth();

   async function handleSubmit(email, password) {
      try {
         setIsLoading(true);

         if (name === 'Sign in') return await login(email, password);
         if (name === 'Sign up') return await signup(email, password);
         
      } catch (e) {
         console.error(e);
      }

      setIsLoading(false);
   }

   return (
      <Formik
         initialValues={{ name: 'Dmitry', email: 'asd@gmail.com', password: '123123', repeatedPassword: '123123' }}
         validationSchema={validationSchema}
         onSubmit={values => handleSubmit(values.email, values.password)}
      > 
         <Form className={styles.form}>
            {name === 'Sign up' 
            ?  (<CustomInput 
                     className={styles.input} 
                     id="name"
                     name="name"
                     type="text" 
                     placeholder="Name" 
               />) 
            : null}
            <CustomInput 
               className={styles.input} 
               id="email"
               name="email"
               type="email" 
               placeholder="E-mail"
               // autocomplete
            />
            <CustomInput 
               className={styles.input} 
               id="password"
               name="password"
               type="password"
               placeholder="Password" 
            />
            {name === 'Sign up' 
            ?  (<CustomInput 
                     className={styles.input} 
                     id="repeatedPassword"
                     name="repeatedPassword"
                     type="password" 
                     placeholder="Repeat password"
                     // autocomplete 
                />) 
            : null}
            {currentUser && currentUser.email}
            <MainButton value={name} size="mediumBig" type="fullOrange" disabled={isLoading} />
         </Form>
      </Formik>
   );
}

export default AuthForm;