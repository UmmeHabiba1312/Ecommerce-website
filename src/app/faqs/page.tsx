import React from "react";

const FaqsPage = () => {
  return (
    <main className="overflow-x-hidden">
      <div className="h-auto max-w-screen-2xl mx-auto w-full mb-[60px] mt-[60px] px-4">
        <h2 className="sm:text-[48px] text-[30px] leading-[56px] flex justify-center text-[#333333]">
          Questions Look Here
        </h2>
        <p className="sm:text-[16px] text-[14px] leading-[24px] mt-8 text-[#4F4F4F] flex justify-center text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>

        <div className="h-auto w-full grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[70px]">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-[#F7F7F7] hover:bg-cyan-500 h-auto w-full rounded-[8px] sm:p-[35px] p-[20px] mx-auto"
              >
                <div className="flex justify-between items-center">
                  <h5 className="text-[18px] leading-[26px] text-[#333333]">
                    What types of chairs do you offer?
                  </h5>
                  <span className="h-[24px] w-[24px] text-center cursor-pointer">
                    +
                  </span>
                </div>
                <p className="text-[16px] leading-[24px] text-[#4F4F4F] mt-[10px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos
                  molestiae ipsa totam quidem?
                </p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default FaqsPage;
