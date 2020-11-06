import './App.css';
import { createGlobalStyle } from 'styled-components';
import TitleElement from './components/TitleElement/TitleElement';
import FormTask from './components/FormTask/FormTask';

const GlobalStyles = createGlobalStyle`
  body{
    background-color: #222;
    color: #fff;
    margin: 0;
    text-align: center;
  }
`;
function App() {
  return (
    <div>
      <GlobalStyles />
      <TitleElement />
      <FormTask />
    </div>
  );
}

export default App;
