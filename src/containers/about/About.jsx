import {React, useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import pollyTitle from '../../assets/pollyTitle.png';
import pollyCard from '../../assets/pollyCard.png';
import { TextSection } from '../../components';

const About = () => {
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
        <div className="flex flex-col">
          <div ref={ref} className="py-12 pb-0 md:py-0 md:p-0 md:m-0 max-w-[90vw] text-left grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 justify-center align-middle mx-auto self-center mt-[3%]" id="about">
            <div className="p-20 md:py-12 md:px-20 sm:px-10 rotate-12">
              <motion.img animate={animationRight}  src={pollyCard} alt="this is car image" className="self-center w-full shadow-2xl shadow-tiffany mx-auto"/>
            </div>
            <div className="flex flex-col mx-auto my-auto">
              <TextSection text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet, ex vitae placerat cursus, lectus purus varius ipsum, quis viverra nunc nunc et nisi. Integer pretium sodales imperdiet. Nam vel est non quam viverra consectetur a vitae nulla. Morbi vehicula, ex elementum varius sagittis, elit elit ornare felis, non malesuada lectus lacus at dui. " title="POLLY SOCIAL CLUB" />
              <button type="button" className="text-white hover:animate-none hover:text-tiffany font-text bg-tiffany w-1/3 md:w-1/2 md:mx-auto hover:bg-white focus:ring-4 focus:ring-blue-300 rounded-2xl m-4 mr-4 text-2xl h-12 text-center">Buy on OpenSea</button>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 p-0 md:text-center pt-0 self-center pl-4 justify-center align-middle my-auto" id="textSection">
          <div className="flex flex-col my-auto">
            <h4 className="lg:text-4xl md:text-center glowing-text md:text-3xl text-right text-tiffany pb-0 font-title text-6xl">About Us</h4>
            <p className="text-white md:text-center text-lg pt-0 m-auto mt-0 text-right font-text col-span-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis atque ab dolor voluptatum deleniti. Facilis quaerat quos itaque aut excepturi, eveniet nemo voluptates repellat saepe inventore illo sint eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis atque ab dolor voluptatum deleniti. Facilis quaerat quos itaque aut excepturi, eveniet nemo voluptates repellat saepe inventore illo sint eius?</p>
          </div>
          <motion.img animate={animationRight}  src={pollyCard} alt="this is car image" className="self-center w-[80%] mx-auto"/>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 p-0 mb-32 pt-0 self-center pl-4 justify-center align-middle my-auto" id="textSection">
        <motion.img animate={animationRight}  src={pollyCard} alt="this is car image" className="self-center w-[80%] md:row-start-2 mx-auto"/>
          <div className="flex flex-col my-auto">
            <h4 className="lg:text-4xl md:text-3xl md:text-center text-left text-tiffany pb-0 font-title text-5xl">What do we do?</h4>
            <p className="text-white text-lg pt-0 md:text-center m-auto mt-0 text-justify font-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis atque ab dolor voluptatum deleniti. Facilis quaerat quos itaque aut excepturi, eveniet nemo voluptates repellat saepe inventore illo sint eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis atque ab dolor voluptatum deleniti. Facilis quaerat quos itaque aut excepturi, eveniet nemo voluptates repellat saepe inventore illo sint eius?</p>
          </div>
        </div>
      </div>
    );
  };
  
export default About;