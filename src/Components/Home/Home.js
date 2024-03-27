import React,{useReducer} from 'react'
import './Home.css'
import Cart from '../Cart/Cart'
import ProductCard from '../ProductCard/ProductCard'
import products from '../../data'

function reducer(state, action) {
    switch (action.type) {
      case "increase": {
        const data = [...state.products];
        data[action.payload - 1].qty += 0.5;
        return {
          ...state,
          products: data,
        };
      }
      case "decrease": {
        const data = [...state.products];
        if (data[action.payload - 1].qty > 0) {
          data[action.payload - 1].qty -= 0.5;
        }
        return {
          ...state,
          products: data,
        };
      }
      default:
        return {
          ...state,
        };
    }
  }

const Home = () => {
    const [state, dispatch] = useReducer(reducer, {
        products: products,
      });
  return (
    <div className="container">
    <div className="product_container">
      <h2>Products</h2>
      {state.products.map((elem) => {
        return (
          <ProductCard
            key={elem.id}
            name={elem.name}
            price={elem.price}
            id={elem.id}
            qty={elem.qty}
            dispatch={dispatch}
          />
        );
      })}
    </div>
    <div className="cart_container">
      <div className="card_container">
       <h2>Cart</h2>
        {state.products
          .filter((elem) => {
            if (elem.qty > 0) {
              return true;
            }
            return false;
          })
          .map((elem) => {
            return <Cart key={elem.id} name = {elem.name} price = {elem.price} qty = {elem.qty} />;
          })}
      </div>
      <div className="total_card">
        <p>Total : </p>
        <p>
          {
              state.products.reduce((accu, curr)=>{
                  return accu + (curr.qty * curr.price)
              },0)
          }
        </p>
      </div>
    </div>
  </div>
  )
}

export default Home