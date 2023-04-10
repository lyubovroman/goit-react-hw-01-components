import styled from '@emotion/styled';


export const StatisticsSection = styled.section`

box-shadow: 0px 4px 26px -1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 30px;
    background-color: violet;
`;

export const StatTitle = styled.h2`
padding: 25px 120px;
  background-color: #fff;
`;

export const StatList = styled.ul`
display: flex;

gap: 10px;

`;

export const StatItem = styled.li`
display: flex;
  flex-direction: column;
  width: 70px;
  height: 90px;
  padding: 15px 0;
  background-color: grey;
  border-radius: 30px;
  
   &:hover {
    scale: 1.15;
    background-color: #dbedff;
    color: #010101;
  }

`;

export const LabelText = styled.span`
color: #fff;
  text-align: center;
  margin-bottom: 18px;
`;

export const PercentageText = styled.span`
 color: #fff;
  text-align: center;
  font-size: 25px;
`;