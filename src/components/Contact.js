import React from "react";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <SectionHeader
        index="3"
        section="Contact"
        title="Get in Touch, Let's Build Something Great."
        excerpt="I'm always open to new connections and constructive discussions. You
    can reach me using the information below. I can't wait to hear from
    you. Please feel free to contact me to discuss new collaboration
    opportunities, exciting projects, or simply to exchange ideas about
    front-end development."
      />
      <div className="flex gap-20 items-start mb-40">
        <div className="">
          <p className="text-sm opacity-70 mb-2">Local Time</p>
          <p>10:40 PM (GMT +9)</p>
        </div>
        <div className="">
          <p className="text-sm opacity-70 mb-2">Gmail</p>
          <p>m.mostofanobi@gmail.com</p>
        </div>
        <div className="">
          <p className="text-sm opacity-70 mb-2">Mobile</p>
          <p>(+880)-17-01039997</p>
        </div>
      </div>

      {/* <div className="text-7xl tracking-tight mb-10 max-w-4xl">
        Get in Touch, Let's Build Something Great.
      </div>
      <p className="max-w-3xl ml-60 text-lg opacity-50 mb-10">
        I'm always open to new connections and constructive discussions. You can
        reach me using the information below. I can't wait to hear from you.
        Please feel free to contact me to discuss new collaboration
        opportunities, exciting projects, or simply to exchange ideas about
        front-end development.
      </p>
      <div className="flex gap-20 items-start pt-10 border-t border-opacity-10 border-white">
        <div className="">
          <p className="text-sm opacity-30 mb-2">Gmail</p>
          <p>m.mostofanobi@gmail.com</p>
        </div>
        <div className="flex-1">
          <p className="text-sm opacity-30 mb-2">Mobile</p>
          <p>(+880)-17-01039997</p>
        </div>
        <div>
          <p className="text-sm opacity-30 mb-2">Social</p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/" className="relative group inline-block">
              Linkedin
              <span className="absolute w-full bottom-0 left-0 h-1 bg-white scale-x-0 origin-bottom-right transition-all duration-[0.25s] group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
            </Link>
            <p>Github</p>
            <p>Gmail</p>
            <p>Whatsapp</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
