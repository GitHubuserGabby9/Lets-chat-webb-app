// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDV-CRJmT_dR_iBUR0caHdHzv1iJZVGjXI",
      authDomain: "letschatwebbapp.firebaseapp.com",
      databaseURL: "https://letschatwebbapp-default-rtdb.firebaseio.com",
      projectId: "letschatwebbapp",
      storageBucket: "letschatwebbapp.appspot.com",
      messagingSenderId: "1094780972258",
      appId: "1:1094780972258:web:7f967d34db9e537438c2bb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 console.log("Room name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+"onclick='redirectRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}