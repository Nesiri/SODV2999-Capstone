// components/Chatbot/QuickExitButton.tsx
import React from 'react';


const QuickExitButton: React.FC = () => {

  const handleExit = () => {
    window.location.href =
      'https://www.google.com/search?q=cute+animal+videos&sca_esv=04d4ecd65c289c33&rlz=1C1CHBD_enCA1134CA1134&biw=1920&bih=911&sxsrf=ANbL-n7jikP5nnZlX_GBauAluuMRkS3zsQ%3A1776201639282&ei=p6_eacL0EMSj0PEPt4G2mAs';
  };


  return (
    <button
      onClick={handleExit}
      className={`fixed z-[9999] !bg-[#5f2d85] hover:bg-[#7a0088] !text-white text-sm font-medium transition-colors duration-300 flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-md hover:shadow-lg ${
        'bottom-14 left-8'
      }`}
    >
      <svg
        className="w-3.5 h-3.5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      Quick Exit
    </button>
  );
};

export default QuickExitButton;
