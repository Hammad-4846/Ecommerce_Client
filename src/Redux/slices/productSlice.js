import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../Data/productsData";
import Swal from "sweetalert2";

const productSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    products: ProductData,
    carts : localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [
         {
          id: 2,
          labels: "45% OFF",
          category: "fashion",
          // img: img2,
          hover_img: "img",
          title: "T-Shirt For Men",
          price: 72,
          description: `Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.`,
          quantity: 1,
        }
      ],
  },

  reducers: {
    addToCart: (state, action) => {
      let { id } = action.payload;
      console.log("This is Payload", id);

      //check Existance
      let item = state.carts.find((item) => item.id === id);


      if (!item) {
        let arr = state.products.find((item) => item.id === id);
        arr.quantity = 1;
        state.carts.push(arr);
        Swal.fire({
          title: "Success!",
          text: "Successfully added to your Cart",
          icon: "success",
          showConfirmButton: false,
          timer: 2500,
        });

        //Saving Carts To localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.carts));
      } else {
        Swal.fire({
          title: "Failed!",
          text: "This product is already added in your Cart",
          imageUrl: item.img,
          imageWidth: 200,
          imageAlt: item.title,
          showConfirmButton: false,
          timer: 5000,
        });
      }
    },

    //Update Cart
    updateCart: (state, action) => {
      let { val, id } = action.payload;
        state.carts.forEach((item) => {
          if (item.id === id) {
            if (val >= 1) {
              item.quantity = val;
            }
          }
        });
      
      localStorage.setItem("cartItems", JSON.stringify(state.carts));
    },
    // Remove Cart
    removeCart: (state, action) => {
      let { id } = action.payload;
      let arr = state.carts.filter((item) => item.id !== id);
      console.log("Deleted ID", arr);
      state.carts = arr;
      localStorage.setItem("cartItems", JSON.stringify(state.carts));
      if (arr) {
        Swal.fire({
          title: "Success!",
          text: "Successfully Deleted From your Cart",
          icon: "success",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    },
  },
});

export const productsReducer = productSlice.reducer;
export default productsReducer;
