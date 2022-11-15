import {React, useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import P1R from '../../assets/PHASE1-WHITE.png';
import P2R from '../../assets/PHASE2-WHITE.png';
import P3R from '../../assets/PHASE3-WHITE.png';
import P4R from '../../assets/PHASE4-WHITE.png';
import P5R from '../../assets/PHASE5-WHITE.png';

const Roadmap = () => {
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
      <div className="flex flex-col items-center blueFlare" id="roadmap">
        <div className="text-tiffany flex flex-col bg-dark-bg font-title p-4 pb-0 md:text-3xl w-full text-5xl">
            <h3 className="font-title glowing-text justify-center mx-auto md:text-3xl text-6xl">Roadmap</h3>
        </div>
        <div ref={ref} className="header-bg w-full rounded-lg py-24 pt-12 p-8 grid grid-cols-21 grid-rows-5">
          <div className="row-span-full md:col-start-3 md:col-span-2 col-start-11 flex mx-auto flex-wrap">
            <div className="m-2 w-[8px] rounded-3xl h-full self-center bg-tiffany" />
          </div>
          <img src={P1R} alt="this is car image" className="col-start-11 md:col-start-3 md:col-span-2 min-w-[2rem] row-start-1 mx-auto w-2/3"/>
          <img src={P2R} alt="this is car image" className="col-start-11 md:col-start-3 md:col-span-2 min-w-[2rem] row-start-2 mx-auto w-2/3"/>
          <img src={P3R} alt="this is car image" className="col-start-11 md:col-start-3 md:col-span-2 min-w-[2rem] row-start-3 mx-auto w-2/3"/>
          <img src={P4R} alt="this is car image" className="col-start-11 md:col-start-3 md:col-span-2 min-w-[2rem] row-start-4 mx-auto w-2/3"/>
          <img src={P5R} alt="this is car image" className="col-start-11 md:col-start-3 md:col-span-2 min-w-[2rem] row-start-5 mx-auto w-2/3"/>
          <motion.div animate={animationRight} className="col-span-8 md:col-start-5 md:col-span-12 col-start-12 row-start-1 p-4 text-left"> 
            <h3 className="text-tiffany text-4xl md:text-2xl font-title">POLLY OBJECTIVE I</h3>
            <p className="text-white text-2xl md:text-lg font-text">Objective #1 <br/> Objective #2<br/> Objective #3</p>
          </motion.div>
          <motion.div animate={animationLeft} className="col-span-8 md:col-start-5 md:col-span-12 col-start-3 p-4 row-start-2 md:text-left text-right"> 
            <h3 className="text-tiffany text-4xl md:text-2xl font-title">POLLY OBJECTIVE II</h3>
            <p className="text-white text-2xl md:text-lg font-text">Objective #1 <br/> Objective #2<br/> Objective #3</p>
          </motion.div>
          <motion.div animate={animationRight} className="col-span-8 md:col-start-5 md:col-span-12 col-start-12 p-4 row-start-3 text-left"> 
          <h3 className="text-tiffany text-4xl md:text-2xl font-title">POLLY OBJECTIVE III</h3>
            <p className="text-white text-2xl md:text-lg font-text">Objective #1 <br/> Objective #2<br/> Objective #3</p>
          </motion.div>
          <motion.div animate={animationLeft} className="col-span-8 md:col-start-5 md:col-span-12 col-start-3 p-4 row-start-4 md:text-left text-right"> 
          <h3 className="text-tiffany text-4xl md:text-2xl font-title">POLLY OBJECTIVE IV</h3>
            <p className="text-white text-2xl md:text-lg font-text">Objective #1 <br/> Objective #2<br/> Objective #3</p>
          </motion.div>
          <motion.div animate={animationRight} className="col-span-8 md:col-start-5 md:col-span-12 col-start-12 p-4 row-start-5 text-left"> 
          <h3 className="text-tiffany text-4xl md:text-2xl font-title">POLLY OBJECTIVE V</h3>
            <p className="text-white text-2xl md:text-lg font-text">Objective #1 <br/> Objective #2<br/> Objective #3</p>
          </motion.div>
        </div>
      </div>
    );
  };
  
export default Roadmap;