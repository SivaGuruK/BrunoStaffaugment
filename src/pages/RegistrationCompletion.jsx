import { useEffect, useState } from "react";
import completed from "../assets/Tick + round.png";

function RegistrationCompletion() {
  const [redirectTimer, setRedirectTimer] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (redirectTimer > 1) {
        setRedirectTimer(redirectTimer - 1);
      } else {
        window.location.href = "/";
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [redirectTimer]);

  return (
    <>
      <h1 className="text-4xl font-bold mt-4 ml-6">Brunel</h1>
      <div className="flex flex-col justify-center items-center h-screen">
        <img src={completed} alt="Completed" className="w-14 h-14 mb-2" />
        <p className="covered-by-your-grace text-2xl text-green-500 mt-2 mb-3">
          Success Submitted
        </p>
        <p className="text-5xl mb-2 font-semibold font-manrope">
          Congratulations
        </p>
        <p className="text-xl text-center text-gray-500 mb-8 mt-2">
          Your request has been successfully submitted to us. We
          <br /> will validate your information and reach out to your <br />{" "}
          shortly with updates.
        </p>
        <p className="text-md mt-28 text-gray-500">
          Redirecting you to Homepage in{" "}
          <span className="font-bold text-black">{redirectTimer} Seconds</span>
        </p>
      </div>
    </>
  );
}

export default RegistrationCompletion;
