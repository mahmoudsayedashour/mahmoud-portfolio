import Image from "next/image";
import { profile } from "@/data/profile";

export function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[290px] sm:max-w-[330px] lg:ml-auto lg:mr-0 lg:max-w-[370px]">
      {/* Soft static glow behind the frame */}
      <div
        className="pointer-events-none absolute -inset-5 rounded-full bg-[radial-gradient(circle,var(--portrait-glow),transparent_68%)] blur-2xl"
        aria-hidden="true"
      />

      {/* Refined static gradient border */}
      <div className="group relative rounded-[28px] bg-gradient-to-br from-[var(--portrait-ring)] via-line to-[var(--portrait-ring)] p-[1.5px] shadow-[0_24px_60px_-30px_rgba(12,23,48,0.45)]">
        <div className="relative overflow-hidden rounded-[26.5px] bg-[#081228]">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/mahmoud-portrait.jpg"
              alt={`Portrait of ${profile.name}, Data Analyst and Business Intelligence Developer`}
              fill
              priority
              sizes="(min-width: 1024px) 370px, (min-width: 640px) 330px, 290px"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
