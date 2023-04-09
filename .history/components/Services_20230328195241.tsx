import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-white">
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-10 py-32">
          <div className="bg-[#F5F5F5]">
            <div className="p-6 sm:px-8">
              <h1 className="mt-12 text-xl  font-normal text-black">
                Web Design & Development
              </h1>
            </div>
          </div>

          <div className="bg-[#F5F5F5]">
            <div className="p-6 sm:px-8">
              <p className="mt-12 text-xl font-normal text-white lg:mt-32 xl:mt-52">
                Add team member on your project. Amet minim mollit non.
              </p>
            </div>
          </div>

          <div className="bg-[#F5F5F5]">
            <div className="p-6 sm:px-8">
              <p className="mt-12 text-xl font-normal text-white lg:mt-32 xl:mt-52">
                Start automating. Amet minim mollit non est sit dolor doros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
