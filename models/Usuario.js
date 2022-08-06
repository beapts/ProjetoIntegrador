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
        data_nasc: {
            type: DataType.DATE,
        },
        cpf: {
            type: DataType.STRING,
        },
        

    }, {
        tableName: 'usuario',
        timestamps: false
    })


    return Usuario;
}