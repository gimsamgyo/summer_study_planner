import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigate from './components/Navigate';
import GlobalStyles from './GlobalStyles';
import Create from './pages/Create';
import Main from './pages/Main';
import Message from './pages/Message';
import User from './pages/User';
import Yen from './pages/Yen';

const App = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Navigate />}
        >
          <Route
            index
            element={<Main />}
          />
          <Route
            path='/create'
            element={<Create />}
          />
          <Route
            path='/yen'
            element={<Yen />}
          />
          <Route
            path='/message'
            element={<Message />}
          />
          <Route
            path='/user'
            element={<User />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
