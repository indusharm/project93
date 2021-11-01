function adduser 
{
    username=document.getElementById("user_name").value;
localStorage.setItem("user_name",username);
window.Location(kwitter_room.html)
}


