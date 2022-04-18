import { ref } from "vue";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { db } from "./useFirebase";

const members = ref([]);

const memberCard = () => {
  // defining what collection (database) we are using
  const memberCardsCollection = collection(db, "memberCards");

  const memberCardsQuery = query(memberCardsCollection, orderBy("ID", "asc"));

  const unsubscribe = onSnapshot(memberCardsQuery, (querySnapshot) => {
    members.value = [];
    querySnapshot.forEach((doc) => {
      members.value.push({ id: doc.id, ...doc.data() });
    });
  });

  return { members, unsubscribe };
};

export default memberCard;
