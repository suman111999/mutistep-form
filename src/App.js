import './App.css';
import StepWrapper from './component/stepWrapper';
import StepContextProvider from './context/stepperContext';
import pak from '@suman111999/github-package';

function App() {
  pak()
  return (
    <div className="App">
      <StepContextProvider>
        <StepWrapper />
      </StepContextProvider>
    </div>
  );
}

export default App;
