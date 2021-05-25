//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAWuICcc4yH-bdacGrZtc_z_3HvnzdVchM",
  authDomain: "kwitter-af723.firebaseapp.com",
  databaseURL: "https://kwitter-af723-default-rtdb.firebaseio.com",
  projectId: "kwitter-af723",
  storageBucket: "kwitter-af723.appspot.com",
  messagingSenderId: "447898310180",
  appId: "1:447898310180:web:a80d82e9feccb969e66ab1",
  measurementId: "G-8HCXQ9C3YW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}