import Customers from "../models/Customers";
import Loans from "../models/Loans";
import Users from "../models/Users";
import Frequencies from "../models/Frequencies";
import TypesPayment from "../models/TypesPayment";

export const createLoan = (req, res) => {
  const {
    customer_id,
    date,
    amount,
    interest,
    term,
    firstday_payment,
    status_aproval,
    credit_score,
    frequency_payment,
    types_payment,
  } = req.body;

  const { userid } = req; // we retrieve the userid from request

  const find_user = Users.findOne({ _id: userid });
  if (!find_user) {
    return res
      .status(400)
      .json({
        error: "User not found",
      })
      .end();
  }

  const find_frequency = Frequencies.findOne({ _id: frequency_payment });
  if (!find_frequency) {
    return res
      .status(400)
      .json({
        error: "Frequency not found",
      })
      .end();
  }

  const find_type = TypesPayment.findOne({ _id: types_payment });
  if (!find_type) {
    return res
      .status(400)
      .json({
        error: "Types of Payments not found",
      })
      .end();
  }

  const newLoan = new Loans({
    customer_id: customer_id,
    date: date,
    amount: amount,
    interest: interest,
    term: term,
    firstday_payment: firstday_payment,
    status_aproval: status_aproval,
    credit_score: credit_score,
    frequency_payment: frequency_payment,
    types_payment: types_payment,
    userid: userid,
  });
  newLoan
    .save()
    .then((customer) => res.json(customer))
    .catch((err) => res.status(400).json({ error: err }));
};

// OK
export const getLoans = (req, res) => {
  Loans.find()
    .populate({
      path: "frequency_payment",
      select: "description",
    })
    .populate({
      path: "types_payment",
      select: "description",
    })
    .populate({
      path: "customer_id",
      select: "sin name",
    })
    .then((loan) => {
      if (loan) {
        return res.json(loan);
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
export const getLoanById = (req, res) => {
  const id = req.params.customerId;
  console.log(id);
  Loans.findById(id)
    .populate({
      path: "frequency_payment",
      select: "description",
    })
    .populate({
      path: "types_payment",
      select: "description",
    })
    .populate({
      path: "customer_id",
      select: "sin name",
    })
    .then((loan) => {
      if (loan) {
        return res.json(loan);
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
export const updateLoanById = (req, res) => {
  const loan = req.body;
  const { userid } = req; // we retrieve the userid from ;
  const NewLoansinfo = {
    customer_id: loan.customer_id,
    date: loan.date,
    amount: loan.amount,
    interest: loan.interest,
    term: loan.term,
    firstday_payment: loan.firstday_payment,
    status_aproval: loan.status_aproval,
    credit_score: loan.credit_score,
    frequency_payment: loan.frequency_payment,
    types_payment: loan.types_payment,
    userid: loan.userid,
  };
  console.log(NewLoansinfo);

  Customers.findOneAndUpdate(userid, NewLoansinfo, { new: true })
    .then((updatedLoan) => {
      res.json(updatedLoan);
    })
    .catch((err) => {
      console.log(err);
      res.json({}).status(400).end();
    });
};

// OK ---
export const deleteLoanById = (req, res) => {
  const id = req.params.customerId;
  Loans.findOneAndRemove({ _id: id })
    .then((deletedLoan) => {
      res.json({}).status(204).end();
    })
    .catch((err) => {
      console.log(err);
    });
};

///////////////////////
// export const deleteAllLoan = (req, res) => {
//  Loans.deleteMany({})
//    .then((deletedLoan) => {
//      res.json({}).status(204).end();
//    })
//    .catch((err) => {
//      console.log(err);
//    });
// };
