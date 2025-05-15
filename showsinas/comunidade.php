<?php

include("conexao.php");

$UF = $_POST['UF'];
$cidade = $_POST['cidade'];
$bairro = $_POST['bairro'];

$sql = "INSERT INTO comunidade (UF, cidade, bairro) 
VALUES ('$UF', '$cidade', '$bairro')";
if (mysqli_query($conexao, $sql)) {
    echo "<script> location.href='inicio.html'; </script>";
} else {
    echo "Erro". mysqli_error($conexao);
}

mysqli_close($conexao);

?>