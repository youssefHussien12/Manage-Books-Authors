import { Author } from "../../../database/models/author.model.js";


const createAuthor = async (req,res)=>{
    try {
        let author = await Author.insertMany(req.body)
        res.status(201).json({message:"created" , author})

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}



const getAllAuthors = async (req,res)=>{
    
    try {
        let authors = await Author.find().select('-books')
        res.status(200).json({message:"success" ,authors})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


const getSingelAuthor = async (req,res)=>{

    try {
        let author = await Author.findById(req.params.id).populate("books").select("-__v")
        if (author) {
            res.status(200).json({message:"success",author})
        }else{
            res.status(404).json({message:"author not found"})
        }
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }


}


const updateAuthor = async (req,res)=>{
    try {
        let author = await Author.findByIdAndUpdate(req.params.id , req.body , {new:true})
        if (author) {
            res.status(200).json({message:"success",author})
        }else{
            res.status(404).json({message:"author not found"})
        }
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}

const deleteAuthor =async (req,res)=>{

    try {
        let author = await Author.findByIdAndDelete(req.params.id)
        if (author) {
            res.status(200).json({message:"author deleted"})
        }else{
            res.status(404).json({message:"author not found"})
        }
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}



export{
    createAuthor,
    getAllAuthors,
    getSingelAuthor,
    updateAuthor,
    deleteAuthor,
}