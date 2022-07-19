module.exports = (sequelize, DataType) => {
    const PagamentoPedido = sequelize.define('PagamentoPedido', {
        id: {
            type: DataType.INTEGER, 
            primaryKey: true
        },
        id_pedido_fk: {
            type: DataType.INTEGER,
        },
        forma_pagamento: {
            type: DataType.STRING,
        },
        bandeira_cartao: {
            type: DataType.STRING,
        },
        parcelamento: {
            type: DataType.INTEGER,
        },
        valor_total: {
            type: DataType.FLOAT,
        },
        

    }, {
        tableName: 'pagamento_pedido',
        timestamps: false
    })


    return PagamentoPedido;
}