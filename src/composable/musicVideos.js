import { ref } from "vue";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { db } from "./useFirebase";

const musicVideos = ref([]);

const musicVideoCard = () => {
  // defining what collection (database) we are using
  const musicVideoCardsCollection = collection(db, "musicVideos");

  const musicVideoCardsQuery = query(
    musicVideoCardsCollection,
    orderBy("ID", "asc")
  );

  const unsubscribe = onSnapshot(musicVideoCardsQuery, (querySnapshot) => {
    musicVideos.value = [];
    querySnapshot.forEach((doc) => {
      musicVideos.value.push({ id: doc.id, ...doc.data() });
    });
  });

  return { musicVideos, unsubscribe };
};

export default musicVideoCard;
