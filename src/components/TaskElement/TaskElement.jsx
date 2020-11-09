import React from 'react';
import styled from 'styled-components';

const DivTask = styled.div`
    width: 80%;
    height: 15vh;
    border-radius: 20px;
    background: #FF5252;
    margin: 30px auto;
    display: flex;
    align-items: center;
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

function TaskElement( props ) {
    return (
        <DivTask>
            <CompletedTask  type="checkbox"/>
            <TitleTask>{props.id} {props.title}</TitleTask>
        </DivTask>
    )
}

export default TaskElement
