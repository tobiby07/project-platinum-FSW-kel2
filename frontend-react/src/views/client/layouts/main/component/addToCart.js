import axiosObject from "../../../../../services/axiosUrl";
import { FiShoppingCart } from "react-icons/fi";
const idUser = localStorage.getItem('id');

const AddToCartButton = ({ productId }) => {
    const addToCart = async () => {
        try {
          await axiosObject.post(`/api/cartItem`, {
            userId: idUser,
            productId: productId, 
            quantity: 1 
          });
          console.log("Product added to cart successfully!");
        } catch (error) {
          console.error("Error adding product to cart:", error);
        }
      };
    
    return(
        <button className="btn btn-danger py-2 px-3" onClick={addToCart}>
              <FiShoppingCart size={24} />
              <span className="px-3">Add to cart</span>
        </button>
    )
}

export default AddToCartButton;
