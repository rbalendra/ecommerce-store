import {
	collection,
	doc,
	getDocs,
	getDoc,
	query,
	where,
} from 'firebase/firestore';
import { db } from '../config/firestore';

// collection: a function to reference in Firestore Collection
// getDocs: a function to fetch documents from a Firestore Collection

export const getAllKeyboards = async () => {
	const collectionRef = collection(db, 'keyboards'); // Creates a reference to the 'keyboards' collection in Firestore database
	const querySnapshot = await getDocs(collectionRef); //Stores the result in querySnapshot, which contains multiple document snapshots
	return querySnapshot.docs.map((doc) => {
		//accesses the docs array  from query snapshot
		const { id } = doc; // or const id = doc.id
		const { ...rest } = doc.data(); //getting all the fields in document using data method
		return { id, ...rest }; // returns an array of objects with id and rest of the data
	});
};

// getKeyboardById function retrieves a single keyboard document from Firestore by its ID and returns the document data along with its ID. If the document does not exist, it throws an error.

export const getKeyboardById = async (id) => {
	const docRef = doc(db, 'keyboards', id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return { id: docSnap.id, ...docSnap.data() };
	} else {
		throw new Error('Keyboard not found');
	}
};

//NOTE - have to create another function here similar to the above just to retrieve featured products. We seperate this because you only need featured products when queried. Rather than have all products and filter it client side seems a bit inefficient. Also this means we send only a few documents over the network.
export const getFeaturedKeyboards = async () => {
	const collectionRef = collection(db, 'keyboards');
	const q = query(collectionRef, where('isFeatured', '==', true));
	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
};
