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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_date['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name + "</h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"
like_button = "<button class='btn btn-warning'id="+firbase_message_id+" value="+like+" onclick='updateLike(this.id)'>";

row = name_with_tag + message_with_tag + like_button;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.data().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });

    document.getElementById("msg").value = "";  
}

function updateLike(message_id)
{
  console.log("clicked on like button - "+ message_id); 
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firbase.database().ref(room_name).child(message_id).update({
    like:updated_likes
  });
}