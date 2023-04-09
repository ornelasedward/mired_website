export default function Header() {
  return (
    <section className="py-12 overflow-hidden sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-7xl grid-cols-1 mx-auto gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          <div className="relative flex flex-col justify-between max-w-7xl lg:py-12 lg:max-w-none">
            <div className="mt-6 lg:mt-0">
              <h2 className="text-3xl font-normal text-black sm:text-4xl lg:text-5xl xl:text-6xl">
                Transform Your Website into a Conversion Machine with Our Expert
                Web Design, Development, and CRO Strategies - Backed by Our
                Results Guarantee!
              </h2>
              <p className="mt-4 text-base font-normal text-black lg:max-w-2xl sm:text-lg sm:mt-6">
                Sign up for a free consultation today and let our experts help
                you create a modern web design that focuses on increasing
                conversions and enhancing user experiences.
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute right-1/4 transform translate-x-4 -translate-y-1/2 top-1/2 bg-gradient-to-br from-[#F7BE08] to-[#55F5A3] w-full h-full blur-2xl opacity-40" />

            <div className="relative overflow-hidden bg-white rounded-xl">
              <div className="p-6 sm:py-8 sm:px-9">
                <p className="text-xl font-normal text-black">
                  Let us know about your business & we will be in contact to
                  help you grow your business.
                </p>

                <form action="#" method="POST" className="mt-8 space-y-4">
                  <div>
                    <label htmlFor="" className="sr-only">
                      {" "}
                      Full name{" "}
                    </label>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="First & Last name"
                        className="block w-full px-5 py-4 text-base text-black placeholder-gray-500 bg-gray-200 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" className="sr-only">
                      {" "}
                      Email address{" "}
                    </label>
                    <div>
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Email address"
                        className="block w-full px-5 py-4 text-base text-black placeholder-gray-500 bg-gray-200 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" className="sr-only">
                      {" "}
                      Phone number{" "}
                    </label>
                    <div>
                      <input
                        type="tel"
                        name=""
                        id=""
                        placeholder="Phone number"
                        className="block w-full px-5 py-4 text-base text-black placeholder-gray-500 bg-gray-200 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="" className="sr-only">
                      {" "}
                      Message{" "}
                    </label>
                    <div>
                      <textarea
                        name=""
                        id=""
                        placeholder="Write your message"
                        rows="4"
                        className="block w-full px-5 py-4 text-base text-black placeholder-gray-500 bg-gray-200 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <div className="relative inline-flex mt-2 group">
                      <div className="absolute transition-all duration-200 rounded-[2rem] -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                      <button
                        type="button"
                        className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-[2rem]"
                        role="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
