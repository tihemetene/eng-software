import React from 'react'
import { useFormik, Formik } from 'formik'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css";
import '../../styles/global.css'
import * as Yup from 'yup';
import axios from '../../util/api'

const RecepForm = () => {

    const formik = useFormik({
        initialValues: {
          login: '',
          password: '',
        }, 
        validationSchema: Yup.object({
          login: Yup.string()
            .max(20, 'Login inválido, informe login com no máximo 20 caracteres.')
            .min(3, 'Login inválido, informe login com 3 ou mais caracteres.')
            .required('Campo obrigatório'),
          password: Yup.string()
            .min(6, 'Campo password deve conter no mínimo 6 caracteres')
            .max(50, 'Campo password deve conter no máximo 50 caracteres')
            .required('Campo obrigatório'),
        }),
        onSubmit: async () => {
              try{          
                  await axios.post('/recep', {
                  login: formik.values.login,
                  password: formik.values.password,
                });
                toast.success('Recepcionista cadastrado com sucesso!');
              }catch(error){
               toast.error('Erro ao cadastrar. Verifique se o login já não foi cadastrado.')
              }                                
        },
       });

    return (
        <Formik>
            {()=>(
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <span>Login</span>
                        <br />
                        <input
                             id="login"
                             name="login"
                             type="text"
                             placeholder="Login"
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.login}
                        />
                        {formik.touched.login && formik.errors.login ? (
                        <div style={{ color: "red" }}>{formik.errors.login}</div>
                        ) : null} 
                    </div>                    
                    <hr />
                    <div>
                        <span>Senha</span>
                        <br />
                        <input
                             id="password"
                             name="password"
                             type="password"
                             placeholder="Password"
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                        <div style={{ color: "red" }}>{formik.errors.password}</div>
                        ) : null}  
                    </div>                                     
                    <Button className="mt-3" variant="success" type="submit"> Cadastrar </Button>
                    <a className="btn btn-outline-secondary ml-2 mt-3" href="/">Voltar</a>
                </form>
                )}
                </Formik>
                );
                
};

export default RecepForm;

