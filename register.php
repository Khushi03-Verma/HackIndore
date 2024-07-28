<?php

include("connect.php");

$name = $_POST['name'];
$mobile = $_POST['mobile'];
$password = $_POST['password'];
$cpassword = $_POST['cpassword'];
$email = $_POST['email'];
$role = $_POST['role'];

if($password == $cpassword){
   $insert = mysqli_query($connect, "INSERT INTO user (role,username,email,password,mobile) VALUES ('$role' , '$name' , '$email' , '$password', '$mobile')");
   if($insert){
    echo '
    <script>
        alert("Registration Successfull!");
        window.location = "../";
    </script>
    ';
   }
   else{
    echo '
    <script>
        alert("Some error occured!");
        window.location = "../routes/register.html";
    </script>
    ';
   }
}
else{
    echo '
        <script>
            alert("Password and confirm password does not match!");
            window.location = "../routes/register.html"
        </script>
        ';
}
?>