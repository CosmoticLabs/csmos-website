import Image from "next/image";

export default function Landing() {
  return (
    <div className="max-w-[90rem] mx-auto p-6 min-h-[calc(100vh-var(--nextra-navbar-height))] flex w-full flex-col">
      <div className="flex flex-col md:flex-row gap-4 grow">
        <div className="flex flex-col text-center md:text-left items-center md:items-start justify-center gap-1">
          <h1 className="text-5xl font-bold [text-wrap:balance] tracking-tighter">
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
        <div className="flex flex-col items-center justify-center text-center gap-1 grow">
          <div className="animate-vert-move rounded-full bg-neutral-100 dark:bg-neutral-800">
            <Image
              src="/logo.png"
              alt="csmos logo"
              width={350}
              height={350}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
