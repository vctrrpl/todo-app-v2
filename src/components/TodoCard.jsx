import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { TodoContext } from '../contexts/TodoContexts';

function TodoCard({ todo }) {
  const completed = todo.completed;
  const border = completed ? 'success' : 'danger';
  const [timer, setTimer] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const setTodos = useContext(TodoContext).setTodos;

  // Timer-related functions
  const startTimer = () => {
    if (timerInterval === null) {
      const intervalID = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setTimerInterval(intervalID);
    }
  };

  const pauseTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
  };

  const resetTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
    setTimer(0);
  };

  const deleteTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
    );
  };

  useEffect(() => {
    return () => {
      clearInterval(timerInterval);
    };
  }, [timerInterval]);

  return (
    <>
      <Card border={border} className="my-3">
        <Card.Header>{!completed && 'Not'} Completed</Card.Header>
        <Card.Body>
          <Card.Title>{todo.title}</Card.Title>
          <Card.Text>{todo.description}</Card.Text>
          <p>Timer: {timer} seconds</p>
          <Button onClick={startTimer} className="me-2">
            <i className="bi bi-play"></i>
          </Button>
          <Button onClick={pauseTimer} className="me-2">
            <i className="bi bi-pause-fill"></i>
          </Button>
          <Button onClick={resetTimer} className="me-2">
            <i className="bi bi-arrow-clockwise"></i>
          </Button>
          <Button variant="secondary" href={`todo/${todo.id}`} className="me-2">
            <i className="bi bi-pencil"></i>
          </Button>
          <Button variant="danger" oncClick={deleteTodo}>
            <i className="bi bi-trash3"></i>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default TodoCard;
