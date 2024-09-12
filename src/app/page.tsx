import { NavbarT5 } from "components/NavbarT5";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#9050e9] to-[#7cb2e4] text-white">
      we are using t3 app template
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Navbar <span className="text-[hsl(280,100%,70%)]">T5</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 md:gap-8">
          <div
            id="step1"
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          >
            <h3 className="text-2xl font-bold">First Step →</h3>
            <div className="text-lg">Just the basics -</div>
          </div>
          <div
            id="step2"
            className="mt-[300px] flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          >
            <h3 className="text-2xl font-bold">Second Step →</h3>
            <div className="text-lg">Just the basics -</div>
          </div>
          <div
            id="step3"
            className="mt-[300px] flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          >
            <h3 className="text-2xl font-bold">Third Step →</h3>
            <div className="text-lg">Just the basics -</div>
          </div>
          <div
            id="step4"
            className="mt-[300px] flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          >
            <h3 className="text-2xl font-bold">Fourth Step →</h3>
            <div className="text-lg">Just the basics -</div>
          </div>
          <div
            id="step5"
            className="mt-[300px] flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          >
            <h3 className="text-2xl font-bold">Fifth Step →</h3>
            <div className="text-lg">Just the basics -</div>
          </div>
          <div
            id="step6"
            className="mt-[300px] flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          >
            <h3 className="text-2xl font-bold">Sixth Step →</h3>
            <div className="text-lg">Just the basics -</div>
          </div>
        </div>
      </div>
      <NavbarT5 />
    </main>
  );
}
