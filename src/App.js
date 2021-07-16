import './App.css';

import Todo from './components/Todo'
function App() {
    return ( 
      <div className="container">
        <h1>My Tasks</h1>
        <div className="row">
          <Todo text = "Task 1" />
        </div>
      </div>
    );
}

export default App;