module.exports = (sequelize, DataType) => {
    const Carrinho = sequelize.define('Carrinho', {
        id: {
            type: DataType.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        id_produto: {
            type: DataType.INTEGER,
        },
        nome_produto: {
            type: DataType.STRING,
        },
        preco: {
            type: DataType.FLOAT,
        },
        quantidade: {
            type: DataType.INTEGER,
        }

    }, {
        tableName: 'carrinho',
        timestamps: false
    })


    return Carrinho;
}