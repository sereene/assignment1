import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import Small from "./components/Small";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 400px;
  height: 100vh;
  padding: 15px 15px 15px 15px;
  background-color: rgb(120, 165, 255);
`;

const RightBox = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  justify-content: center;
  width: 100px;
  height: 100vh;
  padding: 15px 15px 15px 15px;
  background-color: lavender;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;
const Icon = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Title = styled.div`
  display: flex;
  align-items: end;
  font-size: 40px;
  color: white;
  text-align: center;
  font-family: Arial;
  font-style: italic;
  font-weight: bold;
`;

const LowBar=styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 40px;
  color:white;
`;


const App = () => {
    return (

        <Container>
            <MainBox>
                <Title>Serin의</Title>
                <Title>IT 블로그</Title>
                <LowBar>-------------------------</LowBar>
                <Icon>
                <img src={"icon.jpg"} alt = "icon" width={50} />
                <img src={"icon.jpg"} alt = "icon" width={50} />
                <img src={"icon.jpg"} alt = "icon" width={50} />
                <img src={"icon.jpg"} alt = "icon" width={50} />
                </Icon>
            </MainBox>
            <RightBox>
                <Small></Small>
                <Small></Small>
                <Small></Small>
            </RightBox>

        </Container>

    )

}

export default App;
