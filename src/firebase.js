import admin from "firebase-admin";
import serviceAccount from "../zoeapi-5184b-firebase-adminsdk-922bx-1388a961af.json" assert { type: "json" };

// firebase 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// firestore
const db = admin.firestore();

// test-app 컬렉션을 readDb에 담는다
const testApp = db.collection("test-app");

const data = {
  hihi: {
    name: "test",
    today: "I was car",
  },
  hehe: {
    name: "test2",
    today: "I lost my home",
  },
  haha: {
    name: "test3",
    today: "I lost my job",
  },
};

for (const key in data) {
  testApp.doc(key).set(data[key]);
}
