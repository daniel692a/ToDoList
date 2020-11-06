import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Input = styled.input`
    border: none;
    background: none;
    color: #547AFE;
    outline: none;
    border-bottom: 1px solid #547AFE;
    width: 40vw;
    font-size: 1.5em;
`;
const Button = styled.button`
    border-radius: 10px;
    width: 10vw;
    padding: 20px;
    background-color: #547AFE;
    color: #fff;
    border: none;
    font-size: 1em;
    transition: .5s;
    margin-top: 2vh;
    font-weight: bold;
    :hover{
        background-color: #A1B6FF;
        color: #000;
    }
`;

const FormTask = () => (
    <Form>
        <Input name="taskDo" type="text" placeholder="Escriba una tarea" />
        <Button>Add Task</Button>
    </Form>
)

export default FormTask;