import React from "react";
import Header from "../components/Header";
import Profile from "../assets/Mask group.png";
import Photo1 from "../assets/Frame 1261155509.png";
import Photo2 from "../assets/Frame 1261155429.png";
import Photo3 from "../assets/Frame 1261155512.png";
import Footer from "../components/Footer";

function HomePage() {
  const [selectedSlide, setSelectedSlide] = React.useState(0); 

  const handleSlideChange = (index) => {
    setSelectedSlide(index);
  };

  const content = [
    "Enhance fortune 50<br/>company's insights<br/>teams research<br/>capabilities",
    "Enhance fortune 50<br/>company's insights<br/>teams research<br/>capabilities",
    "Enhance fortune 50<br/>company's insights<br/>teams research<br/>capabilities",
  ];

  return (
    <>
      <Header />
      <div className="text-center">
        <h5 className="covered-by-your-grace text-4xl text-green-500 mt-6 mb-3">
          Success Stories
        </h5>
        <p className="text-4xl font-semibold text-gray-900">
          Every success journey <br /> we’ve encountered.
        </p>
        <div className="flex">
          <div className="relative">
            <img src={Profile} className="w-80 h-80 ml-56 mt-2 rounded-lg" />
            <img
              src={Photo1}
              className="w-52 h-52 rounded-lg object-cover absolute bottom-44 left-24 transform -translate-y-1/5"
            />
            <img
              src={Photo2}
              className="w-56 h-24 rounded-lg object-cover absolute bottom-24 left-36 transform -translate-y-3/12"
            />
            <img
              src={Photo3}
              className="w-60 h-48 rounded-lg object-cover absolute top-1/2 left-96 transform -translate-y-3/12"
            />
          </div>
          <div className="flex flex-col mt-0">
            {content.map((text, index) => (
              <div key={index} className="mb-4">
                <h2
                  className={`text-4xl font-normal font-manrope mt-12 ml-52 ${
                    selectedSlide === index ? "active" : "hidden"
                  }`}
                  dangerouslySetInnerHTML={{ __html: text }}
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    lineHeight: "1",
                  }}
                />
                <div
                  className={`flex justify-right ml-52 mt-10 ${
                    selectedSlide === index ? "" : "hidden"
                  }`}
                >
                  {[0, 1, 2].map((dotIndex) => (
                    <button
                      key={dotIndex}
                      className={`h-4 w-4  rounded-full mx-2 focus:outline-none ${
                        selectedSlide === dotIndex
                          ? "bg-green-600"
                          : "bg-gray-400"
                      } hover:bg-green-900`}
                      onClick={() => handleSlideChange(dotIndex)}
                      aria-label={`Slide ${dotIndex + 1}`}
                    />
                  ))}
                  <button className="w-36 h-12 rounded-full mt-24 -ml-24 bg-black text-center text-md text-white">
                    Explore More &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

