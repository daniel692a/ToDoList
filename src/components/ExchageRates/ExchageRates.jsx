import React from 'react'
import TaskElement from '../TaskElement/TaskElement';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
    query GetTasks {
        taskstodo(id: Int!) {
            id
            title
            completed
        }
    }
`;

function ExchageRates() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error 😢</p>
    return data.rates.map(({ id, title, completed}) => (
        <TaskElement id={id} title={title}/>
    ))
}

export default ExchageRates;