import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-white">
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            3 simple steps
          </h2>
          <p className="mt-6 text-lg font-normal text-gray-400">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 bg-black bg-opacity-50 border border-gray-800 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 lg:mt-20 backdrop-blur-lg">
          <div className="">
            <div className="p-6 sm:px-8">
              <p className="text-5xl font-semibold text-gray-600">1</p>
              <p className="mt-12 text-xl font-normal text-white lg:mt-32 xl:mt-52">
                Create a free account. Amet minim mollit non est sit dolor do.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 sm:border-t-0 sm:border-l">
            <div className="p-6 sm:px-8">
              <p className="text-5xl font-semibold text-gray-600">2</p>
              <p className="mt-12 text-xl font-normal text-white lg:mt-32 xl:mt-52">
                Add team member on your project. Amet minim mollit non.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 lg:border-t-0 lg:border-l">
            <div className="p-6 sm:px-8">
              <p className="text-5xl font-semibold text-gray-600">3</p>
              <p className="mt-12 text-xl font-normal text-white lg:mt-32 xl:mt-52">
                Start automating. Amet minim mollit non est sit dolor doros.
              </p>
            </div>
          </div>

          <div className="border-t border-l border-gray-800 lg:border-t-0">
            <div className="p-6 sm:px-8">
              <p className="text-5xl font-semibold text-gray-600">4</p>
              <p className="mt-12 text-xl font-normal text-white lg:mt-32 xl:mt-52">
                Grow business fast. Amet minim mollit non est sit dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
