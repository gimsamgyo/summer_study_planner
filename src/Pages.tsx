import Modal from './components/Modal';
import useStack from './hooks/useStack';
import { Routing } from './route';

function Pages() {
  const { path } = useStack();
  return <Modal>{Routing(path)}</Modal>;
}

export { Pages };
