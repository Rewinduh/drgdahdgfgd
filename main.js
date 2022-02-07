function login()
{
    var username=document.getElementById("username").value
    localStorage.setItem("username",username)
    window.location="second_page.html"
}