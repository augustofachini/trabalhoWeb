function mostrarConteudo(idConteudo) {
    // Oculta todos os conteúdos
    var conteudos = document.getElementsByClassName("conteudo");
    for (var i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = 'none';
    }

    // Mostra o conteúdo selecionado
    var conteudo = document.getElementById(idConteudo);
    if (conteudo) {
        conteudo.style.display = 'block';
    }
}
