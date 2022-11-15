import React from 'react';
import pollyTitle from '../../assets/pollyTitle.png';
import footerLeft from '../../assets/leftFooter.png';
import footerRight from '../../assets/rightFooter.png';
import socialClubTitle from '../../assets/socialClubSubTitle.png';

const Footer = () => {
    return (
        <div className="grow w-full mt-20 text-center border-t-8 border-tiffany bg-black flex justify-between flex-row">
          <img src={footerLeft} alt="this is car image" className="self-center -mt-64 lg:hidden"/>
          <div className="max-w-2xl space-y-8 justify-center p-10 align-middle mx-auto my-auto">
            <img src={pollyTitle} alt="this is car image" className="lg:p-0 p-0 self-center"/>
            <img src={socialClubTitle} alt="this is car image" className="lg:p-0 p-4 pt-0 self-center"/>
            <p className="text-white font-text text-center text-lg">Contract address: <a className="underline hover:text-tiffany">0x000000000000000000000</a></p>
            <div className="flex flex-col mb-2 mt-6">
              <button type="button" className="text-tiffany hover:text-white font-text bg-white hover:bg-tiffany focus:ring-4 focus:ring-blue-300 rounded-3xl font-medium m-2 h-12 text-lg text-center">Join the club</button>
            </div>
            <p className="text-white p-2 mx-auto font-text">© 2022 Polly social Club. All rights reserved.</p>
          </div>
          <img src={footerRight} alt="this is car image" className="lg:hidden self-end"/>
        </div>
    );
  };
  
  export default Footer;