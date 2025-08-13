export function DemoSection() {
  return (
    <section className="w-[1440px] mx-auto px-[100px]">
      <div className="flex flex-col lg:flex-row w-full max-w-[1240px] mx-auto p-8 justify-between items-center rounded-2xl bg-[#212121] gap-8">
        {/* Left content */}
        <div className="flex flex-col items-start gap-6 max-w-[477px] flex-shrink-0">
          <h2 className="text-white font-jakarta text-[28px] md:text-[48px] lg:text-[64px] font-bold leading-[36px] md:leading-[56px] lg:leading-[80px]">
            Book Your Free 
            Demo Now!
          </h2>
          <p className="text-[rgba(255,255,255,0.7)] font-jakarta text-base font-normal leading-7 max-w-[422px]">
            Book your free demo today and explore our AI powered cloud contact center.
          </p>
          <button className="flex px-[22px] py-2.5 justify-center items-center gap-2.5 rounded-lg border-[5px] border-[rgba(255,84,31,0.25)] bg-[#FF541F]">
            <span className="text-white font-jakarta text-base font-medium">Book Demo</span>
          </button>
        </div>

        {/* Right image */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/92300b6f390c6a53b8a306163d78a24bea11bfb8?width=700"
          alt="Chat bot illustration"
          className="w-[300px] lg:w-[350px] h-[300px] lg:h-[350px] flex-shrink-0 aspect-square"
        />
      </div>
    </section>
  );
}
