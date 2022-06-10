
// import axios from 'axios'
// import { useEffect } from 'react';
import IndexRouter  from './router/IndexRouter'
import './App.css'
import store from './redux/store';
import { Provider } from 'react-redux'
import './util/reguest'

const App = () => {
  return (
    <Provider store={store}>
      <IndexRouter></IndexRouter>
    </Provider>
  );
}

export default App;
