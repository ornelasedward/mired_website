import React from "react";

export default function Services() {
  return (
    <div>
      <div className="absolute transform -translate-x-1/2 translate-y-full bottom-1/2 left-1/2">
        <svg
          className="blur-3xl filter opacity-70"
          style={{ filter: "blur(64px)" }}
          width="643"
          height="408"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M183.151 216.787C86.498 123.868-62.309 137.493 30.03 41.445c92.337-96.049 494.126-6.876 590.779 86.043 96.652 92.919-148.432 154.396-240.769 250.445-92.338 96.048-100.237-68.228-196.889-161.146Z"
            fill="url(#a)"
          />
          <defs>
            <linearGradient
              id="a"
              x1="663.766"
              y1="168.785"
              x2="303.65"
              y2="469.667"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0%"
                style={{ stopColor: "var(--color-cyan-500)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--color-purple-500)" }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-0">
        <Image className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="">
      </div>
    </div>
  );
}
