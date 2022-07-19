module.exports = (sequelize, DataType) => {
    const Produtos = sequelize.define('Produtos', {
        id: {
            type: DataType.INTEGER, 
            primaryKey: true
        },
        nome: {
            type: DataType.STRING,
        },
        id_categoria_fk: {
            type: DataType.INTEGER,
        },
        preco: {
            type: DataType.FLOAT,
        },
        quantidade: {
            type: DataType.INTEGER,
        }

    }, {
        tableName: 'produtos',
        timestamps: false
    })


    return Produtos
}