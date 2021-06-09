import React from 'react'
import CardInicial from '../../components/Card'
import { Container } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import '../../styles/global.css'
import MedicoForm from '../../components/MedicoForm'

const AcessoMedico = () =>
(

      <Container className="mt-4 page-user">
            <CardInicial title={'Acesso médicos'}>
                <MedicoForm /> 
            </CardInicial>
        </Container>

  )

  export default AcessoMedico;

