import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';

const TaskListE = styled.div`
    width: 35vw;
    height: 65vh;
    background-color: #3B4592;
    border-radius: 10px;
    margin: 3vh auto;
    overflow: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 10px;
        background-color: #2E748B;
        border-radius: 0 10px 10px 0;
    }
    &::-webkit-scrollbar-thumb {
        background: #44D6B8;
        border-radius: 10px;
    }
    @media ${device.tablet} {
        width: 70vw;
        height: 75vh;
    }
    @media ${device.mobileL}{
        width: 80vw;
        height: 65vh;
    }
`;
const TaskList = () => {
    return (
        <TaskListE>
        </TaskListE>
    )
}

export default TaskList
