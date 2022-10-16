import './index.css';
import SearchMovies from "./component/SearchMovies";
import Footer from "./component/Footer"
function App() {
  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchMovies/>
      <Footer />
    </div>
  );
}

export default App;
