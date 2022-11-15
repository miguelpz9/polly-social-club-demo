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
        <div ref={ref} className="w-3/4 max-w-2xl mx-auto pt-56 pb-16 md:pt-20 space-y-6 md:space-y-4" id="header">
            <div className="relative">
            <div className="absolute -z-10 inset-0 mx-[-100%] mt-[-25vh] md:mt-[-15vh] md:mb-[-100%] mb-[-80%] bg-no-repeat bg-cover bg-top bg-header" />
                <motion.img animate={animationRight}  src={pollyTitle} alt="this is car image" className="lg:p-0 p-0 self-center"/>
                <motion.img animate={animationRight}  src={socialClubTitle} alt="this is car image" className="lg:p-0 p-4 pt-2 self-center"/>
            </div>
            <p className="text-white font-text text-center pt-0 text-lg p-4" >Lorem, ipsum dolor sit amet consectetur adipisi. Cum ullam quisquam voluptatum tenetur libero porro quidem dolorem quos, est sint nam. Pariatur doloremque voluptas neque odio expedita laborum. Qui, voluptate?</p>
            <button type="button" className="text-tiffany animate-pulse w-full hover:animate-none hover:text-white font-text bg-white hover:bg-tiffany focus:ring-4 focus:ring-blue-300 rounded-2xl text-2xl m-2 h-12 text-center">Join the Club</button>
        </div>
    );
  };
  
export default Header;