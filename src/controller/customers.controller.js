import Customers from "../models/Customers";
import Users from "../models/Users";

export const createCustomer = (req, res) => {
  const {
    sin,
    first_name,
    last_name,
    phone_number,
    email,
    birth_date,
    salary_month,
    address,
    picture_url,
    status,
    bank_account,
    bank_route,
    bank_branch,
  } = req.body;

  const {userid} = req; // we retrieve the userid from request  

  const find_user = Users.findOne({ _id: userid });
  if (!find_user) {
    return res
      .status(400)
      .json({
        error: "User not found",
      })
      .end();
  }

  const newCustomer = new Customers({
    sin: sin,
    first_name: first_name,
    last_name: last_name,
    phone_number: phone_number,
    email: email,
    birth_date: birth_date,
    salary_month: salary_month,
    address: address,
    picture_url: picture_url,
    status: status,
    bank_account: bank_account,
    bank_route: bank_route,
    bank_branch: bank_branch,
    userid: userid,
  });
  newCustomer
    .save()
    .then((customer) => res.json(customer))
    .catch((err) => res.status(400).json({ error: err }));
};

// OK
export const getCustomers = (req, res) => {
  Customers.find()
    .then((customer) => {
      if (customer) {
        return res.json(customer);
      } else {
        res.json({}).status(404).end();
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({}).status(400).end();
    });
};

// OK
export const getCustomerById = (req, res) => {
  const id = req.params.customerId;
  console.log(id);
  Customers.findById(id)
    .then((customer) => {
      if (customer) {
        return res.json(customer);
      } else {
        res.json({}).status(404).end();
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({}).status(400).end();
    });
};

// OK
export const updateCustomerById = (req, res) => {
  const customer = req.body;
  const { userid } = req

  const NewCustomersinfo = {
    sin: customer.sin,
    first_name: customer.first_name,
    last_name: customer.last_name,
    phone_number: customer.phone_number,
    email: customer.email,
    birth_date: customer.birth_date,
    salary_month: customer.salary_month,
    address: customer.address,
    picture_url: customer.picture_url,
    status: customer.status,
    bank_account: customer.bank_account,
    bank_route: customer.bank_route,
    bank_branch: customer.bank_branch,
    userid: userid,
  };
  console.log(NewCustomersinfo);

  Customers.findOneAndUpdate(userid, NewCustomersinfo, { new: true })
    .then((updatedCustomer) => {
      res.json(updatedCustomer);
    })
    .catch((err) => {
      console.log(err);
      res.json({}).status(400).end();
    });
};

// OK ---
export const deleteCustomerById = (req, res) => {
  const id = req.params.customerId;
  Customers.findOneAndRemove({ _id: id })
    .then((deletedCustomer) => {
      res.json({}).status(204).end();
    })
    .catch((err) => {
      console.log(err);
    });
};

///////////////////////
