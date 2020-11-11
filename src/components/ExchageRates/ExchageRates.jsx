import React from 'react'
import TaskElement from '../TaskElement/TaskElement';
import { useQuery, gql } from '@apollo/client';

const GET_ALL_TASKS = gql`
    query GetAllTasks {
        tasks{
            id
            title
        }
    }
`;

function ExchageRates() {
    const { loading, error, data } = useQuery(GET_ALL_TASKS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error 😢</p>;
    return data.tasks.map(({ title, id }) => (
        <TaskElement title={title} id={id}/>
    ))
}

export default ExchageRates;