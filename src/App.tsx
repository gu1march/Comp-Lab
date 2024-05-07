import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel';

function App() {

  return (
    <>
      <Carousel slides={["../../1.jpg","../../2.jpg","../../3.jpg","../../4.jpg","../../5.jpg","../../6.jpg","../../7.jpg","../../8.jpg"]} />
    </>
  )
}

export default App
