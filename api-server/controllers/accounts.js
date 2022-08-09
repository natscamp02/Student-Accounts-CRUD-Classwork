const Account = require("../models/accounts");
const { catchAsync } = require("../utils");

exports.getAllAccounts = catchAsync(async (req, res) => {
    const accounts = await Account.find();

    res.status(200).json({status: "success", results: accounts.length, data: accounts});
});

exports.getAccountByID = catchAsync(async (req, res, next) => {
    const account = await Account.findById(req.params.id);

    if (!account) return next(new Error('No account found for ID ' + req.params.id));

    res.status(200).json({status: "success", data: account});
});

exports.getAccountByStudentID = catchAsync(async (req, res, next) => {
    const account = await Account.findOne({studentID:req.params.id});

    if (!account) return next(new Error('No account found for student with ID ' + req.params.id));

    res.status(200).json({status: "success", data: account});
});

exports.createAccount = catchAsync(async (req, res, next) => {
    const newAccount = await Account.create(req.body);

    res.status(201).json({status: "success", data: newAccount});
});

exports.updateAccount = catchAsync(async (req, res, next) => {
    const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, {new:true});

    res.status(200).json({status: "success", data: updatedAccount});
});

exports.deleteAccount = catchAsync(async (req, res, next) => {
    await Account.findByIdAndDelete(req.params.id);

    res.status(204).json({status: "success", data: null});
});