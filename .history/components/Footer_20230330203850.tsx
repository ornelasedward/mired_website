export default function Footer() {
  return (
    <div>
      <footer className="py-12 bg-gray-50 sm:pt-16 lg:pt-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap items-start md:justify-between gap-y-12 gap-x-24 md:gap-x-12">
            <div className="w-full lg:w-64 xl:w-full xl:max-w-xs">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/logo.svg"
                  alt=""
                />
              </a>

              <p className="mt-8 text-base font-normal text-gray-500">
                Clarity gives you the blocks and components you need to create a
                truly professional website.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Company
              </p>

              <ul className="mt-8 space-y-5">
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Features{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Works{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Career{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Help
              </p>

              <ul className="mt-8 space-y-5">
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Customer Support{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Delivery Details{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:max-w-xs">
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Newsletter
              </p>
            </div>
            <form action="#" method="POST" className="mt-5 space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="block w-full px-4 py-4 text-base text-gray-900 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
