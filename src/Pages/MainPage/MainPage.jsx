import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Button from '@mui/material/Button';

import mainImage from '../../assets/image/main-image.png'
import LotItem from "../../Component/Item/LotItem";
import Form from "../../Component/Form/Form";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {useCollectionData} from 'react-firebase-hooks/firestore'
import { useContext } from "react";
import { Context } from "../..";

const MainPage = () => {
    
    const {firestore} = useContext(Context)

    const [priceLot1, loading1] = useCollectionData(
        firestore.collection('1').orderBy('rate').limit(1)
    )

    const [priceLot2, loading2] = useCollectionData(
        firestore.collection('2').orderBy('rate').limit(1)
    )

    const [priceLot3, loading3] = useCollectionData(
        firestore.collection('3').orderBy('rate').limit(1)
    )



    const handleTextClick = (textToCopy) => {
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = textToCopy;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        toast.success('Номер скопійовано', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const handleScrollToForm = () => {
        const formElement = document.querySelector('#lotForm');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    
    return <div style={{
        // background: 'radial-gradient(circle 400px at 50% 50%, #00488c, #00284d)'
    }}>
        <Navbar></Navbar>
        <div className="main-screen" style={{
            height: '1000px',
            backgroundImage: `url(${mainImage})`,
            // backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'relative',
        }}>
            <div className='main-box'>
                <div className="main-title">Україна в серці</div>
                <div className="main-subtitle">Долучайтесь до благодійного аукціону</div>
                <Button sx={{width: "110px", textAlign: "left", color: "#004596", marginTop: "10px", fontWeight: "600"}}>Долучитись</Button>
            </div>
        </div>

        <div style={{ 
            textAlign: 'left', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: "200px  10px 0px"
            }}
        >
            <div style={{
                maxWidth: '1000px',
            }}>
                <div style={{ color: "#004596", fontWeight: "700", fontSize: "32px", paddingBottom: "20px"}}>Майбутнє України в руках кожного з нас</div>
                <div>
                    Запрошуємо Вас взяти участь у благодійному аукціоні, приуроченому до Дня юриста. 
                    Ми об'єднуємося, щоб надати підтримку нашим героям - українській армії, 
                    яка з невимовною мужністю та самопожертвою захищає незалежність та безпеку нашої країни.
                </div>
                <div style={{padding: "10px 0px"}}><hr></hr></div>
                <div>
                    На аукціоні будуть представлені цінні лоти, а всі зібрані кошти будуть передані нашим захисникам. 
                    Долучайтеся до благородної справи та станьте тими хто захищає виття наших військовослужбовців.
                </div>
                <div style={{padding: "10px 0px"}}><hr></hr></div>
                <div>
                    При бажанні ви можете також відправити пожертву на рахунок 
                    <div onClick={() => handleTextClick('5375 4112 0942 1853')} style={{ width:"fit-content", padding: "10px 0px", color: "red", cursor: "pointer"}}>5375 4112 0942 1853</div>
                    Кожен ваш внесок, це маленький крок до нашої перемоги
                </div>
            </div>
        </div>


        <div className="container"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                // paddingTop: '200px',
            }}
        >
            <div className="item-box"
                style={{
                    maxWidth: '1440px'
                }}
            >
                {
                loading1 ? <></> : loading2 ? <></> : loading3 ? <></> : <>
                <LotItem
                    title="Уламок шахеда"
                    description="Цей уламок іранського дрону камікадзе"
                    image="1"
                    startPrice="5650"
                    curentPrice={priceLot1[0]?.rate ?? "Бутьте першими " }
                    step=""
                    lotID=""
                    handleScrollToForm = {handleScrollToForm}
                ></LotItem>
                <LotItem
                    title="Разовий пайок вмс США"
                    description="Один з раціонів харчування українських елітних спецпідрозділів"
                    image="2"
                    startPrice="1100"
                    curentPrice={priceLot2[0]?.rate ?? "Бутьте першими " }
                    step=""
                    lotID=""
                    handleScrollToForm = {handleScrollToForm}
                ></LotItem>
                <LotItem
                    title="Кейс від 40-мм мін"
                    description="Цей уламок привезений з запорізького напрямку"
                    image="3"
                    startPrice="11300"
                    curentPrice={priceLot3[0]?.rate ?? "Бутьте першими " }
                    step=""
                    lotID=""
                    handleScrollToForm = {handleScrollToForm}
                ></LotItem>
                </>
                }

            </div>
        </div>

        <div style={{
            fontSize: "32px",
            fontWeight: "700",
            padding: "100px 0px",
            color: "#004596"
        }}>
            Зробіть свій внесок в розвиток України
        </div>

        <div id="lotForm"></div>
        {
            loading1 ? <></> : loading2 ? <></> : loading3 ? <></> :
            <Form 
                price1={priceLot1[0]?.rate ?? "5650"} 
                price2={priceLot2[0]?.rate ?? "1100"} 
                price3={priceLot3[0]?.rate ?? "11300"} 
            ></Form>
        }


        <div className="footer">
            © 2023 tehza.antonina@student.uzhnu.edu.ua
        </div>
    </div>
}


export default MainPage;