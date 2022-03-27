const Product = require("../model/product")
const Order = require("../model/order")
exports.getWelcome = (req, res) => {
    return res.render("home/welcome")
}

exports.getOrders = (req, res) => {
    return res.render("home/orders")
}

exports.editProduct = async (req, res) => {
    const { productId, name, price } = req.body;
    const updateProduct = await Product.findOneAndUpdate({ _id: productId }, { name, price });
    if (updateProduct) {
        return res.json({ success: true, message: "Successfully Updated Product" })
    }
    return res.json({ success: false, message: "Something Went Wrong" })
}


exports.deleteProduct = async (req, res) => {
    const { productId } = req.body;
    const updateProduct = await Product.deleteOne({ _id: productId });
    if (updateProduct) {
        return res.json({ success: true, message: "Successfully Deleted Product" })
    }
    return res.json({ success: false, message: "Something Went Wrong" })
}

exports.addOrder = async (req, res) => {
    const { products, amount, userId } = req.body;

    const addOrder = Order.create({
        products,
        amount,
        createdBy: userId
    })
    if (addOrder) {
        return res.json({ success: true, message: "Successfully Added Order" })
    }
    return res.json({ success: false, message: "Something Went Wrong" })
}

exports.editOrder = async (req, res) => {
    const { orderId,amount, products } = req.body;
    const updateOrder = await Order.findOneAndUpdate({ _id: orderId }, { products, amount });
    if (updateOrder) {
        return res.json({ success: true, message: "Successfully Updated Order" })
    }
    return res.json({ success: false, message: "Something Went Wrong" })
}

// exports.deleteProduct = async (req, res) => {
//     const { productId } = req.body;
//     const deleteProduct = await Product.deleteOne({ _id: productId });
//     if (deleteProduct) {
//         return res.json({ success: true, message: "Successfully Deleted Order" })
//     }
//     return res.json({ success: false, message: "Something Went Wrong" })
// }


exports.deleteOrder = async (req, res) => {
    const { orderId } = req.body;
    console.log("🚁 ~ file: app.js ~ line 67 ~ exports.deleteOrder ~ orderId", orderId)
    const deleteProduct = await Order.deleteOne({ _id: orderId });
    if (deleteProduct) {
        return res.json({ success: true, message: "Successfully Deleted Order" })
    }
    return res.json({ success: false, message: "Something Went Wrong" })
}

exports.getProducts = async (req, res) => {
    console.log(req.session.user)
    const allProducts = await Product.find().lean();
    const currentUser = req.session.user;
    res.render("home/products", { allProducts, currentUser })
}

exports.getAddProduct = async (req, res) => {
    const currentUser = req.session.user;
    res.render("home/addProduct", { currentUser })
}

exports.postAddProduct = async (req, res) => {
    const { name, price } = req.body;
    const currentUser = req.session.user;
    const newProduct = await Product.create({
        name,
        price,
        image: 'https://picsum.photos/200/300?random=' + Math.floor(Math.random() * 100),
        createdBy: currentUser.userId,
    })
    res.redirect("/")
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect("/signin")
}