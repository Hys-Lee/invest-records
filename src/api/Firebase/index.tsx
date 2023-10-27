import { collection, query, where, orderBy, limit } from 'firebase/firestore/lite';
import { getDocs, addDoc, getFirestore, doc } from 'firebase/firestore/lite';
import { db } from '../../firebase.tsx';

const orderRef = collection(db, 'orders');

async function insertOrder(data: object) {
  await addDoc(orderRef, data)
    .then((orderRef) => console.log(`Document has been added successfully into Stock document`))
    .catch((error) => console.log(error));
}

async function getOrder(filter: object) {
  const queryConstraints = [];
  queryConstraints.push(orderBy('date', 'desc'));
  if (filter.userId != null) queryConstraints.push(where('userId', '==', filter.userId));
  if (filter.ticker != null) queryConstraints.push(where('ticker', '==', filter.ticker));

  const q = query(orderRef, ...queryConstraints);
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data;
}
export { insertOrder, getOrder };
