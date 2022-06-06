var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
var pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Trabalho.Atriz
};
var pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};
var pessoa3 = {
    nome: 'Laura',
    idade: 32,
    profissao: Trabalho.Atriz
};
var pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: Trabalho.Padeiro
};
function testePessoas() {
    console.log(pessoa1);
    console.log(pessoa2);
    console.log(pessoa3);
    console.log(pessoa4);
}
testePessoas();
