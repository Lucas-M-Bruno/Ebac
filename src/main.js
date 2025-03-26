const alunos = [{
    nome: 'lucas',
    notaFinal: 7
}, {
    nome: 'diego',
    notaFinal: 4
}, {
    nome: 'daniela',
    notaFinal: 10
}];

const aprovados = alunos.filter(aluno => aluno.notaFinal >=6);
console.log(aprovados);