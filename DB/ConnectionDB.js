import mongoose from "mongoose"



const ConnectionDB = async () => {

    return await mongoose.connect(process.env.DataBaseURI)
    .then(()=>console.log("Connected Successfully :)"))
    .catch((err)=>console.log("==>Error From DataBase",err))

}


export default ConnectionDB;