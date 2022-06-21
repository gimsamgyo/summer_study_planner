import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ItemsCenter = styled(Flex)`
  align-items: center;
`;
export const JustifyCenter = styled(Flex)`
  justify-content: center;
`;
export const SpaceBetween = styled(Flex)`
  justify-content: space-between;
  gap: 0;
`;
export const FlexCol = styled(Flex)`
  flex-direction: column;
`;
export const PageContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;
export const PageMenuTitle = styled.h2`
  white-space: nowrap;
`;
