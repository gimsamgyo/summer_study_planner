import { Provider } from 'react-redux';

import { store } from './app/store';
import GlobalStyles from './GlobalStyles';
import { Pages } from './Pages';

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Pages />
  </Provider>
);

export default App;
