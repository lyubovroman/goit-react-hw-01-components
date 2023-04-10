import styled from '@emotion/styled';



export const ItemCard = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 0;
  border-bottom: 1px solid #eeeeee;
  border-top: 1px solid #eeeeee;
  
  width: 420px;
  height: 80px;
  box-shadow: 0px 4px 26px -1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  background-color: #dbedff;
  &:hover {
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: violet;
  }
`;
export const Image = styled.img`
  filter: brightness(70%);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const Status = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  margin-left: 10px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font - size: 20px; `