import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { useMutation, gql } from '@apollo/client';

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
    transition: 0.2s;
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

const GET_ALL_TASKS = gql`
    query GetAllTasks {
        tasks{
            id
            title
        }
    }
`;

const ADD_TASK= gql`
    mutation addTodo($title: String!) {
        createTask(title: $title, completed: false) {
            title
        }
    }
`;

function FormTask() {
    let input;
    const [addTodo] = useMutation(ADD_TASK, {
        refetchQueries: mutationResult => [{query: GET_ALL_TASKS}]
    });
    return(
        <Form>
            <Input autoComplete="off" type="text" placeholder="Write a task" ref={node => { input = node; }}/>
            <Button onClick={
                e => {
                    e.preventDefault();
                    addTodo({ variables: { title: input.value }});
                    input.value='';
                }
            }>Add Task</Button>
        </Form>
    )
}

export default FormTask;