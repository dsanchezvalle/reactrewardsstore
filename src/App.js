//Components
import Header from './components/Header/Header'
import Main from './components/Main/Main'
//ContextProvider
import AppProvider from './contexts/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </AppProvider>
  );
}

export default App;
