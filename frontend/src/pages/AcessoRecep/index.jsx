import React from 'react'
import CardInicial from '../../components/Card'
import { Container } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import '../../styles/global.css'
import RecepForm from '../../components/RecepForm'

const AcessoRecep = () =>
(

      <Container className="mt-4 page-user">
            <CardInicial title={'Acesso recepção'}>
                <RecepForm /> 
            </CardInicial>
        </Container>

  )

  export default AcessoRecep;

