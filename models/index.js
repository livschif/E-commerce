// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'product_category',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_category',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    // unique:
  },
  as: 'product_tag',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
  // unique:
  },
  as: 'product_tag'
});

module.exports = { Product, Category, Tag, ProductTag };
