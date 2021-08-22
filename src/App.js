//Components
import Header from './components/Header/Header'
import Main from './components/Main/Main'
//ContextProvider
import AppProvider from './contexts/AppContext';
//Router
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
