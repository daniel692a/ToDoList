import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';

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

    @media ${device.tablet} {
        width: 60vw;
    }
    @media ${device.mobileL} {
        width: 70vw;
    }
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
        cursor: pointer;
    }
    @media ${device.tablet} {
        width: 20vw;
    }
    @media ${device.mobileL} {
        width: 30vw;
    }
`;

const FormTask = () => (
    <Form>
        <Input autoComplete="off" name="taskDo" type="text" placeholder="Write a task"/>
        <Button>Add Task</Button>
    </Form>
)

export default FormTask;