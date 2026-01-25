import React from "react";

function HeadingText({
  headingFirst = "Explore",
  headingHighlight = " APIs",
  marginTop = "mt-20",
  textAlign = "center",
}) {
  return (
    <div className={`max-w-7xl mx-auto mb-10  ${marginTop}`}>
      <div className={`flex flex-wrap items-center justify-${textAlign} gap-2`}>
        <h1 className="text-white text-3xl md:text-4xl font-bold">
          {headingFirst}
        </h1>
        <span className="relative inline-block">
          <span className="text-[#7B61FF] text-3xl md:text-4xl font-bold">
            {headingHighlight}
          </span>
          <svg
            className="absolute -bottom-1 left-0 w-full h-1.5"
            viewBox="0 0 55 5"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path
              d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
              stroke="#7C3AED"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default HeadingText;
