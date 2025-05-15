<?php
include("conexao.php");

$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = "SELECT * FROM usuario WHERE email = '$email' AND senha = '$senha'";
$result = mysqli_query($conexao, $sql);

if (mysqli_num_rows($result) == 1) {
    echo "<script>location.href='inicio.html';</script>";
} else {
    //Gera um aviso informando que o valor está incorreto
    echo "<script>alert('Email ou senha incorretos!');</script>";
}

mysqli_close($conexao);
?>