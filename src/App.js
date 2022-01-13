import Header from './components/Header';
import KeyUpEvent from './components/KeyUpEvent';
import CopyDemo from './components/CopyDemo';
import ButtonList from './components/ButtonList';
import ButtonHookList from './components/ButtonHookList';
import ButtonListContainer from './components/ButtonListContainer';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ButtonList />
      <ButtonHookList />
      <ButtonListContainer />
      <KeyUpEvent />
      <CopyDemo />

    </div>
  );
}

export default App;
