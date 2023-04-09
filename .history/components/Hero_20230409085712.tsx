import Image from "next/image";
import Link from "next/link";
import header from "../images/header.png";
import Logo from "../images/Logo.png";

export default function Hero() {
  return (
    <div className="overflow-x-hidden">
      <header className="py-4 md:py-6" x-data="{expanded: false}">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link
                href="#"
                title=""
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <Image
                  className="w-auto h-9"
                  src={Logo}
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button type="button" className="text-gray-900">
                <span x-show="!expanded" aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>

                <span x-show="expanded" aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-12">
              <Link
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 p-2"
              >
                Home
              </Link>

              <Link
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 p-2"
              >
                About
              </Link>

              <Link
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 p-2"
              >
                Services
              </Link>
              <Link
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 p-2"
              >
                Our work
              </Link>
              <Link
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 p-2"
              >
                FAQ
              </Link>
            </div>

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <Link href="/" title="">
                <button
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-normal leading-7 text-black transition-all duration-200 bg-transparent border-[2px] border-black rounded-[2rem] font-inter cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                  role="button"
                >
                  <h1>Work with us</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-auto h-8 items-center pt-1 pl-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* <nav x-show="expanded" x-collapse>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">
                <Link
                  href="#"
                  title=""
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Features{" "}
                </Link>

                <Link
                  href="#"
                  title=""
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Pricing{" "}
                </Link>

                <Link
                  href="#"
                  title=""
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Automation{" "}
                </Link>

                <Link
                  href="#"
                  title=""
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Customer Login{" "}
                </Link>

                <Link
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </nav> */}
        </div>
      </header>

      <section className="pt-12 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col gap-4">
              <h1 className="mt-5 text-4xl font-light leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                Transform Your Website into a Conversion Machine with Our Expert
                Web Design, Development, and CRO Strategies - Backed by Our
                Results Guarantee!
                <span className="relative inline-flex sm:inline">
                  {/* <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span> */}
                  <span className="relative"> solutions </span>
                </span>
              </h1>
              <p className="px-6 text-lg text-gray-600 font-inter">
                Get the website you&apos;ve always wanted and the conversions{" "}
                you deserve with our
                <br /> full-service agency.
              </p>
            </div>
            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <Link
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-black transition-all duration-200 bg-[#F8D44C] border-2 border-transparent sm:w-auto rounded-[2rem] font-pj hover:bg-gray-600 hover:text-white focus:bg-gray-600 focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Book a consultation
              </Link>

              <Link
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-black transition-all duration-200 border-2 border-black sm:w-auto sm:mt-0 rounded-[2rem] font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                role="button"
              >
                Take our quiz
                <svg
                  className="w-5 h-5 mr-2 pt-1"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-1/4 w-2/3 h-full rounded-full bg-[#55F5A3] opacity-80 blur-3xl filter -z-10" />
        <div className="absolute bottom-1/4 right-0 w-1/4 h-full rounded-full bg-[#F1CB00] opacity-50 blur-3xl filter -z-10" />
        <div className="py-12">
          <div className="">
            <Image
              className="m-auto"
              src={header}
              alt=""
              width={900}
              height={900}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
