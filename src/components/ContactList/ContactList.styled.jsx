import styled from '@emotion/styled';

export const List = styled.ul`
  width: 400px;

  background-color: #fee5c5;
  margin: 0;
  list-style: none;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span``;

export const Delete = styled.button`
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
`;
