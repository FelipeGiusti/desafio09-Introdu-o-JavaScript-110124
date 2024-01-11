const estudantes = [
  {
    nome: "Felipe",
    nota1: 5,
    nota2: 5
  },
  {
    nome: "Carlile",
    nota1: 10,
    nota2: 10
  },
  {
    nome: "Lorena",
    nota1: 3,
    nota2: 3
  },
  {
    nome: "Kati",
    nota1: 7,
    nota2: 7
  },
  {
    nome: "Pedro",
    nota1: 7,
    nota2: 5
  }
]

function media(n1, n2) {
  let resultado = (Number(n1) + Number(n2)) / 2
  return resultado
}

for (estudante of estudantes) {
  if (media(estudante.nota1, estudante.nota2) >= 7) {
    alert(`A média do aluno ${estudante.nome} foi ${media(estudante.nota1, estudante.nota2)} e está aprovado!`)
  } else {
    alert(`A média do aluno ${estudante.nome} foi ${media(estudante.nota1, estudante.nota2)} e está reprovado!`)
  }
}