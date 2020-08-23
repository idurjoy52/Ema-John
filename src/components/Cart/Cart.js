import React from 'react';

const Cart = (props) => {
    const{cart}=props;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total>35) {
        shipping=0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if(total>0) {
        shipping = 12.99;
    }
    const tax = (total/10).toFixed(2);
    return (
        <div>
          <h3>Order Summary</h3>
          <h4>Items Ordered: {cart.length}</h4> 
          <h4>Product Cost: {total}</h4>
          <p><small>Shipping Cost: {shipping}</small></p>
          <p><small>Tax/Vat: {tax}</small></p>
          <h3>Total: {Number((total+shipping+Number(tax)).toFixed(2))}</h3> 
        </div>
    );
};

export default Cart;