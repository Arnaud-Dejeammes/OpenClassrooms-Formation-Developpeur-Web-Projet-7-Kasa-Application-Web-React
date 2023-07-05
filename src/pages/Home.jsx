import '../styles/App.css';
import styled from "styled-components"

const HomeStyle = styled.div`
  display: flex;
  width: 1440px;
  padding: 40px 100px 0px 100px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 63px;

  @media (max-width: 365px) {
    display: flex;
    width: 375px;
    padding: 20px 19px 0px 20px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 16px;    
  }
`

// function App() {
function Home() {
  return (
    <HomeStyle>
          kasa
    </HomeStyle>
  );
}

export default Home;
// export default App;
