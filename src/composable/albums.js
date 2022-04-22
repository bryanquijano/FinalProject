import { ref } from "vue";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { db } from "./useFirebase";

const albums = ref([]);

const albumItem = () => {
  // defining what collection (database) we are using
  const albumItemsCollection = collection(db, "albums");

  const albumItemsQuery = query(albumItemsCollection, orderBy("ID", "desc"));

  const unsubscribe = onSnapshot(albumItemsQuery, (querySnapshot) => {
    albums.value = [];
    querySnapshot.forEach((doc) => {
      albums.value.push({ id: doc.id, ...doc.data() });
    });
  });

  return { albums, unsubscribe };
};

export default albumItem;
