import {React, useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import pollyTitle from '../../assets/pollyTitle.png';
import pollyCard from '../../assets/pollyCard.png';
import { TextSection } from '../../components';

const Proof = () => {
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
        <div ref={ref} className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 pt-12">
                <div className="flex items-start justify-center md:justify-start px-12 pb-20">
                    <div className="relative">
                        <img src={pollyCard} alt="PROOF Collective membership card" className="rotate-[-16deg] relative" />
                        <div style="position:absolute;top:50%;left:50%;z-index:-1;transform:translate(-50%, -50%);width:40%;aspect-ratio:1 / 1;background:black;filter:drop-shadow(0 0 80px rgba(117, 0, 208, 1))"></div>
                        <img src={pollyCard} alt="" aria-hidden="true" className="absolute -left-10 -z-1" />
                    </div>
                </div>
                <div className="space-y-8 md:space-y-12 pb-24 md:pb-36 lg:pb-48 text-center md:text-left">
                    <div className="space-y-4">
                        <div className="text-white text-4xl font-poppins">Proof Collective NFT</div>
                        <div className="leading-relaxed">To join, one must hold the PROOF Collective NFT. Membership includes access to our private Discord, early access to the PROOF podcast, in-person events, and other collaborations created exclusively for PROOF Collective members.</div>
                    </div>
                    <a className="inline-flex py-3 px-6 gap-3 items-center rounded-full font-poppins uppercase text-sm leading-none tracking-wider text-black bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400" target="_blank" rel="noopener noreferrer" href="https://opensea.io/collection/proof-collective">
                        <span className="text-2xl">
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.36 0 0 5.36 0 12s5.36 12 12 12 12-5.36 12-12S18.64 0 12 0ZM5.92 12.4l.053-.08 3.12-4.88c.054-.08.16-.053.187.027.533 1.173.96 2.613.773 3.52-.08.373-.346.88-.613 1.333-.027.08-.08.133-.107.187-.026.026-.053.053-.08.053h-3.2c-.133 0-.186-.08-.133-.16Zm13.92 1.68c0 .053-.027.08-.053.107-.24.106-1.067.48-1.414.96-.88 1.226-1.546 2.96-3.04 2.96H9.04c-2.213 0-4-1.814-4-4.027V14c0-.053.053-.107.107-.107H8.64c.08 0 .107.054.107.134-.027.24.026.453.133.666.213.427.64.694 1.093.694h1.734v-1.36H10c-.08 0-.133-.107-.08-.16.027-.027.027-.054.053-.08.16-.24.4-.587.614-.987.16-.267.32-.56.426-.853.027-.054.054-.107.054-.16.026-.107.08-.187.08-.267.026-.08.053-.16.053-.213.053-.24.08-.507.08-.774 0-.106 0-.213-.027-.32 0-.106-.026-.24-.026-.346 0-.107-.027-.214-.054-.32a3.096 3.096 0 0 0-.106-.48l-.027-.054-.08-.32a20.218 20.218 0 0 0-.32-.96c-.053-.133-.08-.24-.133-.346-.08-.187-.16-.347-.214-.48a.43.43 0 0 0-.106-.187c-.027-.08-.08-.133-.107-.213l-.08-.16-.133-.454c-.027-.053.026-.106.08-.106l1.306.346.187.054.187.053.08.027v-.774c0-.373.293-.693.666-.693.187 0 .347.08.48.213a.642.642 0 0 1 .187.48v1.174l.133.026s.027 0 .027.027c.027.027.08.053.16.107.053.026.107.08.16.133.133.107.267.24.453.373.054.027.08.08.134.107.213.187.453.427.693.693.053.08.133.16.187.214.053.08.133.16.186.24l.24.32c.027.053.08.106.107.16.107.133.187.293.267.426.026.08.08.134.106.214.08.186.16.4.214.586.026.054.026.08.026.134a.453.453 0 0 1 .027.186c.027.214 0 .4-.027.614-.026.08-.053.16-.08.266-.026.08-.053.16-.106.267-.08.16-.16.347-.267.507-.027.053-.08.133-.107.186-.053.054-.08.134-.133.187-.053.08-.107.16-.16.213-.053.08-.107.134-.16.214a2.41 2.41 0 0 1-.24.266l-.16.16-.16.16c-.08.08-.16.16-.213.187l-.134.133c-.026.027-.053.027-.08.027h-1.066v1.36H14.4c.293 0 .587-.107.8-.293.08-.08.427-.374.827-.8.026-.027.026-.027.053-.027l3.653-1.067c.08-.026.134.027.134.107v.8h-.027Z" fill="currentColor">
                                </path>
                            </svg>
                        </span>
                        View on OpenSea
                    </a>
                </div>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="space-y-4 max-w-prose mx-auto text-center">
                    <div className="text-white text-4xl font-poppins">Collaborations</div>
                    <div className="leading-relaxed">Past and upcoming project collaborations available exclusively to the PROOF Collective passholders community. More revealed in time.</div>
                </div>
                <div className="py-24 md:py-48 space-y-24 md:space-y-48">
                    <div className="grid md:grid-cols-2 gap-y-8 items-center">
                        <div className="-ml-24 -mr-24 -my-32 md:-my-48 lg:-ml-36 xl:-ml-48 md:mr-0">
                            <img src={pollyCard} alt="Grails: Choose Wisely" />
                        </div>
                        <div className="space-y-6">
                            <div className="uppercase font-bold text-sm tracking-widest">Original Collection</div>
                            <div className="space-y-4">
                                <div className="text-white text-4xl font-poppins">Grails: Choose Wisely</div>
                                <div className="leading-relaxed text-indigo-200">20 artists. 20 unique pieces of art. Artist names revealed only after the mint. Grails is an exclusive mint only available to PROOF Collective passholders. Each piece is a unique work of art made for the Grails drop in collaboration with some of the top artists in the space</div>
                            </div>
                            <div>
                                <a className="flex gap-3 group items-center font-poppins uppercase text-sm tracking-wider text-purple-500 hover:text-purple-300 transition" href="/grails">Learn more <span className="transition duration-500 group-hover:translate-x-0.5"><svg width="9" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 6 6-6 6" stroke="currentColor" stroke-width="2"></path></svg></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-y-8 items-center">
                        <div className="md:mr-20 lg:mr-36 lg:-ml-8 xl:-ml-20">
                            <img src={pollyCard} width="392" height="392" alt="Emotes by Heart You" />
                            </div>
                            <div className="space-y-6">
                            <div className="uppercase font-bold text-sm tracking-widest">Artist Collaboration</div>
                            <div className="space-y-4">
                                <div className="text-white text-4xl font-poppins">Emotes by Heart You</div>
                                <div className="leading-relaxed text-indigo-200">Emotes are the first Proof + Artist PFP collaboration project featuring 1433 generated NFTs. Emotes was an exclusive drop for Proof and Heart You holders. Heart You is a project of self understanding, love and acceptance of the whole self, including our shadow self. “Emotes find their owners” Heart You says about these NFTs - encouraging the owner to explore the embedded messages and symbolism of the&nbsp;work.</div>
                            </div>
                            <div>
                                <a target="_blank" rel="noopener noreferrer" className="flex gap-3 group items-center font-poppins uppercase text-sm tracking-wider text-purple-500 hover:text-purple-300 transition duration-300" href="https://opensea.io/collection/emotes-by-heart-you">View collection on OpenSea <span className="transition duration-300 group-hover:translate-x-0.5"><svg width="9" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 6 6-6 6" stroke="currentColor" stroke-width="2"></path></svg></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-prose mx-auto text-center sm:mt-8 md:mt-16"><div className="space-y-4">
                <div className="text-white text-4xl font-poppins">Collective Intelligence</div>
                <div className="leading-relaxed">Our members were early collectors of some of the most sought-after NFT projects. We believe in group bottoms-up-driven research. A collective working together is stronger than any single member.</div>
            </div>
            <div className="grid sm:grid-cols-2 -mb-12">
                <div className="py-8 sm:py-14 bg-center bg-no-repeat bg-contain" style="background-image:url('/nfts1.svg')">
                    <div className="text-6xl font-extralight text-white leading-normal">1,000</div>
                    <div className="text-xl">Membership NFTs</div>
                </div>
                <div className="py-8 sm:py-14 bg-center bg-no-repeat bg-contain" style="background-image:url('/nfts2.svg')">
                    <div className="text-6xl font-extralight text-white leading-normal">223.804</div>
                    <div className="text-xl">Member Owned NFTs</div>
                </div>
            </div>
        </div>
        <div className="px-8 grid sm:grid-cols-2 md:grid-cols-3 gap-x-24 sm:gap-y-12 py-16 md:gap-y-24 md:py-24 lg:gap-x-32 lg:gap-y-32 lg:py-32">
            <div className="py-6 bg-contain bg-no-repeat bg-right" style="background-image:url(&quot;/bg-accent-cryptopunks.png&quot;)">
                <div className="text-5xl font-extralight leading-normal text-red-200">306</div>
                <div className="text-xl text-white font-medium pb-4 border-b border-indigo-400 border-opacity-40">CryptoPunks</div>
            </div>
            <div className="py-6 bg-contain bg-no-repeat bg-right" style="background-image:url(&quot;/bg-accent-bored-apes.png&quot;)">
                <div className="text-5xl font-extralight leading-normal text-purple-300">370</div>
                <div className="text-xl text-white font-medium pb-4 border-b border-indigo-400 border-opacity-40">Bored Apes</div>
            </div>
            <div className="py-6 bg-contain bg-no-repeat bg-right" style="background-image:url(&quot;/bg-accent-meebits.png&quot;)">
                <div className="text-5xl font-extralight leading-normal text-blue-300">766</div>
                <div className="text-xl text-white font-medium pb-4 border-b border-indigo-400 border-opacity-40">Meebits</div>
            </div>
            <div className="py-6 bg-contain bg-no-repeat bg-right" style="background-image:url(&quot;/bg-accent-art-blocks.png&quot;)">
                <div className="text-5xl font-extralight leading-normal text-red-200">5188</div>
                <div className="text-xl text-white font-medium pb-4 border-b border-indigo-400 border-opacity-40">Art Blocks</div>
            </div>
            <div className="py-6 bg-contain bg-no-repeat bg-right" style="background-image:url(&quot;/bg-accent-superrare.png&quot;)">
                <div className="text-5xl font-extralight leading-normal text-purple-300">590</div>
                <div className="text-xl text-white font-medium pb-4 border-b border-indigo-400 border-opacity-40">SuperRare 1:1 NFTs</div>
            </div>
            <div className="py-6 bg-contain bg-no-repeat bg-right" style="background-image:url(&quot;/bg-accent-metaverse.png&quot;)">
                <div className="text-5xl font-extralight leading-normal text-blue-300">815</div>
                <div className="text-xl text-white font-medium pb-4 border-b border-indigo-400 border-opacity-40">Metaverse</div>
            </div>
        </div>
        <div className="bg-slate-900 bg-opacity-80 rounded-lg px-8 py-6 flex flex-wrap md:flex-nowrap gap-x-10 gap-y-6 items-center justify-center">
            <img src={pollyCard} alt="chat icon" className="my-4 md:m-0 w-24 md:w-20 shrink-0" />
            <div className="grow space-y-3">
                <div className="text-white text-2xl font-poppins">Membership Entrance</div>
                <div className="leading-relaxed max-w-prose">Already hold the PROOF Collective NFT? Authenticate your NFT, and jump into the&nbsp;conversation!</div>
            </div>
            <div className="shrink-0">
                <a className="inline-flex py-4 px-6 gap-3 items-center rounded-full font-poppins uppercase text-sm leading-none tracking-wider text-white bg-indigo-500 hover:bg-indigo-600" href="https://www.ownerportal.xyz/proof/">Member Access</a>
            </div>
        </div>
        <div className="py-12 flex flex-wrap gap-x-8 gap-y-4 items-center justify-between text-sm text-indigo-300 text-opacity-60">
            <div>©2022 Modern Fi LLC</div>
            <div className="flex gap-8 items-center">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Use</a>
            </div>
        </div>
    </div>
    );
  };
  
export default Proof;