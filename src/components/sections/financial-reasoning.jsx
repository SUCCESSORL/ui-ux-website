import Image from "next/image";

const FinancialReasoningSection = () => {
  return (
    <section className="bg-background px-5 py-24 md:px-10 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[40px]">
          <div className="flex flex-col gap-5 text-center lg:flex-1 lg:max-w-[480px] lg:text-left">
            <h3 className="font-display text-[40px] leading-[1.2] text-foreground">
              Powered by the Leading Agronomy Reasoning Model
            </h3>
            <p className="font-body text-[20px] leading-[1.5] text-muted-foreground">
              AI agents trained with guidance from expert agronomists and progressive growers—grounded in real farm data and research.
            </p>
          </div>
          <div className="w-full lg:flex-[1.1] lg:max-w-[790px]">
            <div className="relative aspect-[1580/1074] w-full">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/664c0369-6b1c-41e6-b482-de971c773c68-rogo-ai-clone-vercel-app/assets/images/next-766467-VWrvlR0FlWhLdDBqhNpMf2aSf7w-1.jpeg?"
                alt="Modern farm infrastructure and fields representing advanced agronomy systems"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialReasoningSection;