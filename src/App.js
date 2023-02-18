
import './App.css';
import { Home } from './component4/Home';
import { First } from './components2/First';
 import { TodoCompo } from './TodoCompo';

function App() {
  return (
    <div className="App">
      {/* <TodoCompo /> */}
      <First/>
      <Home/>
    </div>
  );
}

export default App;
