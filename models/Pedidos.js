module.exports = (sequelize, DataType) => {
    const Pedidos = sequelize.define('Pedidos', {
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
        tableName: 'pedidos',
        timestamps: false
    })


    return Pedidos
}