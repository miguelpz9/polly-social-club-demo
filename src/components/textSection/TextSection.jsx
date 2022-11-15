import {React, useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import pollyTitle from '../../assets/pollyTitle.png';
import socialClubTitle from '../../assets/socialClubSubTitle.png';

const TextSection = ({text, title}) => {
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
        <div ref={ref} className="flex flex-col p-0 pt-0 self-center pl-4 justify-center align-middle my-auto" id="textSection">
            <h4 className="lg:text-4xl md:text-3xl md:text-center text-tiffany pb-0 font-title text-5xl">{title}</h4>
            <p className="text-white text-lg pt-0 text-justify font-text">{text}</p>
        </div>
    );
  };
  
export default TextSection;