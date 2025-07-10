import React,{useEffect,useState} from 'react'
import Card from "../Components/Home_card.jsx"
import axios from "../utils/Axios_request.jsx"
import { useSelector } from "react-redux"

const Home = () => {
    const [data, set_data] = useState([]);
    useEffect(() => {
        const fetch_data = async () => {
            let response = await axios.get("/products");
            console.log("From the home page")
            set_data(response.data)
        }
        fetch_data()
    } , [])
    const cards = data.map((data_item, index) => {
        return(
            <Card keyid={index} title={data_item.title} price={data_item.price} description={data_item.description} image={data_item.image} bn={button_name[index] } />
        )
    })
    return (
        <div className="flex flex-row flex-wrap w-[100%] jutify-center items-center">
            {cards}
        </div>
  )
}

export default Home