const Producto = require("../models/Producto")

const productExists = async (id) => {

    const product = await Producto.findById(id);

    if (!product) throw new Error("The product doesn't exists");
}

module.exports = { productExists }