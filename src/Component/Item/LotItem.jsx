import React, { useEffect } from "react";
import Button from '@mui/material/Button'
import IMG1 from '../../assets/image/item_1.jpg'
import IMG2 from '../../assets/image/item_2.jpg'
import IMG3 from '../../assets/image/item_3.jpg'
import Product from "./Product";

const LotItem = (props) => {
    

    const {title, description, image, startPrice, step, lotID, 
        handleScrollToForm, curentPrice } = props
    const [IMG, setIMG] = new React.useState(IMG1);

    useEffect(() => {
        if(image == 1) setIMG(IMG1);
        if(image == 2) setIMG(IMG2);
        if(image == 3) setIMG(IMG3);
    }, [])


    

    return (
        <>
            <div className="cart">
                <div className="description-auction-lot">
                    <div className="description-box">
                        <div className="title-cart"> {title} </div>
                        <div className="description"> {description} </div>
                        <div className="auction-form">
                            <div className="start-price"> Стартова ціна: {startPrice}₴ </div>
                            {/* <div className="min-step-price"> Мінімальний крок ставки: {step}₴ </div> */}
                            <div className="curent-max-price"> Остання ціна: {curentPrice}₴ </div>    
                        </div>
                        
                        <Button onClick={() => handleScrollToForm()} sx={{color: "#ccb229", fontSize: "14px", border:"1px solid #ccb229", borderRadius: "10px", padding: "10px 15px"}} color="secondary"> Зробити ставку </Button>
                    </div>
                </div>
                <div className="image-block">
                    <Product key={0} imageUrl={IMG} />
                </div>
            </div>
        </>
    )
}

export default LotItem;