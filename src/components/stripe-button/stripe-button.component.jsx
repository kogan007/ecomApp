import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51I9yrtLCfvrnd7sujKZ17XyMWure7IJFQy2FGzApWFY54NzpX0tm63eqzM2Ejrsw1ST2CZaeKwk2Xt9qsSLq6W5l00C0mXcOwV";

    const onToken = token => {
        console.log(token);
        alert("Payment successful")
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Ecom App'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;