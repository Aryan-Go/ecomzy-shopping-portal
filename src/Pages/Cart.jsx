import { useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import Card from "../Components/Cart_card.jsx"

const Cart = () => {
  const cart_list = useSelector((state) => state.cart.cart_list)
  const count = useSelector((state) => state.count.value)
  const price = useSelector((state) => state.price.pricer)
  const navigate = useNavigate()
  const card_list = cart_list.map((data_item, index) => {
    console.log(data_item)
    return (
      <Card keyid={index} title={data_item.name} price={data_item.price} description={data_item.description} image={data_item.image} />
    )
  })
  return (
    <>
      {
        cart_list.length == 0 ? (
          <div className="flex flex-col justify-center items-center w-full h-screen">
            <h1 className="font-bold text-[2rem]">Your cart is empty!</h1>
            <button onClick={() => navigate("/")} className="text-white font-bold rounded-lg bg-green-600 p-[1rem] mt-[0.5rem]">SHOP NOW</button>
          </div>
        ) :
          (
            <div className="flex flex-row">
              <div className="flex flex-col">
                {card_list}

              </div>
              <div className="flex flex-col justify-around ml-[5rem] h-screen">
                <div>
                  <p className="text-[3rem] text-green-700">YOUR CART</p>
                  <h1 className="text-[5rem] text-green-700">SUMMARY</h1>
                  <p className="text-[3rem] font-bold">Total Items : {count}</p>
                </div>
                <div>
                  <p className="text-[3rem]">Total Amount : <span className="font-bold">${price }</span></p>
                  <button className="text-white font-bold rounded-lg bg-green-600 p-[1rem] mt-[0.5rem]">Checkout Now</button>
                </div>
              </div>
            </div>
          )
      }
    </>
  )
}

export default Cart