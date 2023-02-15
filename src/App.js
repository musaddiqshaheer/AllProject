// import logo from './logo.svg';
import './App.css';
import { Home } from './component3/Home';
import { TodoCompo } from './TodoCompo';

function App() {
  return (
    <div className="App">
      <TodoCompo />
      <Home/>
      <h1>This is h1 tag</h1>
    </div>
  );
}

export default App;
