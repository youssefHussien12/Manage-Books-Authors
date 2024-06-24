import { Router } from "express";
import { createBook, deleteBook, getAllBooks, getSingelBook, updateBook } from "./book.controller.js";

const bookRouter = Router()


bookRouter.route('/').post(createBook).get(getAllBooks)
bookRouter.route('/:id').get(getSingelBook).patch(updateBook).delete(deleteBook)

export default bookRouter