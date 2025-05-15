document.getElementById('createPostBtn').addEventListener('click', function() {
    // Mostrar o formulário para criar o post
    document.getElementById('postForm').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('overlay').addEventListener('click', function() {
    // Esconder o formulário ao clicar no overlay
    document.getElementById('postForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('submitPostBtn').addEventListener('click', function() {
    const postImage = document.getElementById('postImage').files[0];
    const postTitle = document.getElementById('postTitle').value;
    const postText = document.getElementById('postText').value;

    if (!postTitle || !postText) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

const formData = new FormData();
formData.append('titulo', postTitle);
formData.append('texto', postText);

fetch('inserir_postagem.php', {
    method: 'POST',
    body: formData
})
.then(response => response.text())
.then(data => {
    console.log(data);

    // Criar o post visualmente apenas após sucesso no back-end
    const postContainer = document.getElementById('postContainer');

    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    if (postImage) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(postImage);
        postDiv.appendChild(img);
    }

    const postTitleElement = document.createElement('h3');
    postTitleElement.textContent = postTitle;
    postDiv.appendChild(postTitleElement);

    const postTextElement = document.createElement('p');
    postTextElement.textContent = postText;
    postDiv.appendChild(postTextElement);

    postContainer.prepend(postDiv);

    // Esconder o formulário
    document.getElementById('postForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
})
.catch(error => {
    console.error('Erro ao salvar postagem:', error);
});

    // Adicionar o post na tela
    postContainer.prepend(postDiv);

    // Fechar o formulário após o envio
    document.getElementById('postForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});
