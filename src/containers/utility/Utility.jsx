import {React, useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import pollyTitle from '../../assets/pollyTitle.png';
import pollyCard from '../../assets/pollyCard.png';
import ReactSlider from "react-slider";
import { TextSection } from '../../components';

const Utility = () => {
    const [alredyAnimated, setAlredyAnimated] = useState();
    const {ref, inView} = useInView();
    const animationRight = useAnimation();
    const animationLeft = useAnimation();
    const [numberNfts, setNumberNfts] = useState(1);
    const [numberMonths, setNumberMonths] = useState(1);
    const [usdcPerNft, setUsdcNfts] = useState(4);
    const [usdcPerMonth, setUsdcMonth] = useState(4);
    const [usdcInTotal, setUsdcTotal] = useState(4);

    useEffect(() => {
      if(inView){
          animationRight.start({
            x:0,
            transition:{
              type: "spring", 
              stiffness: 25, 
              duration: 2 
            },
            initial:{
              x:'100vh'
            }
          })
          animationLeft.start({
            x:0,
            transition:{
              type: "spring", 
              stiffness: 25, 
              duration: 2 
            },
            initial:{
              x:'-100vh'
            }
          })
          setAlredyAnimated(true);
      }
      if(!inView&&!alredyAnimated){
        animationRight.start({
          x:'100vh',
        })
        animationLeft.start({
          x:'-100vh',
        })
      }
      if(!inView&&alredyAnimated){
        animationRight.start({
          x:0,
        })
        animationLeft.start({
          x:0,
        })
      }
    })


    function handleChangeNft(event) {
      setNumberNfts(event.target.value);
      if(event.target.value < 3){
        setUsdcNfts(4);
      }else if(event.target.value < 5 && event.target.value >= 3){
        setUsdcNfts(4.5);
      }else{
        setUsdcNfts(5);
      }
    }

    function handleChangeMonth(event) {
      setNumberMonths(event.target.value);
      if(numberNfts < 3){
        setUsdcNfts(4);
      }else if(numberNfts < 5){
        setUsdcNfts(4.5);
      }else{
        setUsdcNfts(5);
      }
    }

    useEffect(() => {
      let usdcMont = usdcPerNft*numberNfts;
      setUsdcMonth(usdcMont);
      let usdcTotal = usdcMont*numberMonths;
      setUsdcTotal(usdcTotal);
      console.log("NumberNfts:"+ numberNfts);
      console.log("usdcNft:"+ usdcPerNft);
    }, [numberNfts, numberMonths]);

    return (
        <div ref={ref} className="py-12 md:py-0 md:p-0 md:m-0 max-w-[90vw] text-left justify-center align-middle mx-auto self-center mt-[3%]" id="utility">
            <div className="flex flex-col col-span-6 my-auto">
                <h4 className="lg:text-4xl glowing-text md:text-3xl text-center text-tiffany pb-0 font-title text-6xl">UTILITY</h4>
                <p className="text-white text-lg pt-0 m-auto mt-0 text-center font-text col-span-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis atque ab dolor voluptatum deleniti. Facilis quaerat quos itaque aut excepturi, eveniet nemo voluptates repellat saepe inventore illo sint eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis atque ab dolor voluptatum deleniti. Facilis quaerat quos itaque aut excepturi, eveniet nemo voluptates repellat saepe inventore illo sint eius?</p>
            </div>
            <div className="w-full my-12 px-24 md:px-2">
              <h4 className="font-title text-6xl md:text-2xl p-2 text-left border-[1px] border-b-0  border-tiffany bg-tiffany60 rounded-t-3xl text-white">Estimate your rewards</h4>
              <div className="text-white text-left bg-black border-[1px] grid grid-cols-2 grid-rows-[7] border-tiffany rounded-b-3xl">
                <p className="font-title text-5xl md:text-xl ml-4 m-2 text-white col-start-1 row-start-1">USDC PER NFT/MONTH:</p>
                <p className="font-title text-5xl md:text-xl ml-4 m-2 text-white col-start-1 row-start-2">USDC PER MONTH:</p>
                <p className="font-title text-5xl md:text-xl ml-4 m-2 text-white col-start-1 row-start-3">USDC IN TOTAL:</p>
                <p className="font-title text-4xl md:text-xl ml-4 m-2 text-white col-start-1 row-start-4">NUMBER OF NFTs:</p>
                <input type="range" className="mx-auto m-4 col-start-1 row-start-5 w-[95%] col-span-2" min="1" max="50" onChange={handleChangeNft} />
                <p className="font-title text-4xl md:text-xl ml-4 m-2 text-white col-start-1 row-start-6">NUMBER OF MONTHS:</p>
                <input type="range" className="mx-auto m-4 col-start-1 row-start-7 w-[95%] col-span-2" min="1" max="12" onChange={handleChangeMonth} />
                <p className="font-title text-right md:text-xl text-5xl mr-4 m-2 text-tiffany col-start-2 row-start-1">{usdcPerNft + " $"}</p>
                <p className="font-title text-right md:text-xl text-5xl mr-4 m-2 text-tiffany col-start-2 row-start-2">{usdcPerNft*numberNfts + " $"}</p>
                <p className="font-title text-right md:text-xl text-5xl mr-4 m-2 text-tiffany col-start-2 row-start-3">{usdcPerNft*numberNfts*numberMonths + " $"}</p>
                <p className="font-title text-right md:text-xl text-4xl mr-4 m-2 text-tiffany col-start-2 row-start-4">{numberNfts + " POLYCARDS"}</p>
                <p className="font-title text-right md:text-xl text-4xl mr-4 m-2 text-tiffany col-start-2 row-start-6">{numberMonths + " MONTHS"}</p>
              </div>
            </div>
        </div>
    );
  };
  
export default Utility;