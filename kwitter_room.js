
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getitem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setitem("room_name", room_name);

      window.location = "kwitter_page.html";

}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      

      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}