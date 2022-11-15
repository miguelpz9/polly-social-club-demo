import {React, useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import pollyTitle from '../../assets/pollyTitle.png';
import pollyCard from '../../assets/pollyCard.png';
import { TextSection } from '../../components';
import P1R from '../../assets/PHASE1-WHITE.png';

const Team = () => {
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
        <div ref={ref} className="w-full justify-start" id="team">
            <div className="text-tiffany flex flex-col bg-dark-bg font-title p-4 pb-0 md:text-3xl w-full text-5xl">
              <h3 className="font-title glowing-text justify-center pb-4 mx-auto md:text-3xl text-6xl">TEAM</h3>
            </div>
            <div className="py-6 mx-auto text-center md:border-0 md:mx-6 text-white grid md:grid-cols-1 md:grid-rows-3 md:space-y-4 grid-cols-3 justify-center bg-black border-4 rounded-3xl border-tiffany align-middle self-center">
              <div className="self-center mx-auto w-2/3 md:w-[75%]">
                <img src={P1R} className="mx-auto border-2 border-tiffany rounded-xl w-full mb-4"/>
                <h5 className="text-4xl md:text-xl font-title">Team #1</h5>
                <p className="text-xl md:text-lg font-text">Co-founder</p>
              </div>
              <div className="self-center mx-auto w-2/3 md:w-[75%]">
                <img src={P1R} className="mx-auto border-2 border-tiffany rounded-xl w-full mb-4"/>
                <h5 className="text-4xl md:text-xl font-title">Team #2</h5>
                <p className="text-xl md:text-lg font-text">Co-founder</p>
              </div>
              <div className="self-center mx-auto w-2/3 md:w-[75%]">
                <img src={P1R} className="mx-auto border-2 border-tiffany rounded-xl w-full mb-4"/>
                <h5 className="text-4xl md:text-xl font-title">Team #3</h5>
                <p className="text-xl md:text-lg font-text">Co-founder</p>
              </div>
            </div> 
        </div>
    );
  };
  
export default Team;