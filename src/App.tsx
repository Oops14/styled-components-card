import React from 'react';
import './App.css';
import MainWrapper from "./Components/MainWrapper.styled";
import CartItem from "./Components/CardItem.styled";
import CardItemTop from "./Components/CardItemTop.styled";
import CartItemBottom from "./Components/CardItemBottom.styled";
import CardItemTitle from "./Components/CardItemTitle.styled";
import CardItemDescription from "./Components/CardItemDescription.styled";
import {CardButtons} from "./Components/CardButtons.styled";

function App() {
    return (
        <div className="App">
            <MainWrapper bgColor={"#f5f5f5"}>
                <CartItem>
                    <CardItemTop imgUrl={process.env.PUBLIC_URL + '/Rectangle.png'} ></CardItemTop>
                    <CartItemBottom>
                        <CardItemTitle> Headline </CardItemTitle>
                        <CardItemDescription>
                            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                        </CardItemDescription>

                        <CardButtons className ={"primary-button"}>See more</CardButtons>
                        <CardButtons>Save</CardButtons>
                    </CartItemBottom>
                </CartItem>
            </MainWrapper>
        </div>
    );
}


export default App;
