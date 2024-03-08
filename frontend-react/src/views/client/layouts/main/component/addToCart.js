import axiosObject from "../../../../../services/axiosUrl";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const idUser = localStorage.getItem("id");

const AddToCartButton = ({ productId }) => {
  const addToCart = async () => {
    try {
      await axiosObject.post(`/api/cartItem`, {
        userId: idUser,
        productId: productId,
        quantity: 1,
      });
      console.log("Product added to cart successfully!");
      toast.success("Success Memasukkan Keranjang !", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Gagal Memasukkan Keranjang !", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <button className="btn btn-outline-danger text-nowrap my-1 my-sm-0 mx-1 d-flex align-items-center" onClick={addToCart}>
        <FiShoppingCart size={24} />
        <span className="px-1 px-sm-3">Add to cart</span>
      </button>
    </div>
  );
};

export default AddToCartButton;
