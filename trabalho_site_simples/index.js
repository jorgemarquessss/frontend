function mudarCor() {
	var botao = document.getElementById("botao");
	if (botao.classList.contains("verde")) {
		botao.classList.remove("verde");
	} else {
		botao.classList.add("verde");
	}
}
