import React from 'react';
import styled from 'styled-components';
import Delete from '../../assets/eliminar.svg';
import { useMutation, gql } from '@apollo/client';

const DivTask = styled.div`
    width: 80%;
    height: 15vh;
    border-radius: 20px;
    background: #FF5252;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 1s;
`;
const TitleTask = styled.div`
    font-size: 1.5em;
`;

const CompletedTask = styled.input`
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin: 0px 1vw 0px 2vw;
`;

const DeleteTask = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 2vw;
    transition: 0.5s;
    :hover{
        cursor: pointer;
        width: 25px;
        height: 25px;
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

const DELETE_TASK= gql`
    mutation removeTask($id: Int!) {
        deleteTask(id: $id)
    }
`;

function TaskElement( props ) {
    const [removeTask] = useMutation(DELETE_TASK, {
        refetchQueries: mutationResult => [{query: GET_ALL_TASKS}]
    });
    return (
        <DivTask>
            <CompletedTask  type="checkbox"/>
            <TitleTask>{props.title}</TitleTask>
            <DeleteTask src={Delete} alt="Eliminar" onClick={
                e => {
                    e.preventDefault();
                    removeTask({ variables: { id: props.id }});
                }
            }/>
        </DivTask>
    )
}

export default TaskElement
