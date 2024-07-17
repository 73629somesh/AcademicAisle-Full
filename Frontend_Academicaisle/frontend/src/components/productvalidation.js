import { toast } from "react-toastify"
const productvalidation = (values) => {
    let errors = {}
    if (!values.pname) {
        errors.pname = "Product Name is required"
        
    }
    if (!values.price) {
        errors.price = "Price is required"
        
    }
    if (!values.categoryName) {
        errors.categoryName = "Category is required"
        
    }
    if (!values.brand) {
        errors.brand = "Brand is required"
        
    }
    return errors;
}

export default productvalidation;