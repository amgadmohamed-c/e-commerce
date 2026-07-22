const user = require('./user');
const Category = require('./category');
const Product = require('./product');
const Cart = require('./cart');
const Cartitem = require('./cartitem');



user.hasOne(Cart);
Cart.belongsTo(user);
Cart.hasMany(Cartitem);
Cartitem.belongsTo(Cart);

Cartitem.belongsTo(Product);
Product.hasMany(Cartitem);

Product.belongsTo(Category);
Category.hasMany(Product);

