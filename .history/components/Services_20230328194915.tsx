import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-white">
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-10">
          <div className="border-gray-200 bg-[#F5F5F5] mt-8">
            <div className="p-6 sm:px-8">
              <p className="mt-12 text-xl  font-normal text-white lg:mt-32 xl:mt-52">
                Create a free account. Amet minim mollit non est sit dolor do.
              </p>
            </div>
          </div>

          <div className="sm:border-t-0 sm:border-l bg-[#F5F5F5]">
            <div className="p-6 sm:px-8">
              <p className="mt-12 text-xl font-normal text-white lg:mt-32 xl:mt-52">
                Add team member on your project. Amet minim mollit non.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 lg:border-t-0 lg:border-l bg-[#F5F5F5]">
            <div className="p-6 sm:px-8">
              <p className="mt-12 text-xl font-normal text-white lg:mt-32 xl:mt-52">
                Start automating. Amet minim mollit non est sit dolor doros.
              </p>
            </div>
          </div>

          <div className="border-t border-l border-gray-800 lg:border-t-0 bg-[#F5F5F5]">
            <div className="p-6 sm:px-8">
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
