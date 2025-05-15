drop database sinas;
create database sinas;

use sinas;

create table usuario(
id_usuario int primary key auto_increment,
nome varchar(255) not null unique,
email varchar(255) not null unique,
senha varchar(255) not null
);

create table comunidade(
id_comunidade int primary key auto_increment,
UF varchar(255) not null,
cidade varchar(255) not null,
bairro varchar(255) not null
);

create table postagem(
id_postagem int primary key auto_increment,
Titulo varchar(255) not null,
texto varchar(255)
);

select * from postagem;
SELECT * 
FROM usuario 
CROSS JOIN comunidade;

select * from comunidade;
select * from usuario;
