import { Dispatch, SetStateAction } from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  input {
    width: 100%;
    height: 2rem;
  }
`;

const SearchBtn = styled(BiSearch)`
  position: absolute;
  width: 1.4rem;
  height: 1.4rem;
  top: 50%;
  right: 0.5rem;
  transform: translate(0%, -50%);
`;

interface Props {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ keyword, setKeyword }: Props) => (
  <Container>
    <input
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
    />
    <SearchBtn />
  </Container>
);

export default SearchBar;
