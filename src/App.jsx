import './App.css';
import Left from '../src/components/left';
import Right from '../src/components/right';

function App() {
  return (
    <>
      <div>
        <div className="flex">
          <Left />
          <Right />
        </div>
      </div>
    </>
  )
}

export default App
