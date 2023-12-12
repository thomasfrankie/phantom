"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We're Here to Empower Your Vision"
          paragraph={(<span> <br /> At Phantom Syndicate, our commitment is to offer unparalleled assistance leveraging cutting-edge technology. We specialize in crafting advanced AI-based programs, ensuring that your systems evolve intelligently to meet future demands.
            <br/> <br />
            Our expertise extends to revolutionary blockchain programs, securing your operations with decentralized solutions designed for transparency and trust.
            <br/> <br />
            Furthermore, our proficiency spans across various technology domains including Next.js for dynamic web applications, Tailwind CSS for polished interfaces, PostgreSQL for robust databases, and seamless integration with cloud computing platforms like AWS, Azure, and Google Cloud.</span> )}
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/images/video/shape.svg" alt="shape" className="w-full" />
      </div>
    </section>
  );
};

export default Video;
