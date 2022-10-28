const mongoose = require('mongoose');
require('dotenv').config();

const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

function toJSON(schema){
    const { __v, _id, ...object } = schema.toObject();
    object.id = _id;
    return object;
}

const db = {
    mongoose: mongoose,
    url: url,
};

module.exports = db;