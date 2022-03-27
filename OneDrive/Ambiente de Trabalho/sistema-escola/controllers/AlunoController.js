const { Aluno } = require("../database/models");

const AlunoController = {
    index: async (request, response) => {
        const alunos = await Aluno.findAll();

        response.render("index", {Alunos});
    },
    create: (request, response) => {
        response.render("cadastroAluno");
    },
    store: async (request, response) => {
        const { nome, sobrenome, ano_matricula } = request.body;

        const aluno = await Aluno.create({
            nome,
            sobrenome,
            ano_matricula
        });

        return response.redirect("/alunos");
    },
    edit: async (request, response) =>{
        const { id } = request.params;

        const alunos = await Alunos.findByPk(id);

        return response.render("editarAluno", { aluno })
    },
    destroy: async (request, response) => {
        const { id } = request.params;

        const aluno = await Alunos.findByPk(id);

        await Alunos.destroy();

        return response.redirect("/alunos");
    }
}

module.exports = AlunoController;