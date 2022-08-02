const Usuario = require("./Usuario");

module.exports = (sequelize, DataType) => {
    const Pedido = sequelize.define('Pedido', {
        id: {
            type: DataType.INTEGER, 
            primaryKey: true
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
        id_pagamento_fk: {
            type: DataType.INTEGER,
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
        data_finalizacao: {
            type: DataType.DATE,
        },

    }, {
        tableName: 'pedido',
        timestamps: false
    })
    
    /* Pedido.belongsTo(Usuario, 
        {foreignKey: "id", as: "id_usuario_fk"}
    ) */

    return Pedido;
}