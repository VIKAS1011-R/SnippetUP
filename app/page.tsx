import DataObjectIcon from "@mui/icons-material/DataObject";
import { mainColor } from "@/Colors";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
      <CTASection />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col ">
      <Logo />
      <Buttons />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className={`bg-[#${mainColor}] p-[6px] rounded-md`}>
        <DataObjectIcon sx={{ fontSize: 27, color: "white" }} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className={`font-bold text-[#${mainColor}]`}>Snippet</span>
        <span className="text-slate-600">Up</span>
      </div>
    </div>
  );
}

function Buttons() {
  const {userId} = auth();
  return (
    <>
      <div className="max-sm:w-full">
        {userId ? (
          <Link href="/my-notes">
            <button
              className={`max-sm:w-full bg-[#${mainColor}] p-[8px] px-6 text-sm text-white rounded-md`}
            >
              Access To the App
            </button>
          </Link>
        ) : (
          <div className="flex gap-2 max-sm:mt-8 max-sm:w-full max-sm:flex-col">
            <Link href="/sign-in" >
            <button
              className={`max-sm:w-full bg-[#${mainColor}] p-[8px] px-6 text-sm text-white rounded-md`}
            >
              Sign In
            </button>
            </Link>
            <button
              className={`text-sm border border-[#${mainColor}] text-[#${mainColor}] \ hover:bg-[#${mainColor}] hover:text-white p-[8px] px-6 rounded-md`}
            >
              <Link href="/sign-up">Sign Up</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function CTASection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center text-black">
        Organize Your Code Snippets
        <span className={`text-[#${mainColor}]`}> Efficiently!</span>
      </h2>
      <p className="text-center text-sm w-[450px] max-sm:w-full text-slate-500">
        With our advanced tagging and seach features, you can quickly find the
        snippet you need, right when you need it. Spend less time searching for
        code and more time writing it.
      </p>
      <button
        className="block px-9 py-3 text-sm font-medium text-white transition focus:outline-none"
        type="button"
      >
        {`Let's get started!`}
      </button>
    </div>
  );
}
