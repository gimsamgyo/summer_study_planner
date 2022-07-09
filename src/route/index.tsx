import Calender from '@/pages/Calender';
import CalenderDetail from '@/pages/CalenderDetail';
import Create from '@/pages/Create';
import Main from '@/pages/Main';
import Penalty from '@/pages/Penalty';
import User from '@/pages/User';

export const ROUTE = {
  '/': Main,
  '/create': Create,
  '/penalty': Penalty,
  '/user': User,
  '/calender': Calender,
  '/calender/:id': CalenderDetail,
};

export const Routing = (path: string) =>
  Object.entries(ROUTE).reduce((result: any, [key, Value]) => {
    const [keyPath, keyId] = key.match(/(\/[\w]*)[/:]*([\w]*)/)?.slice(1) ?? ['', ''];
    const [keyPath2, keyId2] = path.match(/(\/[\w]*)[/]*([\w]*)/)?.slice(1) ?? ['', ''];

    if (keyPath === keyPath2 && (keyId === keyId2 || (keyId !== '' && keyId2 !== ''))) {
      // const queryParams = .match(/([\w]+)=([\w]*)/g)
      return <Value {...{ [keyId]: keyId2 }} />;
    }
    return result;
  }, <div />);
