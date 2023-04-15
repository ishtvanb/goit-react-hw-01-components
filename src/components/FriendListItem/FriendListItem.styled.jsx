import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  padding: 10px 20px 10px 15px;

  background-color: lightgreen;
  box-shadow: rgba(60, 60, 93, 0.25) 0px 3px 7px -1px,
    rgba(0, 0, 0, 0.3) 0px 2px 4px -1px;
  border-radius: 6px;
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;
