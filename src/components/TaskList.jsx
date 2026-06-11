import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    gap: 20px;
    margin-top:15vw;
    margin-left:5vw;
    margin-right:5vw;
    margin-bottom:2vh;
    
`;

const TaskListWrapper = styled.div`
    width: 30vw;
    height: 80vh;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
        width: 100%;
        height: 80%;
        margin-top: 10vh;
        display: flex;
        flex-direction: column;
        gap: 0vh;
    }
`;

const TaskHeader = styled.h2`
    text-align: center;
    font-size: 4vw;
    text-decoration: underline;
    color: #fff;
    @media (max-width: 768px) {
        font-size: 7vh;
        text-decoration: underline;
    }
`;

const TaskItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 3vw;
    color: #fff;

    input {
        margin-right: 10px;
        width: 5vh;
        height: 5vh;
        background: #fff;
        border-radius: 50%;
    }
    @media (max-width: 768px) {
        font-size: 5vh;
        gap:2vh
    }
`;

const Image = styled.img`
    width: 30vw;
    height: 90vh;
    @media (max-width: 768px) {
        display: none;
    }
`;

function TaskList() {
    const [tasks, setTasks] = useState([
        { name: 'Workout', completed: false },
        { name: 'Healthy Diet', completed: true },
        { name: 'Water(4-5L)', completed: true },
        { name: 'Reading Book', completed: false },
        { name: 'Sleep(7-8hrs)', completed: false },
    ]);

    const toggleTaskCompletion = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    return (
        <Container>
            <TaskListWrapper>
                <TaskHeader>TASKS:</TaskHeader>
                <ul>
                    {tasks.map((task, index) => (
                        <TaskItem key={index}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTaskCompletion(index)}
                            />
                            {task.name}
                        </TaskItem>
                    ))}
                </ul>
            </TaskListWrapper>
            <Image src="assets/dogi.png" alt="Your Image" />
        </Container>
    );
}

export default TaskList;
