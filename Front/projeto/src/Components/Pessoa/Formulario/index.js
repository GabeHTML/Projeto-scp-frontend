import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, FormText } from 'reactstrap';
import styles from "../../../assets/input.css";

export default function Formulario() {

    const baseURL = "http://localhost:8080/pessoa";

    const [post_nome, setPost_nome] = useState("");
    const [post_cpf, setPost_cpf] = useState("");
    const [post_matricula, setPost_matricula] = useState("");

    async function postData() {
        const postData = {
            nome: post_nome,
            matricula: post_matricula,
            cpf: post_cpf,
        };

        console.log(postData);

        try {
            await fetch(`${baseURL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            });

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Form>
            <FormGroup>
                <Label for="nome">Nome:</Label>
                <p></p>
                <Input id="nome" value={post_nome} onChange={(e) => setPost_nome(e.target.value)} type='text' placeholder='Informe o nome' required />
            </FormGroup>
            <FormGroup>
                <div className="form-row">
                    <div className="col-md-6">
                        <p></p>
                        <Label for="cpf">CPF:</Label>
                        <p></p>
                        <Input id="cpf" type="text" value={post_cpf} onChange={(e) => setPost_cpf(e.target.value)} pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                            title="Digite um CPF no formato: xxx.xxx.xxx-xx" required/>
                    </div>
                    <p></p>
                    <div className="col-md-6">
                        <Label for="matricula">Matrícula:</Label>
                        <p></p>
                        <Input id="matricula" type="number" value={post_matricula} onChange={(e) => setPost_matricula(e.target.value)} required/>
                    </div>
                    <p></p>
                    <div className="col-md-6">
                        <Label for="nascimento">Nascimento:</Label>
                        <p></p>
                        <Input id="nascimento" type="date" />
                    </div>
                    <p></p>
                    <div className="col-md-6">
                        <FormGroup>
                            <Label for="genero">Genero:</Label>
                            <p></p>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="genero" value={'Masculino'} /> Masculino
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="genero" value={'Feminino'} /> Feminino
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="genero" value={'Outro'} /> Outro
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <Label for="foto">Foto:</Label>
                        <p></p>
                        <Input id="foto" type="file" />
                        <FormText color="muted">
                            *Foto para reconhecimento.
                            <p></p>
                        </FormText>
                    </div>
                    <p></p>
                </div>
            </FormGroup>
            <Button onClick={postData} color="success">Salvar</Button>
        </Form>
    );
}