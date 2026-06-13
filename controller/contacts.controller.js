import Contact from "../models/contacts.models.js"
export const getContacts=async(req,res)=>{
    try{
        const results=await Contact.find(option)
        const {page=1,limit=3}=req.query
        const option ={
            page:parseInt(page),
            limits:parseInt(limit)

        }
        const results=await Contact.find(option)
        res.json(results)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}