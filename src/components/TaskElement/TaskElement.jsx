import React from 'react';
import styled from 'styled-components';

const DivTask = styled.div`
    width: 80%;
    height: 15vh;
    border-radius: 20px;
    background: #FF5252;
    margin: 30px auto;
`;

function TaskElement() {
    return (
        <div>
            <DivTask />
        </div>
    )
}

export default TaskElement
