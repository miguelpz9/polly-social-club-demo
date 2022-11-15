import {React, useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import pollyTitle from '../../assets/pollyTitle.png';
import socialClubTitle from '../../assets/socialClubSubTitle.png';
import { About, Utility, Proof } from '../';
import { TextSection } from '../../components';

const Header = () => {
    const [alredyAnimated, setAlredyAnimated] = useState();
    const {ref, inView} = useInView();
    const animationRight = useAnimation();
    const animationLeft = useAnimation();

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

    return (
        <div ref={ref} className="bg-header xl:bg-75 bg-75 bg-top bg-no-repeat h-auto w-full flex flex-col justify-start" id="header">
            <div className="xl:w-[38%] w-[30%] lg:w-1/2 flex flex-col xl:mt-[6%] 2xl:mt-[7%] mt-[8%] justify-center self-center">
                <motion.img animate={animationRight}  src={pollyTitle} alt="this is car image" className="lg:p-0 p-0 mb-2 self-center"/>
                <motion.img animate={animationRight}  src={socialClubTitle} alt="this is car image" className="lg:p-0 mb-4 p-4 pt-2 self-center"/>
                <p className="text-white font-text text-lg mb-4" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ullam quisquam voluptatum tenetur libero porro quidem dolorem quos, est sint nam. Pariatur doloremque voluptas neque odio expedita laborum. Qui, voluptate?</p>
                <button type="button" className="text-tiffany animate-pulse hover:animate-none hover:text-white font-text bg-white hover:bg-tiffany focus:ring-4 focus:ring-blue-300 rounded-2xl text-2xl m-2 h-12 text-center">Join the Club</button>
            </div>
            <About />
        </div>
    );
  };
  
export default Header;