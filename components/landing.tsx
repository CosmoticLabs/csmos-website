import Image from "next/image";

export default function Landing() {
  return (
    <div className="max-w-[90rem] mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-3 md:gap-0">
        <div className="flex flex-col text-center md:text-left items-center md:items-start justify-center gap-1">
          <h1 className="text-5xl font-bold [text-wrap:balance]">
            Meet the{" "}
            <span className="bg-gradient-to-b from-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent">
              only Discord bot you need
            </span>
            .
          </h1>
          <p className="text-neutral-500 [text-wrap:pretty]">
            csmos is a multipurpose Discord bot that makes every other Discord
            bot seem useless.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-1 flex-grow">
          <div className="animate-vert-move rounded-full bg-neutral-800">
            <Image
              src="/logo.png"
              alt="csmos logo"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
