import Image from 'next/image';

const EmbedAiSection = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:gap-20">
          <div className="relative w-full max-w-[710px] shrink-0 overflow-hidden rounded-xl aspect-[710/482]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/664c0369-6b1c-41e6-b482-de971c773c68-rogo-ai-clone-vercel-app/assets/images/next-911549-KmNjEBvnwNKdBuTbkE2ehpbUUxk-4.jpeg?"
              alt="Dark nature background with a central graphic element"
              fill
              className="z-0 object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="flex h-[335px] w-[440px] items-center justify-center bg-white p-4">
                <div className="relative h-40 w-40 scale-110">
                  <div className="absolute top-[0.5rem] left-[calc(50%-1.25rem)] h-10 w-10 border border-neutral-300 bg-white"></div>
                  <div className="absolute top-[3.5rem] left-[calc(28%-1.25rem)] h-10 w-10 border border-neutral-300 bg-white"></div>
                  <div className="absolute top-[3.5rem] left-[calc(72%-1.25rem)] h-10 w-10 bg-black"></div>
                  <div className="absolute top-[6.5rem] left-[calc(50%-1.25rem)] h-10 w-10 border border-neutral-300 bg-white"></div>
                  <div className="absolute top-[9.5rem] left-[calc(28%-1.25rem)] h-10 w-10 border border-neutral-300 bg-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-w-md flex-col gap-6 text-center lg:max-w-[429px] lg:text-left">
            <h3 className="font-display text-[40px] leading-tight text-white">
              Embed AI into Your Firm’s DNA
            </h3>
            <p className="font-body text-lg leading-relaxed text-[#999999]">
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

export default EmbedAiSection;