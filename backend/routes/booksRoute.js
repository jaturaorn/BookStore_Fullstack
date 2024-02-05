import express from "express";

import {
  addBook,
  deleteBook,
  getBook,
  getBookById,
  updateBook,
} from "../controllers/bookController.js";

const router = express.Router();

// *TODO: Route for Get All Books form database
router.get("/", getBook);

// *TODO: Route for Get One Books form database by id
router.get("/:id", getBookById);

// *TODO: Route for Add a new Book
router.post("/", addBook);

// *TODO: Route for Update Books form database
router.put("/:id", updateBook);

// *TODO: Route for Delete Books form database
router.delete("/:id", deleteBook);

export default router;

/*
 * router.route("/").get((req, res) =>{
 * code whatever here
 * })
 */

// *TODO: router.get("/", getBook).post("/", addBook);
