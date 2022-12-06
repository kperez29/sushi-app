import { db } from "../firebaseConfig";
import {
  collection,
  query,
  getDocs,
  addDoc,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore";

export async function createRecipe({ name, recipe }) {
  const data = { name, recipe, date: Timestamp.now() };
  const docRef = await addDoc(collection(db, "recipes"), data);
  return { id: docRef.id, ...data };
}

export async function fetchRecipes() {
  const snapshot = await getDocs(
    query(collection(db, "recipes"), orderBy("date", "desc"), limit(20))
  );
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
