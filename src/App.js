import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import { database } from "./firebase.js";

function App() {

  return (
    <div className="App">
        <Header/>
        <GameBoard />
        <Footer/>
    </div>
  );
}

export default App;
