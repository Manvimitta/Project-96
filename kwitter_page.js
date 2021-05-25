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
  room_name = localStorage.getItem("room_name");

  function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value = "";
  }

  function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}
