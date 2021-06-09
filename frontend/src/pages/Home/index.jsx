import React from 'react'
import CardInicial from '../../components/Card'
import { Card, Container, Row, Image } from 'react-bootstrap'
import tph from '../../Assets/Images/tph.png'

const Home = () =>
(
    <Container className="mt-4">
        <CardInicial
            title="Central MediHouse"
        >
            <Card.Body>
                <Row>
                    <h4>Bem vindo ao portal MediHouse para agendamentos e consultas! Escolha a opção abaixo caso seja um médico ou caso seja um enfermeiro.</h4>
                </Row>
                <Image className="center" src={tph}></Image>
                <Row>
                    <Card.Link href="/agendamento/new">Acesso paciente</Card.Link>
                    <Card.Link href="/agendamento">Acesso Enfermeiro</Card.Link>
                    <Card.Link href="/acessoMedico">Acesso Médico</Card.Link>
                    <Card.Link href="/acessoRecep">Acesso Recepcionista</Card.Link>                  
                </Row>
            </Card.Body>
        </CardInicial>
    </Container>
);

export default Home;