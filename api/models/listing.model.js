import mongoose from "mongoose";


const listingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    regularPrice:{
        type:Number,
        required:true
    },

    discoutPrice:{
        type:Number,
        required:true
    },
bathRooms:{
    type:Number,
    required:true
},
bedRooms:{
    type:Number,
    required:true
},
furnished:{
type:Boolean,
required:true

},
parking:{
    type:Boolean,
    required:true
},
type:{
    type:String,
    required:true
},
offer:{
    type:Boolean,
    required:true
},
imageUrl:{
    type:Array,
    required:true
},
userRef:{
    type:String,
    required:true
}


},{timestamps:true})

const Listing = mongoose.model('Listing',listingSchema);
export default Listing;

