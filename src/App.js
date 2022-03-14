import './App.css';
import Vegetables from './Components/vegetables';
import Wishlist from './Components/Wishlist';

function App() {
  return (
    <div id='main'>

      <div id='main1'>
        <Vegetables name="Tomatoes" initC={10}/>
        <Vegetables name="Potatoes" initC={8}/>
        <Vegetables name="Carrots" initC={7}/>
        <Vegetables name="Onions" initC={5}/>
      </div>

      <div>
        <Wishlist/>
      </div>
      
    </div>
  );
}

export default App;
