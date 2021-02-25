// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Content from './components/content'
import SerachForm from './components/searchForm'


function App() {
  return (
    <div className="App">
      <Header/>
      
      <SerachForm/>

      <Content/>

    </div>
  );
}

export default App;
