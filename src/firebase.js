import admin from "firebase-admin";
import serviceAccount from "../zoeapi-5184b-firebase-adminsdk-922bx-1388a961af.json" assert { type: "json" };

// firebase 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// firestore
const db = admin.firestore();

// DB 추가/업데이트
export const updateDB = async (collect, doc, field, value, merge) => {
  const updateCollection = db.collection(collect);
  updateCollection.doc(doc).set(
    {
      field: value,
    },
    { merge: merge }
  );
};

// DB 읽기
export const readDB = async (collect, doc) => {
  const readCollection = db.collection(collect);
  const readDoc = await readCollection.doc(doc).get();
  return readDoc.data();
};
