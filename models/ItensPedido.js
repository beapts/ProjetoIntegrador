const Pedido = require("./Pedido");

module.exports = (sequelize, DataType) => {
    const ItensPedido = sequelize.define('ItensPedido', {
        id: {
            type: DataType.INTEGER, 
            primaryKey: true
        },
        id_pedido_fk: {
            type: DataType.INTEGER,
        },
        item_fk: {
            type: DataType.INTEGER,
        },
        

    }, {
        tableName: 'itens_pedido',
        timestamps: false
    })

    /* ItensPedido.belongsTo(Pedido, 
        {foreignKey: "id", as: "id_usuario_fk"}
    )  */

    return ItensPedido;
}