import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;

  return (
    <div style={{height:'700px'}}>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h3 className="text">
              <h2 className="text-center"><font face = "Comic sans MS" size =" 6">My Shopping Cart</font> </h2>
            </h3>
            <h3 className="text">
              {" "}
              Product Types: ({totalUniqueItems})Total Items: ({totalItems})
            </h3>
            <br/>
            <table className="table table-light table-hover m-0" style={{fontSize:'20px'}}>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.img} style={{ height: "9rem" }} />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td> Quantity ({item.quantity})</td>
                      <td>
                        <button style={{height:'40px', width:'40px'}}
                          className="btn btn-primary m-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                         --
                        </button>
                        <button style={{height:'40px', width:'40px'}}
                          className="btn btn-primary m-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button style={{height:'40px', width:'70px'}}
                          className="btn btn-danger ms-2"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
       
          <div className="col-auto ms-auto">
          <br/>
          <br/>
            <h2>Total Price: Rs.{cartTotal}</h2>
          </div>
          <br />
          <div className="col-auto">
            <br/>
            <button className="btn btn-danger m-2" onClick={() => emptyCart()} style={{height:'40px', width:'80px'}}>
              Clear Cart
            </button>
            <br />
            <button className="btn btn-primary m-2">
              <a
                href="/order/create"
                style={{ textDecoration: "none", color: "white", fontSize:'18px' }}
              >
                Proceed to Checkout
              </a>
            </button>
          </div>
        </div>
      </section>
      <div class="ibox">
        <div class="ibox-title text-center">
          <h5>Support</h5>
        </div>
        <div class="ibox-content text-center">
          <h3>
            <i class="fa fa-phone"></i> +94 100 783 001
          </h3>
          <span class="small">
            Please contact with us if you have any questions. We are avalible
            24h.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
