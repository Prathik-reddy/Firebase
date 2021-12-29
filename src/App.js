import logo from './logo.svg';
import './App.css';
import FireAuth from './components/FireAuth';
import Firebase from './components/Firebase';
import FireStorage from './components/FireStorage';
// Auth email : prathik
function App() {
  return (
    <>
      <FireAuth/>
      <Firebase/>
      <FireStorage/>
    </>
  );
}

export default App;
