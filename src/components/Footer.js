import React from "react";
import CircularText from "./CircularText";
import { CiFaceSmile } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="flex justify-between items-center pt-20">
      <CircularText text="Thanks for Visiting">
        <CiFaceSmile className="w-10 h-10 opacity-80" />
      </CircularText>
      <p>
        Made with ❤️ by{" "}
        <a href="/" className="text-orange hover:underline">
          Mostofa Nobi{" "}
        </a>
      </p>
    </div>
  );
};

export default Footer;
{/* <div className="flex justify-between items-center pt-20 border-t">
<CircularText text="Thanks for Visiting">
  <CiFaceSmile className="w-10 h-10 opacity-80" />
</CircularText>
<p>
  Made with ❤️ by{" "}
  <a href="/" className="text-orange hover:underline">
    Mostofa Nobi{" "}
  </a>
</p>
</div> */}