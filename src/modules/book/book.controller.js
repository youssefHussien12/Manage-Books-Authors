import { Book } from "../../../database/models/book.model.js"


const createBook = async (req, res) => {
    try {
        let book = await Book.insertMany(req.body)
        res.status(201).json({ message: "created", book })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getAllBooks = async (req, res) => {
    try {
        let books = await Book.find()
        res.status(200).json({ message: "success", books })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getSingelBook = async (req, res) => {
    try {
        let book = await Book.findById(req.params.id)
        res.status(200).json({ message: "success", book })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const updateBook = async (req, res) => {
    try {
        let book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (book) {
            res.status(200).json({ message: "success", book })
        } else {
            res.status(404).json({ message: "book not found" })
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteBook = async (req, res) => {
    try {
        let book = await Book.findByIdAndDelete(req.params.id)
        if (book) {
            res.status(200).json({ message: "book deleted" })
        } else {
            res.status(404).json({ message: "book not found" })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


export {
    createBook,
    getAllBooks,
    getSingelBook,
    updateBook,
    deleteBook
}