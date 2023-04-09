"use client";
import { useState } from "react";

const FAQ = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);
  const [expanded7, setExpanded7] = useState(false);
  const [expanded8, setExpanded8] = useState(false);
  const [expanded9, setExpanded9] = useState(false);
  const [expanded10, setExpanded10] = useState(false);

  const toggleExpanded1 = () => {
    setExpanded1(!expanded1);
  };

  const toggleExpanded2 = () => {
    setExpanded2(!expanded2);
  };

  const toggleExpanded2 = () => {
    setExpanded2(!expanded2);
  };

  const toggleExpanded2 = () => {
    setExpanded2(!expanded2);
  };

  const toggleExpanded2 = () => {
    setExpanded2(!expanded2);
  };

  const toggleExpanded2 = () => {
    setExpanded2(!expanded2);
  };

  const toggleExpanded2 = () => {
    setExpanded2(!expanded2);
  };

  const toggleExpanded2 = () => {
    setExpanded2(!expanded2);
  };

  const toggleExpanded2 = () => {
    setExpanded2(!expanded2);
  };

  const toggleExpanded2 = () => {
    setExpanded2(!expanded2);
  };
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg mx-auto mt-6 text-base text-gray-600 font-pj">
            Here are some frequently asked questions (FAQs) regarding UX/UI, web
            development, and conversion rate optimization (CRO)
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-8 sm:mt-14">
          <div x-data="{ active: 1 }" className="space-y-4">
            <div className="relative">
              <div className="absolute -inset-1">
                <div
                  className="w-full h-full mx-auto opacity-30 blur-lg filter"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>

              <div
                role="region"
                className="relative overflow-hidden bg-white border border-gray-200 rounded-xl"
              >
                <h3>
                  <button
                    onClick={() => setExpanded1(!expanded1)}
                    className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 font-pj"
                  >
                    <span>
                      {" "}
                      How this UI Kit is different from others in market?{" "}
                    </span>
                    <span aria-hidden="true" className="ml-4">
                      {expanded1 ? (
                        <svg
                          className="w-6 h-6 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  className={`${
                    expanded1 ? "block" : "hidden"
                  } px-6 pb-6 sm:px-8 sm:pb-8`}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>

            <div
              role="region"
              className="relative overflow-hidden bg-white border border-gray-200 rounded-xl"
            >
              <h3>
                <button
                  onClick={() => setExpanded2(!expanded2)}
                  className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 font-pj"
                >
                  <span>
                    {" "}
                    How this UI Kit is different from others in market?{" "}
                  </span>
                  <span aria-hidden="true" className="ml-4">
                    {expanded2 ? (
                      <svg
                        className="w-6 h-6 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              </h3>

              <div
                className={`${
                  expanded2 ? "block" : "hidden"
                } px-6 pb-6 sm:px-8 sm:pb-8`}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
