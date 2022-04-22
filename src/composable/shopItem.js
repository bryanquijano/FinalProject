import { ref } from "vue";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { db } from "./useFirebase";

const products = ref([]);

const productItem = () => {
  // defining what collection (database) we are using
  const productItemsCollection = collection(db, "storeItems");

  const productItemsQuery = query(productItemsCollection, orderBy("ID", "asc"));

  const unsubscribe = onSnapshot(productItemsQuery, (querySnapshot) => {
    products.value = [];
    querySnapshot.forEach((doc) => {
      products.value.push({ id: doc.id, ...doc.data() });
    });
  });

  return { products, unsubscribe };
};

export default productItem;
