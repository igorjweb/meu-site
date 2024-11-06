function alterarTitulo() {
    document.getElementById("titulo").innerText = "Novo Título";
}

function alterarImagem() {
    const imagem = document.getElementById("minhaImagem");
    imagem.src = "https://wallpapers.com/images/hd/mountains-4k-rdw4c7q5mddwp60l.jpg";
    imagem.alt = "Imagem 2";
}

function toggleTabela() {
    const tabela = document.getElementById("minhaTabela");
    tabela.style.display = tabela.style.display === "none" ? "table" : "none";
}

function alterarLink() {
    const link = document.getElementById("meuLink");
    link.href = "https://www.example.com/";
    link.textContent = "Novo Link";
}

function mostrarNome() {
    alert("Nome do usuário: João");
}