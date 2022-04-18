import { ref } from "vue";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { db } from "./useFirebase";

const singles = ref([]);

const singleCard = () => {
  // defining what collection (database) we are using
  const singleCardsCollection = collection(db, "singleCards");

  const singleCardsQuery = query(singleCardsCollection, orderBy("ID", "desc"));

  const unsubscribe = onSnapshot(singleCardsQuery, (querySnapshot) => {
    singles.value = [];
    querySnapshot.forEach((doc) => {
      singles.value.push({ id: doc.id, ...doc.data() });
    });
  });

  return { singles, unsubscribe };
};

export default singleCard;
