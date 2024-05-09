import { useState } from "react";
import pic1 from "../assets/Union.svg"
const Footer = () => {
  const [isOpen, setIsOpen] = useState(Array(5).fill(false));

  const toggleAnswer = (index) => {
    setIsOpen((prevOpen) =>
      prevOpen.map((isOpenValue, i) =>
        i === index ? !isOpenValue : isOpenValue
      )
    );
  };

  return (
    <div className="flex flex-col w-full">
      <div className="bg-slate-100 w-4/5 h-4/5 p-4 rounded-3xl shadow-md flex flex-col ml-36 justify-between">
        <div className="flex flex-col space-y-2">
          <h4 className="text-gray-500 text-xl covered-by-your-grace mt-4 ml-4">
            What’s on your mind
          </h4>
          <h4 className="text-black text-3xl font-semibold font-manrope mt-4 ml-4">
            Ask Questions
          </h4>
        </div>
        <div className="flex items-center">
          <img src={pic1} alt="Image" className="w-1/4 h-1/4 mr-4 mt-4" />
          <div className="flex flex-col space-y-4 mr-1 ml-80 mt-0 mb-4text-right text-black">
            {[
              "Do you offer freelancers?",
              "What’s the guarantee  that I will be satisfied with the hired talent?",
              "Can I hire multiple talents at once?",
              "Why should I not go to an agency directly?",
              "Who can help me pick a right skillset<br/>and duration for me?",
            ].map((question, index) => (
              <div
                key={question}
                className="flex items-center border-b border-gray-200 py-2"
              >
                <button
                  className="text-left focus:outline-none mr-4"
                  onClick={() => toggleAnswer(index)}
                >
                  {question}
                  {isOpen[index] ? (
                    <span className="text-black"> - </span>
                  ) : (
                    <span className="text-black"> + </span>
                  )}
                </button>
                {isOpen[index] && (
                  <p className="text-sm text-gray-400">
                    If unhappy with a project, communicate with the freelancer,
                    allow for revisions, and refer to the agreement. Escalate to
                    platform support if needed, considering mediation. Review
                    policies, seek collaborative solutions for resolution.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-slate-100 w-4/5 h-4/5 p-4 mt-4 ml-36 rounded-3xl shadow-md flex items-center justify-between">
        <span className="text-black">© Talup 2023. All rights reserved</span>
        <div className="flex space-x-2">
          <a href="#" className="text-black underline text-md">
            Terms & Conditions
          </a>
          <a href="#" className="text-black underline text-md">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
