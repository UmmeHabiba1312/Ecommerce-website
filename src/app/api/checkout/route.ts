import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Calculate the total price of the cart
      const { cartItems } = req.body; // Example cartItems: [{ id, name, price, quantity }]
      let totalAmount = 0;
      cartItems.forEach((item: any) => {
        totalAmount += item.price * item.quantity;
      });

      // Create a PaymentIntent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: totalAmount * 100, // Stripe accepts the amount in the smallest currency unit (cents)
        currency: 'usd',
        metadata: { integration_check: 'accept_a_payment' },
      });

      res.status(200).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (err) {
      res.status(500).json({ error: 'Payment failed' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
