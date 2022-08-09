const express = require("express");
const { getAllAccounts, createAccount, getAccountByID, getAccountByStudentID, updateAccount, deleteAccount } = require("../controllers/accounts");

const router = express.Router();

router.route('/student/:id').get(getAccountByStudentID);
router.route('/:id').get(getAccountByID).put(updateAccount).delete(deleteAccount);
router.route('/').get(getAllAccounts).post(createAccount);

module.exports = router;
