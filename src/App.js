import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';

// Step 1: Define a Component
function App() {
  // Step 2: Return some JSX
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <Message />
      </header>
    </div>
  );
}

// Step 3: Exporting/Importing Component
export default App;
