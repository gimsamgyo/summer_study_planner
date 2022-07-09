import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { stackSelector, pushPage, popPage } from '@/app/stackSlice';

function useStack() {
  const stack = useSelector(stackSelector);
  const dispatch = useDispatch();

  const push = useCallback((path: string) => {
    dispatch(pushPage({ path }));
  }, []);

  const pop = useCallback(() => {
    dispatch(popPage());
  }, []);

  return { stack, push, pop, path: stack[stack.length - 1] };
}

export default useStack;
