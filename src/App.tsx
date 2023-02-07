import * as St from './App.styled';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

const App = (): JSX.Element => {
  return (
    <St.AppContainer>
      <Header />

      <Body />

      <Footer />
    </St.AppContainer>
  );
};

export default App;
