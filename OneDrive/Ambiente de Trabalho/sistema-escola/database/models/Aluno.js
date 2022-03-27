module.exports = (Sequelize, DataTypes) => {
    const Aluno = Sequelize.define("Aluno", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ano_matricula: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
      tableName: "alunos",
      timestamps: false
    });

    return Aluno;
};