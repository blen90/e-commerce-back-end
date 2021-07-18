const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      DataTypes: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    product_id: {
      DataTypes: INTEGER,
      references: {
        model: "product",
        key: "id"
      }
    }
  },
  {
    tag_id: {
      DataTypes: INTEGER,
      reference: {
        model: "tag",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
