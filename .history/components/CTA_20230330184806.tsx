import Image from "next/image";
import Dashboard from "../images/dashboard.png";

export default function Component() {
  return (
    <div>
      <section className="relative py-12 overflow-hidden sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 border-2 rounded-2xl bg-[#161616]">
          <div className="text-center lg:w-1/2 xl:w-2/5 lg:text-left lg:pr-8 py-8">
            <h2 className="mt-6 text-3xl font-regular text-[#F6F3EC] sm:text-4xl xl:text-5xl font-pj">
              Want data-driven results? Take our quiz!
            </h2>

            <ul className="mt-4 space-y-5 lg:mt-16">
              <li className="flex items-center justify-center text-[#F6F3EC] lg:justify-start">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-3 text-lg font-bold font-pj">
                  {" "}
                  Increase Conversions
                </span>
              </li>

              <li className="flex items-center justify-center text-[#F6F3EC] lg:justify-start">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-3 text-lg font-bold font-pj">
                  {" "}
                  Improve User Experience
                </span>
              </li>

              <li className="flex items-center justify-center text-[#F6F3EC] lg:justify-start">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-3 text-lg font-bold font-pj">
                  {" "}
                  Maximize ROI
                </span>
              </li>
            </ul>

            <div className="flex flex-col items-center mt-4 lg:justify-start sm:justify-center sm:flex-row lg:mt-16 sm:space-x-5">
              <a
                href="#"
                title=""
                className="
                        relative
                        inline-flex
                        items-center
                        justify-center
                        w-48
                        px-8
                        py-3
                        text-base
                        font-bold
                        text-black
                        transition-all
                        duration-200
                        bg-[#F6F3EC]
                        border-2 border-transparent
                        sm:w-auto
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                        font-pj
                        hover:bg-opacity-90
                        rounded-[2rem]
                    "
                role="button"
              >
                Take our quiz
              </a>

              <a
                href="#"
                title=""
                className="
                        inline-flex
                        items-center
                        justify-center
                        w-48
                        px-2
                        py-3
                        mt-5
                        text-base
                        font-bold
                        text-[#F6F3EC]
                        transition-all
                        duration-200
                        border-2 border-transparent
                        sm:w-autojustify-center sm:mt-0
                        rounded-[2rem]
                        font-pj
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                        focus:bg-transparent
                        hover:text-white 
                        focus:text-white
                        hover:border-white
                        focus:border-gray-900
                    "
                role="button"
              >
                Contact us directly
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 translate-x-12 lg:absolute lg:bottom-0 lg:right-0 lg:translate-y-8 lg:translate-x-20">
          <div className="relative">
            <div className="absolute -inset-2">
              <div
                className="w-full h-full mx-auto opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 lg:aspect-none">
                <Image
                  className="object-cover object-left-top w-full h-full lg:max-w-4xl 2xl:max-w-5xl"
                  src={Dashboard}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
