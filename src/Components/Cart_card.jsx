import  { useState } from 'react'
import {add_item } from "../redux/Slice/button_name.js"
import { remove_item_cart } from "../redux/Slice/Cart_list.js"
import { decrement } from "../redux/Slice/Count_items.js"
import { decrement_p } from "../redux/Slice/Total_price.js"
import { useSelector, useDispatch } from "react-redux"
import {toast,Bounce} from "react-toastify"

const Cart_card = (props) => {
    const [title,set_title] = useState(props.title)
    const [para, set_para] = useState(props.description.slice(0, 80) + "...")

    const dispatch = useDispatch()

    const handleDelete = (id) => {
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
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-around items-start w-[50rem]">
                    <img className="h-[20rem]" src={props.image} />
                    <div key={props.keyid} className="flex bg-white flex-col justify-start h-[15rem] items-center w-[50%]  m-[1.5rem] p-[1.5rem] rounded-2xl">
                        <h1 onClick={() => { title }} className="font-bold text-[1.5rem] mb-[2rem]">{title}</h1>
                    <p onClick={ () => {para == props.description ? set_para(props.description.slice(0,80)+ "...") : set_para(props.description)}}  className="font-extralight mb-[2rem]">{para }</p>
                    <div className="w-[100%] flex flex-row justify-between items-center">
                        <p className="font-bold text-green-500 text-[1.5rem]"   >${props.price }</p>
                            <div onClick={() => handleDelete(props.keyid)} className="bg-red-300 w-[3rem] h-[3rem] rounded-full flex flex-row justify-center items-center">
                                <img className="h-[1.5rem] w-[1.5rem]" src="/public/dustbin.svg" />
                        </div>
                    </div>
                    </div>
            </div>
            <hr className="bg-[#b8b1b1] h-[0.2rem] w-[50rem] mt-[1rem] mb-[1rem]" />
        </div>
  )
}

export default Cart_card