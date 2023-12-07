import admin from "firebase-admin";
import serviceAccount from "../zoeapi-5184b-firebase-adminsdk-922bx-1388a961af.json" assert { type: "json" };

// firebase 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// firestore
const db = admin.firestore();

// // test-app 컬렉션을 readDb에 담는다
// const readDb = db.collection("test-app");

// readDb 중 test Doc을 읽어와 getTest에 담는다
// const getTest = await readDb.doc("test").get();

// const getTest = await readDb.get();
// getTest.forEach((doc) => {
//   console.log("문서확인" + doc);
//   console.log(doc.id, " : ", doc.data());
// });

// 확인
// console.log(getTest.data());

// test-app이란 컬렉션에 test 라는 문서 넣기
const testApp = db.collection("test-app");

// 비동기
// await testApp.add({
//   hihi: {
//     name: "test",
//     today: "I was car",
//   },
//   hehe: {
//     name: "test2",
//     today: "I lost my home",
//   },
//   haha: {
//     name: "test3",
//     today: "I lost my job",
//   },
// });

// const data = {
//   hihi: {
//     name: "test",
//     today: "I was car",
//   },
//   hehe: {
//     name: "test2",
//     today: "I lost my home",
//   },
//   haha: {
//     name: "test3",
//     today: "I lost my job",
//   },
// };

// for (const key in data) {
//   testApp.doc(key).set(data[key]);
// }
