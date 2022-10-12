// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAk8CytDap8E2I1HE-hFYuUrlQboKfOm44",
      authDomain: "lets-chat-webb-app.firebaseapp.com",
      databaseURL: "https://lets-chat-webb-app-default-rtdb.firebaseio.com",
      projectId: "lets-chat-webb-app",
      storageBucket: "lets-chat-webb-app.appspot.com",
      messagingSenderId: "208554381362",
      appId: "1:208554381362:web:e6fbce55d6896ab1496c2b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();



function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}