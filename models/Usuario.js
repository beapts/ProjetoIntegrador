module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataType.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataType.STRING,
        },
        email: {
            type: DataType.STRING,
        },
        senha: {
            type: DataType.STRING,
        },
        cpf: {
            type: DataType.STRING,
        },
        data_nasc: {
            type: DataType.DATE,
        }
        

    }, {
        tableName: 'usuario',
        timestamps: false
    })


    return Usuario;
}