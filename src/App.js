import React, { useState } from 'react';
import './App.css';

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Counter({ label, start }) {
  const [count, setCount] = useState(start);

  return (
    <div className="counter">
      <h3>{label}</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function UserCard({ user }) {
  return (
    <div className="user-card">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function App() {
  const [user] = useState({ name: 'Ibukun', email: 'ibukun@example.com' });

  return (
    <div className="App">
      <Header title="My Debug App" />
      <Counter label="Clicks" start={0} />
      <UserCard user={user} />
    </div>
  );
}

export default App;