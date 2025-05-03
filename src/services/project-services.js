import { collection, getDocs } from 'firebase/firestore';
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
