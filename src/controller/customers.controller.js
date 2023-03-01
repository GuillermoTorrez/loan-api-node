import Customers from "../models/Customers";
import Users from "../models/Users";

export const createCustomer = (req, res) => {
  const {
    sin,
    firstname,
    lastname,
    phonenumber,
    email,
    gender,
    maritalstatus,
    birthdate,
    salary,
    score,
    address1,
    address2,
    province,
    city,
    postalcode,
    photourl,
    status,
    bankname,
    bankaccount,
    bankroute,
    bankbranch,
  } = req.body;

  const { userid } = req; // we retrieve the userid from request

  console.log("userid", userid);

  const find_user = Users.findOne({ _id: userid });
  if (!find_user) {
    return res
      .status(400)
      .json({
        error: "User not found",
      })
      .end();
  }

  // console.log(city_id);

  const newCustomer = new Customers({
    sin: sin,
    first_name: firstname,
    last_name: lastname,
    phone_number: phonenumber,
    email: email,
    birth_date: birthdate,
    gender: gender,
    maritalstatus: maritalstatus,
    salary_month: salary,
    score: score,
    address: {
      address1: address1,
      address2: address2,
      province: province,
      city: city,
      postal_code: postalcode,
    },
    photourl: photourl,
    status_migration_id: status.id,
    bank_name: bankname,
    bank_account: bankaccount,
    bank_route: bankroute,
    bank_branch: bankbranch,
    userid: userid,
  });
  newCustomer
    .save()
    .then((customer) => res.json(customer))
    .catch((err) => res.status(400).json({ error: err }));
};

/////////////////////////////////

// OK
export const getCustomers = (req, res) => {
  Customers.find()
    .populate({
      path: "userid",
      select: "name",
    })
    .populate({
      path: "status_migration_id",
      select: "name",
    })
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
    .populate({
      path: "userid",
      select: "name",
    })
    .populate({
      path: "status_migration_id",
      select: "name",
    })
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
  const id = req.params.customerId;
  const { userid } = req; // we retrieve the userid from ;

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
    status_migration_id: customer.status_migration_id,
    bank_account: customer.bank_account,
    bank_route: customer.bank_route,
    bank_branch: customer.bank_branch,
    userid: userid,
    updateAt: new Date(),
  };

  Customers.findOneAndUpdate(id, NewCustomersinfo, { new: true })
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

////
export const deleteAllCustomers = (req, res) => {
  Customers.deleteMany({})
    .then((deletedCustomer) => {
      res.json({}).status(204).end();
    })
    .catch((err) => {
      console.log(err);
    });
};
