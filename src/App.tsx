import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navigate from './components/Navigate';

import GlobalStyles from './GlobalStyles';
import Create from './pages/Create';
import Main from './pages/Main';
import Message from './pages/Message';
import User from './pages/User';
import Yen from './pages/Yen';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Outlet />
                <Navigate />
              </>
            }
          >
            <Route
              index={true}
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
}

export default App;
