import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#010101] flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24">
        <div className="text-center space-y-8 max-w-2xl">
          <h1 className="text-[#FF541F] font-jakarta text-[88px] font-extrabold leading-normal">
            404
          </h1>
          <h2 className="text-white font-jakarta text-[40px] font-bold leading-normal">
            Page Not Found
          </h2>
          <p className="text-[rgba(255,255,255,0.7)] font-jakarta text-lg leading-7 max-w-md mx-auto">
            The page you're looking for doesn't exist. Let's get you back to exploring our AI-powered solutions.
          </p>
          <Link 
            to="/" 
            className="inline-flex px-[22px] py-2.5 justify-center items-center gap-2.5 rounded-lg border-[5px] border-[rgba(255,84,31,0.25)] bg-[#FF541F] hover:bg-[#e8491c] transition-colors"
          >
            <span className="text-white font-jakarta text-base font-medium">Back to Home</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
