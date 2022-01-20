import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <ImageGrid />
      </Provider>
    </div>
  );
}

export default App;
