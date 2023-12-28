const alunos = [
    { nome: 'Gabriel', nota: 8.5 },
    { nome: 'Paulo', nota: 6.5 },
    { nome: 'Giovanna', nota: 10.0 },
    { nome: 'Carla', nota: 5.5 },
];

function filtrarAlunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);