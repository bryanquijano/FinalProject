import { ref } from "vue";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { db } from "./useFirebase";

const albums = ref([]);

const albumCard = () => {
  // defining what collection (database) we are using
  const albumCardsCollection = collection(db, "albumCards");

  const albumCardsQuery = query(albumCardsCollection, orderBy("ID", "desc"));

  const unsubscribe = onSnapshot(albumCardsQuery, (querySnapshot) => {
    albums.value = [];
    querySnapshot.forEach((doc) => {
      albums.value.push({ id: doc.id, ...doc.data() });
    });
  });

  return { albums, unsubscribe };
};

export default albumCard;
