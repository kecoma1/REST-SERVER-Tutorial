const Producto = require("../models/Producto");

const productsPost = async (req, res) => {
    const { name, price, description } = req.body;

    const producto = new Producto({ name, price, description });

    await producto.save();

    res.send('Product created!');
}

const productsGet = async (req, res) => {
    const { id } = req.params;

    const producto = await Producto.findById(id);

    res.send(producto);
}

const productsPut = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    await Producto.findById(id, {name, description, price});

    res.send('Producto actualizado');
}

const productsDelete = async (req, res) => {
    const { id } = req.params;

    await Producto.findByIdAndDelete(id);

    res.send('Product deleted perfectly');
}


module.exports = {
    productsPost,
    productsGet,
    productsPut,
    productsDelete
}