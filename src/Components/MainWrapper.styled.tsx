import styled from "styled-components";

type MainWrapperPropsType = {
  bgColor: string;
}

const MainWrapper = styled.div<MainWrapperPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};

  height: 100vh;
  width: 100%;
`;

export default MainWrapper;
