<?php
include ("conexao.php");

// Receber dados do POST
$titulo = $_POST['titulo'];
$texto = $_POST['texto'];

// Inserir no banco de dados
$sql = "INSERT INTO postagem (Titulo, texto) VALUES (?, ?)";
$stmt = $conexao->prepare($sql);
$stmt->bind_param("ss", $titulo, $texto);

if ($stmt->execute()) {
    echo "Postagem inserida com sucesso!";
} else {
    echo "Erro ao inserir postagem: " . $conexao->error;
}

$stmt->close();
$conexao->close();
?>