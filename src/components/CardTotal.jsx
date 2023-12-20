import React from "react";
const taxRate = 0.18;
const shipping = 25;


const CardTotal = ({product}) => {

 const dumpingRate = 0.8
  const subTotal = product?.reduce((acc, item) => item.price * item.amount * dumpingRate + acc,0)

  const taxPrice = (taxRate* subTotal)

console.log(subTotal);

console.log(product);

  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{subTotal.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{taxPrice.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{shipping}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
           $
            <span className="total">{(subTotal + shipping + taxPrice ).toFixed(2)}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default CardTotal;
