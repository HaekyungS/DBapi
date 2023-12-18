import admin from "firebase-admin";
import serviceAccount from "../zoeapi-5184b-firebase-adminsdk-922bx-1388a961af.json" assert { type: "json" };

// firebase 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// firestore
const db = admin.firestore();

// test-app이란 컬렉션에 test 라는 문서 넣기
const testApp = db.collection("test-app");

const selectData = await testApp.where("name", "==", "test").get();

selectData.forEach((doc) => {
  console.log(doc.id, "=>", doc.data());
});
