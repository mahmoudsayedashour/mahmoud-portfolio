import Image from "next/image";
import { profile } from "@/data/profile";

export function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[290px] sm:max-w-[330px] lg:ml-auto lg:mr-0 lg:max-w-[370px]">
      {/* Subtle cyan radial glow behind the frame */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.2),rgba(59,130,246,0.08)_50%,transparent_72%)] blur-2xl"
        aria-hidden="true"
      />

      {/* Refined animated gradient border */}
      <div className="group relative rounded-[28px] p-[1.5px] shadow-[0_24px_70px_-24px_rgba(34,211,238,0.38)]">
        <div
          className="portrait-ring pointer-events-none absolute inset-0 rounded-[28px]"
          aria-hidden="true"
        />

        {/* Dark navy portrait frame */}
        <div className="relative overflow-hidden rounded-[26.5px] bg-[radial-gradient(circle_at_50%_20%,#112654_0%,#081228_65%,#050914_100%)]">
          {/* Subtle corner dashboard telemetry accents (purely decorative) */}
          <span
            className="pointer-events-none absolute left-3.5 top-3.5 z-10 h-3 w-3 rounded-tl border-l border-t border-cyan-300/50"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute right-3.5 top-3.5 z-10 h-3 w-3 rounded-tr border-r border-t border-cyan-300/50"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute bottom-3.5 left-3.5 z-10 h-3 w-3 rounded-bl border-b border-l border-cyan-300/40"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute bottom-3.5 right-3.5 z-10 h-3 w-3 rounded-br border-b border-r border-cyan-300/40"
            aria-hidden="true"
          />

          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/mahmoud-portrait.jpg"
              alt={`Portrait of ${profile.name}, Data Analyst and Business Intelligence Developer`}
              fill
              priority
              sizes="(min-width: 1024px) 370px, (min-width: 640px) 330px, 290px"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050914]/75 via-[#050914]/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
