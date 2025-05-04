import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firestore';

export const getAllProjects = async () => {
	const collectionRef = collection(db, 'keyboards'); // Creates a reference to the 'keyboards' collection in Firestore database
	const querySnapshot = await getDocs(collectionRef); //Stores the result in querySnapshot, which contains multiple document snapshots
	const data = querySnapshot.docs.map((doc) => {
		//accesses the docs array  from query snapshot
		const { id } = doc; // or const id = doc.id
		const { ...rest } = doc.data(); //getting all the fields in document using data method
		return { id, ...rest };
	});

	return data;
};

// collection: a function to reference a Firestore Collection
// getDocs: a function to fetch documents from a Firestore Collection

//NOTE - have to create another function here similar to the above just to retrieve featured products. We seperate this because you only need featured products when queried. Rather than have all products and filter it client side seems a bit inefficient. Also this means we send only a few documents over the network.

export const getFeaturedProducts = async () => {
	const collectionRef = collection(db, 'keyboards');
	const q = query(collectionRef, where('isFeatured', '==', true));
	const querySnapshot = await getDocs(q);
	const data = querySnapshot.docs.map((doc) => {
		const id = doc.id;
		const { ...rest } = doc.data();
		return { id, ...rest };
	});

	return data;
};
