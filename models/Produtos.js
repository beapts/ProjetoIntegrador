module.exports = (sequelize, DataType) => {
    const Produtos = sequelize.define('Produtos', {
        id: {
            type: DataType.INTEGER, 
            primaryKey: true,
            autoIncrement: true
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
        },
        produto_img: {
            type: DataType.STRING,
        },
        descricao_curta: {
            type: DataType.STRING,
        },
        descricao_longa: {
            type: DataType.STRING,
        },

    }, {
        tableName: 'produtos',
        timestamps: false
    })


    return Produtos;
}