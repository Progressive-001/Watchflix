import { useEffect, useState } from "react";
// import { ArrowUp } from "lucide-react"; 

export default function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // show button after scrolling 300px
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 10, behavior: "smooth" });
  };

  return (
    <>
      {/* Button appears only when showButton is true */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6
            bg-red-600 text-white font-medium
            rounded-full shadow-md
            p-3 sm:p-4
            hover:bg-red-700 transition-all duration-300
            animate-fade-in
        
          "
        >
            Get Started
          {/* <ArrowUp className="w-5 h-5" /> */}
        </button>
      )}
    </>
  );
}
