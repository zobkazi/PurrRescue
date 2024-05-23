import React from "react";
import GoogleIcon from "@/components/icons/GoogleIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";

const SocialMediaLogin: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-6">
      <button className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-100">
        <GoogleIcon />
        <span className="ml-2">Continue with Google</span>
      </button>
      <button className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-100">
        <FacebookIcon />
        <span className="ml-2">Continue with Facebook</span>
      </button>
    </div>
  );
};

export default SocialMediaLogin;
