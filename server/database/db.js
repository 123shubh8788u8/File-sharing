import mongoose from 'mongoose'

const DBconnection =()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/filesharing')
    try{
        console.log('Mongo DB Connected')

    }

    catch(error){
        console.error('Error While Connectiong database',error.message)

    }
}

export default DBconnection