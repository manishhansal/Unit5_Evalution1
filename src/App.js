import './App.css';
import Vegetables from './Components/vegetables';
import Wishlist from './Components/Wishlist';

function App() {
  return (
    <div id='main'>

      <div id='main1'>
        <Vegetables name="Tomatoes"/>
        <Vegetables name="Potatoes"/>
        <Vegetables name="Carrots"/>
        <Vegetables name="Onions"/>
      </div>

      <div>
        <Wishlist/>
      </div>
      
    </div>
  );
}

export default App;
