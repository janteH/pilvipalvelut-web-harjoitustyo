import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import Search from './components/Search'
import ItemList from './components/ItemList';
import Nav from './components/Nav';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import Details from './components/Details';

function App() {

  const [foodData, setFoodData] = useState([]);
  const [foodId,setFoodId] = useState("658615");

  return (
    <>
      <div>

        <Nav>
          <LoginForm></LoginForm>
        </Nav>


        <Search foodData={foodData} setFoodData={setFoodData} />
        <Container>
          <InnerContainer>
            <ItemList setFoodId={setFoodId} foodData={foodData} />
          </InnerContainer>
          <InnerContainer>
            <Details foodId={foodId}/>
          </InnerContainer>
        </Container>

      </div>
    </>
  )
}

export default App
