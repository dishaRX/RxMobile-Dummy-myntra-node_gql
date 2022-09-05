import mongoose from "../../infrastructure/config/MongoDatabase";
const Schema = mongoose.Schema

const productSchema = new Schema({
    id: String,
    description: String,
    price: String,
    reviews: [
        {
            rating: Number,
            comment: String,
        }
    ],
})
export = mongoose.model('Product', productSchema);