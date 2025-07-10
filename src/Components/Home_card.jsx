import { useState } from 'react'
import { toast, Bounce } from "react-toastify"
import {useDispatch,useSelector } from "react-redux"
import {add_item , remove_item} from "../redux/Slice/button_name.js"
import { add_item_cart, remove_item_cart } from "../redux/Slice/Cart_list.js"
import { increment,decrement } from "../redux/Slice/Count_items.js"
import { increment_p,decrement_p } from "../redux/Slice/Total_price.js"

const Home_card = (props) => {
    const [title,set_title] = useState(props.title.slice(0,20)+ "...")
    const [para, set_para] = useState(props.description.slice(0, 80)+ "...")
    let button_name = useSelector((state) => state.button.value)
    let cart_list = useSelector((state) => state.cart.cart_list)
    const dispatch = useDispatch()
    
    const handleAdd = (id) => {
        if (button_name[id] === "Add Item") {
            dispatch(remove_item(id))
            dispatch(increment_p(props.price))
            dispatch(increment())
            dispatch(add_item_cart({name: props.title , description: props.description , image:props.image , price: props.price}))
            toast.success('Item added', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            dispatch(decrement())
            dispatch(decrement_p(props.price))
            dispatch(add_item(id))
            dispatch(remove_item_cart({name: props.title , description: props.description , image:props.image , price: props.price}))
            toast.error('Item discarded', {
                position: "top-center",
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                autoClose: 1000,
            });
        }
        console.log(button_name)
        console.log(cart_list)
    }

  return (
      <div key={props.keyid} className="flex bg-[#ecebeb] flex-col justify-center items-center w-[25rem] shadow-xl/50 m-[1.5rem] shadow-black p-[1.5rem] rounded-2xl hover:scale-110 hover:bg-white duration-220">
          <h1 onClick = {() => {title == props.title ? set_title(props.title.slice(0,20)+ "...") : set_title(props.title)}} className="font-bold text-[3rem]">{title}</h1>
          <p onClick={ () => {para == props.description ? set_para(props.description.slice(0,80)+ "...") : set_para(props.description)}}  className="font-extralight">{para }</p>
          <img className="mt-[1rem] mb-[1rem] h-[10rem]" src={props.image} />
          <div className="w-[100%] flex flex-row justify-between items-center">
              <p className="font-bold text-green-500 text-[1.5rem]">${props.price }</p>
              <button onClick={() => handleAdd(props.keyid)} className="border-2 border-black rounded-2xl p-[0.5rem]">{button_name[props.keyid]}</button>
              
          </div>
    </div>
  )
}

export default Home_card