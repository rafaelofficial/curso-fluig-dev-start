function externo() {
	var pessoa = {
		Nome : "Rafael",
		Sobrenome : "Sousa",
		Departamento : "fluig"
	};

	document.getElementById("local").innerHTML = 
	pessoa.Nome + ", trabalha no " + pessoa.Departamento + "<br />" + pessoa.Nome + " " + pessoa.Sobrenome;
}