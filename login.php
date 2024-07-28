<?php
session_start();
   include("connect.php");
   $mobile =$_POST['mobile'];
   $password=$_POST['password'];
   $role=$_POST['role'];

   $check =mysqli_query($connect, "SELECT * FROM user WHERE mobile ='$mobile' AND password='$password' AND role='$role'");
   if(mysqli_num_rows($check)>0){
      
    $userdata=mysqli_fetch_array($check); 
    $groups= mysqli_query($connect,"SELECT * FROM user WHERE role=$role"); 
    $groupsdata = mysqli_fetch_all($groups,MYSQLI_ASSOC); 

    $_SESSION['userdata']= $userdata; 
    $_SESSION['groupsdata']=$groupsdata;

    if($role==1){
      echo'
      <script>
      window.location="user.html";
      </script> 
      ';
    }
    if($role==2){
      echo'
    <script>
    window.location="employe.html";
    </script> 
    ';
    }
   }
   else{
    echo'
    <script>
    alert("Invalid Credientials or User not found!");
    window.location="../";
    </script> 
    ';
   }

   ?>