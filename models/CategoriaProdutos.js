module.exports = (sequelize, DataType) => {
    const CategoriaProduto = sequelize.define('CategoriaProduto', {
        id: {
            type: DataType.INTEGER, 
            primaryKey: true
        },
        categoria: {
            type: DataType.STRING,
        }

    }, {
        tableName: 'categoria_produtos',
        timestamps: false
    })


    return CategoriaProduto;
}