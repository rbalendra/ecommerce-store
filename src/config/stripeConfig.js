import { loadStripe } from '@stripe/stripe-js';

// Safely access the environment variable
export const stripePromise = loadStripe(
	import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);
