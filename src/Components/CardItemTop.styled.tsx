import styled from "styled-components";

type CardItemTopPropsType = {
    imgUrl: string;
}

const CardItemTop = styled.img<CardItemTopPropsType>`
  height: 170px;
  border-radius: 10px;
  background: url(${props => props.imgUrl});
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;
`;

export default CardItemTop;