import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../assets/Badges.png";
import Closeicon from "../assets/Frame 1261155540.png"

function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const validateEmail = (email) => {
    // Regular expression for validating email format
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value && email && validateEmail(email)) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }

    // Check if both name and email are valid to enable submit button
    if (name && validateEmail(e.target.value)) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute top-0 left-0 p-4">
        <span className="text-4xl font-bold font-manrope ml-12">Brunel</span>
      </div>
      <div className="absolute top-0 right-0 p-4 flex items-center justify-center">
        <div>
          <button
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-gray-900"
          >
            <img src={Closeicon} alt="Close" className="w-14 h-14 mr-4" />
          </button>
        </div>
      </div>
      <div className="text-center">
        <h1 className="covered-by-your-grace text-3xl text-green-500 mt-8 mb-3">
          Registration Form
        </h1>
        <h2 className="text-6xl font-semibold w-588 h-134 font-manrope">
          Start your success
          <br />
          Journey here!
        </h2>
        <form className="mt-8">
          <div className="flex justify-center items-center">
            <div className="w-417px h-auto flex flex-col gap-47px">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 h-76 p-4 bg-gray-100 rounded-full border-blue-500"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 h-76 p-4 mt-6 bg-gray-100 rounded-full border-blue-500"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <p className="text-red-500 flex items-center">
                  <img src={Badge} alt="error icon" className="mr-1 h-6" />
                  {emailError}
                </p>
              )}
            </div>
          </div>
          <Link to="/success">
            <button
              className={`w-80 h-76 p-4 gap-10 mt-6 bg-gray-300 rounded-full ${
                submitDisabled && "opacity-50 cursor-not-allowed"
              }`}
              disabled={submitDisabled}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
