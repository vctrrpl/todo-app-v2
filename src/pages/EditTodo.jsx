import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContexts';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';

function EditTodo() {
  const setTodos = useContext(TodoContext).setTodos;
  const todos = useContext(TodoContext).todos;
  const navigate = useNavigate();
  const id = parseInt(useParams().id);
  const currentTodo = todos.filter((todo) => todo.id === id)[0];
  const [title, setTitle] = useState(currentTodo.title);
  const [description, setDescription] = useState(currentTodo.description);
  const [completed, setCompleted] = useState(currentTodo.completed);

  function updateTodo(event) {
    event.preventDefault();
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { id, title, description, completed };
      }

      return todo;
    });

    setTodos(updatedTodos);
    navigate('/');
  }

  return (
    <Container>
      <h1 className="my-3">Add Todo</h1>
      <Form onSubmit={updateTodo}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter title"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            rows={3}
            placeholder="Enter description"
            required
          />
        </Form.Group>
        <Form.Check
          type="checkbox"
          id="completed"
          label="Mark as completed"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mb-3"
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default EditTodo;
