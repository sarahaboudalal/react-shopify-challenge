import './index.css';
import SearchMovies from "./component/SearchMovies";
import Footer from "./component/Footer"
import { MovieProvider } from './store/MovieStore';
import SearchResults from './component/SearchResults';


function App() {
  return (
    <div className="App">
    <MovieProvider>
      <h1>The Shoppies</h1>
      <SearchMovies />
      <SearchResults/>
      <Footer />
      </MovieProvider>
    </div>
  );
}

export default App;
