import express from "express";
import {
  getBook,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} from "../Controller/bookController.js";

const router = express.Router();

// Route for Get All Books , Create a new Book from database
router.route("/").get(getBook).post(createBook);

// Route for Get One Book from database by id , Update a Book , Delete a Book
router.route("/:id").get(getBookById).put(updateBook).delete(deleteBook);

export default router;
