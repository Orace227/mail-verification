import React from "react";
import Title from "../../ui/Title";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { useState, useRef } from "react";
import { Button } from "@mui/material";

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // Use ref to directly access the video element

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="md:h-screen">
      <Title
        title={`Supercharge Your Email`}
        mainKeyword={` Strategy Today!`}
        titleClassName="text-2xl  font-bold sm:text-[40px] sm:leading-[56px]"
        description="Unlock the power of precise email verification with UnwrapEmail. Start protecting your business, enhancing deliverability, and building targeted prospect lists now!"
        descriptionClassName="w-[90%] sm:w-[70%] md:w-[80%] lg:w-[70%] xl:w-[50%] text-2xl font-bold"
        hasBtn
      />

      <div className="relative w-[90%] max-w-6xl max-h-lg flex mx-auto my-8 rounded-2xl border border-gray-600 shadow-2xl">
        {/* Video Container */}
        <div className="relative">
          <video
            ref={videoRef} // Attach the ref to the video element
            className="w-full rounded-2xl"
            controls={isPlaying}
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play Button */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md cursor-pointer"
              onClick={handlePlayVideo}
            >
              <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center">
                <IconPlayerPlayFilled />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
