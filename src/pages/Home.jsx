import React, { useContext } from 'react';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import { TodoContext } from '../contexts/TodoContexts';
import TodoCard from '../components/TodoCard';

function Home() {
  const todos = useContext(TodoContext).todos;
  return (
    <Container>
      <h1 className="my-3">Your todos</h1>
      <Row>
        <CardGroup todos={todos} />
      </Row>
    </Container>
  );
}

function CardGroup({ todos }) {
  return todos.map((todo) => {
    return (
      <Col md={4} key={todo.id}>
        <TodoCard todo={todo} />
      </Col>
    );
  });
}

export default Home;
