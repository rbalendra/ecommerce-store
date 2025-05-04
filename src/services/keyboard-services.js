import { collection } from 'firebase/firestore';
import { db } from '../config/firestore';
import { doc, getDocs } from 'firebase/firestore';

export const getAllKeyboards = async () => {
	const collectionRef = collection(db, 'keyboards');
	const querySnapshot = await getDocs(collectionRef);
	return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); //shorthand version of what was done in project-services
};
