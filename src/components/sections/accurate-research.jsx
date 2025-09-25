import Image from "next/image";

const AccurateResearch = () => {
  return (
    <section className="bg-[#f5f5f5] py-24 md:py-32 px-5 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="relative w-full lg:w-1/2 aspect-[1580/1074]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/664c0369-6b1c-41e6-b482-de971c773c68-rogo-ai-clone-vercel-app/assets/images/next-333674-SgW8fw8R3fjCVXFB8CId5hi9F4-2.jpeg?"
              alt="Lush green landscape with a winding river, representing diverse data sources for research."
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:max-w-lg">
            <h3 className="font-display text-[36px] text-[#1a1a1a] leading-tight">
              Accurate, Grounded Research Across All Your Data
            </h3>
            <p className="text-lg text-[#666666] leading-[1.6]">
              Rather than provide off-the-shelf tools, we collaborate closely
              with you to build custom models and give you a lasting competitive
              advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccurateResearch;