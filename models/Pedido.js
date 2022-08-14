const Usuario = require("./Usuario");

module.exports = (sequelize, DataType) => {
    const Pedido = sequelize.define('Pedido', {
        id: {
            type: DataType.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario_fk: {
            type: DataType.INTEGER,
        },
        quantidade_itens: {
            type: DataType.INTEGER,
        },
        valor_total: {
            type: DataType.FLOAT,
        },
        forma_pagamento: {
            type: DataType.STRING,
        },
        endereco_entrega: {
            type: DataType.STRING,
        },
        data_pedido: {
            type: DataType.DATE,
        },
        status_pedido: {
            type: DataType.STRING,
        },

    }, {
        tableName: 'pedido',
        timestamps: false
    })

   /*  Pedido.hasMany(ItensPedido,
        {foreignKey: "id_pedido_fk", as: "itens"} )  */

    Pedido.associate = (models) => {
        Pedido.hasMany(models.ItensPedido, {
            as: 'itens',
            foreignKey: 'id_pedido_fk'
         })
        }

    /* Pedido.belongsTo(Usuario, 
        {foreignKey: "id", as: "id_usuario_fk"}
    ) */

    return Pedido;
}