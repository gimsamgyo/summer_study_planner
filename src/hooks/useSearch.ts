import { useState, useMemo } from 'react';

import { STUDY_LIST_ITEM } from '@/test/studyList';

function useSearch() {
  const [keyword, setKeyword] = useState<string>('');

  const searchResults = useMemo(
    () => [STUDY_LIST_ITEM].filter((v) => v.title.includes(keyword)),
    [keyword],
  );
  return { keyword, setKeyword, searchResults };
}

export default useSearch;
