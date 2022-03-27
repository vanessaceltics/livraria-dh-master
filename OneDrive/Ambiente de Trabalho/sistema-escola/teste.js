require("dotenv").config()

const {Aluno} = require("./database/models");
const {Op} = require("sequelize");

//Aluno.findAll()
//  .then(alunos => alunos.map(aluno => aluno.toJSON()))
//  .then(console.log);

// async function buscarAlunos() {
  // Exercicio 1
  // const alunos = await Aluno.findAll().then(alunos => alunos.map(aluno => aluno.toJSON()));
  // console.log(alunos)
     
  // Exercicio 2
  // const alunos = await Aluno.findAll({ 
  //   where: {ano_matricula: 2019}
  // }).then(aluno => alunos.map(aluno => aluno.toJSON());

  // Exercicio 3
  // const alunos = await Aluno.findAll({
  //     where: {
  //         ano_matricula: 2019,
  //         [Op.or]: [
  //             {
  //                 nome: {[Op.like]: "%re%"}
  //             },
  //             {
  //              sobrenome: {[Op.like]: "%re%"}
  //             },
  //         ]
  //     }
  // }).then(aluno => aluno.map(aluno => aluno.toJSON()));
   
  // console.log(alunos);
// }

// buscarAlunos()

// async function criarAluno() {
//    const aluno = await Aluno.create({
//        nome: "vanessa",
//        sobrenome: "Gomes",
//        ano_matricula: 2021
//    });

//    console.log(aluno.dataValues);
// }

// criarAluno();

// async function editarAluno() {
//  const aluno = await Aluno.update({
//    senha: "chyghgcyhjfcyffyjufhd"
//  }, {
//    where: { id: 10 }
//  });

//  console.log(aluno);

//  console.log(joao.dataValues)
// }
// editarAluno();

async function deletarAluno() {
  try {
    const alunoExiste = await Aluno.findByPk(100);

    if (!alunoExiste) {
      console.log("aluno n existe")
      return
    }

    console.log(alunoExiste);

    // const alunoDeletado = await Aluno.destroy({ where: { id: 100 }});
    // if (!alunoDeletado) {
    //   console.log("aluno n encontrado")
    // }
  } catch (err){
    console.log(err)
  }
}

deletarAluno();