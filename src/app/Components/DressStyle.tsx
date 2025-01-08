
import Image from "next/image";

const DressStyle = () => {
  return (
    <div className="justify-center items-center mx-4 sm:mx-0">
      <div className=" px-6 sm:px-4 w-full max-w-screen-xl h-auto bg-[#f2f0f1d4] rounded-xl mt-16">
        <h1 className="font-bold text-3xl sm:text-4xl text-center p-6 sm:p-12">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="flex justify-center">
            <Image src={'/images/casual.png'} alt="casual" width={407} height={289} />
          </div>

          <div className="flex justify-center">
            <Image src={'/images/formal.png'} alt="formal" width={689} height={289} />
          </div>

          <div className="flex justify-center">
            <Image src={'/images/party.png'} alt="party" width={689} height={289} />
          </div>

          <div className="flex justify-center">
            <Image src={'/images/gym.png'}alt="gym" width={407} height={289} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle ;