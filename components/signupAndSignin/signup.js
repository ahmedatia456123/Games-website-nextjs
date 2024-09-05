import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import * as Yup from 'yup'
import Logo from '../shared/logo'
const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: 5 }
    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "قصير جدا").required("مطلوب"),
        email: Yup.string().email("أدخل بريد الإكتروني صحيح").required("مطلوب"),
        gender: Yup.string().oneOf(["male", "female"], "Required").required("مطلوب"),
        phoneNumber: Yup.number().typeError("أدخل رقم هاتف صحيح").required('مطلوب'),
        password: Yup.string().min(8, "يجب ان يكون اكثر من 8 أرقام").required("مطلوب"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "الرقم السري غير متطابق").required("مطلوب"),
        termsAndConditions: Yup.string().oneOf(["true"], "يجب أن تقبل بالشروط و الأحكام")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 1)
    }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <div >
                        <Logo/>
                    </div>
                    <h2 style={headerStyle}>التسجيل</h2>
                    
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>

                            <Field as={TextField} fullWidth name="name" label='الأسم'
                                placeholder="أدخل أسمك" helperText={<ErrorMessage name="name" />} />
                            <Field as={TextField} fullWidth name="email" label='البريد الأليكتروني'
                                placeholder="أدخل البريد اللأكتروني" helperText={<ErrorMessage name="email" />} />
                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">النوع</FormLabel>
                                < Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="أنثي" />
                                    <FormControlLabel value="male" control={<Radio />} label="ذكر" />
                                </ Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                            <Field as={TextField} fullWidth name="phoneNumber" label='رقم الهاتف الحمول'
                                placeholder="أدخل رقم الهاتف المحمول" helperText={<ErrorMessage name="phoneNumber" />} />
                            <Field as={TextField} fullWidth name='password' type="password"
                                label='الرقم السري' placeholder="أدخل الرقم السري"
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={TextField} fullWidth name="confirmPassword" type="password"
                                label='أكد الرقم السري' placeholder="أكد الرقم السري"
                                helperText={<ErrorMessage name="confirmPassword" />} />
                            <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="أقبل بالشروط و الأحكام"
                            />
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                            <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                color='primary'>{props.isSubmitting ? "Loading" : "تسجيل"}</Button>

                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Signup;