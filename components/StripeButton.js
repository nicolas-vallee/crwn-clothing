import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IgTSUA3JwbfJeyrhkGqBLxuTdXQaFhJWdYItLELOEiZ3XiHo8jmvUYv8ChQKi3OpiwlFJOX0gQwp0yQXdzGp5VG00WM6Zm4re';

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
