var firebaseConfig = {
  apiKey: "AIzaSyCLblgueexVhiI9QgAHy4XwXdCfvCa8pq8",
  authDomain: "kwitter2-64e1d.firebaseapp.com",
  databaseURL: "https://kwitter2-64e1d-default-rtdb.firebaseio.com",
  projectId: "kwitter2-64e1d",
  storageBucket: "kwitter2-64e1d.appspot.com",
  messagingSenderId: "399749564377",
  appId: "1:399749564377:web:8b74331d40ff3d3e1f7bc8"
};


 firebase.initializeApp(firebaseConfig);
// ADD YOUR FIREBASE LINKS

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


