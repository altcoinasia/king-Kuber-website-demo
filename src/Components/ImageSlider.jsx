import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const ImageSlider = () => {
  const testimonials = [
    {
      name: "रमेश आवडेकर",
      profession: "बिज़नेस मैन",
      quote: "किंग कल्याण ऍप में पैसे मिलने की कोई भी चिंता नहीं है, हर टाइम सही समय पे पैसे मिल रहे है, भरोसे मंद ऍप है.",
    },
    {
      name: "गोपाल छत्रे",
      profession: "किराना व्यापारी",
      quote: "जब से किंग कल्याण के साथ जुड़ा हु तक से मार्किट में अच्छी कमाई हो रही है, सही टाइम पर पैसे भी मिल जाते है.",
    },
    // Add more testimonials as needed
  ];
  return (
    <AwesomeSlider className="awesome-slider">
     <div className="container mx-auto py-12 px-4"> 
      <div className="grid grid-cols-2 gap-4">
        {testimonials.map((testimonial, index) => (
        <div className="bg-white shadow-md rounded-lg p-8" key={index}>
          <h1>{testimonial?.name||'-'}</h1>
          <p>{testimonial?.profession}</p>
          <p>{testimonial?.quote}</p>
        </div>
        ))}
      </div>
    </div>
    </AwesomeSlider>
  );
};

export default ImageSlider;
