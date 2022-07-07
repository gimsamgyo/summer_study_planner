import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom';

import Navigate from './components/Navigate';
import Calender from './pages/Calender';
import CalenderDetail from './pages/CalenderDetail';
import Create from './pages/Create';
import Main from './pages/Main';
import Penalty from './pages/Penalty';
import User from './pages/User';

function Pages() {
  const location = useLocation();
  const type = useNavigationType();
  console.log(type);
  return (
    <Routes location={location}>
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
          path='/penalty'
          element={<Penalty />}
        />
        <Route
          path='/user'
          element={<User />}
        />

        <Route
          path='/calender'
          element={<Calender />}
        />
        <Route
          path='/calender/:id'
          element={<CalenderDetail />}
        />
      </Route>
    </Routes>
  );
}

export { Pages };
