import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from '../config/firestore';

export const getAllKeyboards = async () => {
	const collectionRef = collection(db, 'keyboards');
	const querySnapshot = await getDocs(collectionRef);
	return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); //shorthand version of what was done in project-services
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
