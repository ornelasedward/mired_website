import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-white">
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-10 py-32">
          <div className="bg-[#F5F5F5]">
            <div className="grid grid-cols-2">
              <div>
                <Image
                  className="m-auto"
                  src={header}
                  alt=""
                  width={900}
                  height={900}
                />
              </div>
              <div className="p-6 sm:px-8 flex flex-col gap-6">
                <h1 className="text-5xl font-normal text-black">
                  Web Design & Development
                </h1>
                <p className="text-md">
                  Our agency specializes in creating high-converting modern
                  website designs that are optimized for user experience. We
                  offer a range of services including UX research, UI designing,
                  web development, and API integrations, as well as ongoing
                  maintenance and support to ensure optimal website performance
                  on all devices.
                </p>
              </div>
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
