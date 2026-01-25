import Signin1 from "../Components/UserComponent/Registation";
import Image from "next/image";

function page() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-2xl rounded-3xl overflow-hidden min-h-[600px]">
        <div className="hidden md:flex flex-col justify-center items-center p-12 w-1/2  text-white relative">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <Image
              src="/image/illustration.png"
              width={300}
              height={300}
              alt="illustrations"
              className="drop-shadow-2xl  mb-8 transform hover:scale-105 transition-transform duration-500"
            />

            <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
              Join Us Today!
            </h1>
            <p className="text-indigo-100 text-lg max-w-sm leading-relaxed opacity-90">
              Create your account to unlock exclusive features and start your
              journey with us.
            </p>

            <div className="mt-8 h-1.5 w-16 shadow-xl shadow-indigo-500/50 bg-white rounded-full"></div>
          </div>

          <div className="absolute bottom-0 right-0 w-32 h-32 bg-black/10 rounded-tl-full"></div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="md:hidden mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="text-gray-500 mt-2">Join our community today</p>
          </div>

          <div className="w-full max-w-md mx-auto">
            <Signin1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
