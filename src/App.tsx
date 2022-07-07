import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './app/store';
import GlobalStyles from './GlobalStyles';
import { Pages } from './Pages';

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </Provider>
);

export default App;
