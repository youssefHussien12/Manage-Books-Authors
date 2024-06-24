import { Router } from "express";
import {  createAuthor, deleteAuthor, getAllAuthors, getSingelAuthor, updateAuthor } from "./author.controller.js";


const authorRouter = Router()

authorRouter.route('/').post(createAuthor).get(getAllAuthors)
authorRouter.route('/:id').get(getSingelAuthor).patch(updateAuthor).delete(deleteAuthor)

    export default authorRouter
