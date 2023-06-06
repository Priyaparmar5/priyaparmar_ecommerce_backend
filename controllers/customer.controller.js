const { QueryTypes } = require('sequelize');
const db = require('../models');
const Customer = db.Customer;
const Contact = db.Contact;
const Op = db.Sequelize.Op;


const add = async (req, res) => {
  try {
    const { first_name, last_name, email, password, contact } = req.body;

    const user = await Customer.create(
      {
        ...req.body
      },
   //   { include: {model:Contact} }
    );
    console.log(user,"userrr");

    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  add,
  
};
