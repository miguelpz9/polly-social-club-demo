import React from 'react';

const Faq = () => {
    return (
      <div className="flex flex-col py-14 items-center h-fit" id="faq">
        <div className="text-full-white flex flex-col sticky z-10 top-16 font-title p-4 md:text-3xl w-full text-5xl">
            <h3 className="font-title justify-center glowing-text glow mx-auto md:text-3xl text-6xl">FaQ</h3>
        </div>
        <div className="accordion w-full" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header bg-black font-title text-6xl mb-0" id="headingOne"><button className="accordion-button relative flex items-center first-letter:w-full w-full py-4 px-5 text-2xl text-white text-left bg-tiffany60 border-0 transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Why is POLLY amazing?</button></h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse bg-tiffany30 border-white border show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body font-text text-white text-lg py-4 px-5">
                <strong>This is the first item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header bg-black font-title text-6xl mb-0" id="headingTwo"><button className="accordion-button relative flex items-center first-letter:w-full w-full py-4 px-5 text-2xl text-white text-left bg-tiffany60 border-0 rounded-none collapsed transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Why is POLLY amazing?</button></h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse bg-tiffany30 border-white border"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body font-text text-white text-lg py-4 px-5">
                <strong>This is the first item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header bg-black font-title text-6xl mb-0" id="headingThree"><button className="accordion-button relative flex items-center first-letter:w-full w-full py-4 px-5 text-2xl text-white text-left bg-tiffany60 border-0 rounded-none transition collapsed focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Why is POLLY amazing?</button></h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse bg-tiffany30 border-white border"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body font-text text-white text-lg py-4 px-5">
                <strong>This is the first item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header bg-black font-title text-6xl mb-0" id="headingFour"><button className="accordion-button relative flex items-center first-letter:w-full w-full py-4 px-5 text-2xl text-white text-left bg-tiffany60 border-0 rounded-none transition collapsed focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Why is POLLY amazing?</button></h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse bg-tiffany30 border-white border"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body font-text text-white text-lg py-4 px-5">
                <strong>This is the first item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Faq;