
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/Approuter";
import CartContextCoponent from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextCoponent>
        <AppRouter />
      </CartContextCoponent>

    </BrowserRouter >
  );
}

export default App;
