import './App.css';
import StepWrapper from './component/stepWrapper';
import StepContextProvider from './context/stepperContext';

function App() {
  return (
    <div className="App">
      <StepContextProvider>
        <StepWrapper />
      </StepContextProvider>
    </div>
  );
}

export default App;
