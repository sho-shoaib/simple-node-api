import fs from "fs";
import path from "path";
const __dirname = path.resolve();

const users = JSON.parse(fs.readFileSync(`${__dirname}/userData.json`));

export const getAllUsers = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      dataCount: users.length,
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      error: err.message,
    });
  }
};

export const addUser = (req, res) => {
  try {
    const user = req.body;
    users.push({ id: users[users.length - 1].id * 1 + 1, ...user });

    fs.writeFile(`${__dirname}/userData.json`, JSON.stringify(users), (err) => {
      if (err) console.log(err);
    });

    res.status(200).json({
      status: "success",
      message: `${user.firstName} added`,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      error: err.message,
    });
  }
};

export const getOneUser = (req, res) => {
  try {
    const { id } = req.params;
    const user = users.filter((user) => +user.id === +id);

    res.status(200).json({
      status: "success",
      dataCount: user.length,
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      error: err.message,
    });
  }
};

export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const newUsers = users.filter((user) => +user.id !== +id);

    fs.writeFile(
      `${__dirname}/userData.json`,
      JSON.stringify(newUsers),
      (err) => {
        err && console.log(err);
      }
    );

    res.status(200).json({
      status: "success",
      message: "successfully deleted",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      error: err.message,
    });
  }
};

export const updateUser = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "<Updated tour here>",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      error: err.message,
    });
  }
};
