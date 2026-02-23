import React from "react";
import { assets } from "../assets/assets.js";
import { useAppContext } from "../context/AppContext.jsx";

const About = () => {
  const { navigate } = useAppContext();

  return (
    <div className="pt-28 md:pt-32 min-h-screen dark:bg-slate-900">
      {/* Hero */}
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src={assets.bck1}
          alt="About QuickStay"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="uppercase tracking-widest text-sm text-accent font-medium mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl font-playfair">
            About QuickStay
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20 text-gray-600 dark:text-slate-400 space-y-10">
        {/* Student project */}
        <div>
          <h2 className="text-2xl md:text-3xl font-playfair text-gray-800 dark:text-slate-100 mb-4">
            A Student Project
          </h2>
          <p className="leading-relaxed">
            QuickStay is a web application built as a student project. It was
            created purely for educational purposes — to practice building a
            full-stack application using modern technologies such as{" "}
            <span className="text-gray-800 dark:text-slate-200 font-medium">
              React
            </span>
            ,{" "}
            <span className="text-gray-800 dark:text-slate-200 font-medium">
              Node.js
            </span>
            ,{" "}
            <span className="text-gray-800 dark:text-slate-200 font-medium">
              MongoDB
            </span>
            , and{" "}
            <span className="text-gray-800 dark:text-slate-200 font-medium">
              Tailwind CSS
            </span>
            . It is not a commercial product and is not intended for real
            bookings.
          </p>
        </div>

        <hr className="border-gray-200 dark:border-slate-700" />

        {/* Inspiration */}
        <div>
          <h2 className="text-2xl md:text-3xl font-playfair text-gray-800 dark:text-slate-100 mb-4">
            Inspired by GreatStack
          </h2>
          <p className="leading-relaxed">
            While building this project, we drew inspiration from the{" "}
            <a
              href="https://www.youtube.com/@GreatStackDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              GreatStack
            </a>{" "}
            YouTube channel. Their tutorials helped us understand best practices
            in structuring full-stack applications and gave us a solid
            foundation to build upon. We are grateful for the clear and
            practical content they share with the developer community.
          </p>
        </div>

        <hr className="border-gray-200 dark:border-slate-700" />

        {/* Disclaimer */}
        <div className="bg-orange-50 dark:bg-slate-800 rounded-2xl p-6">
          <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
            <span className="text-gray-800 dark:text-slate-200 font-medium">
              Disclaimer:
            </span>{" "}
            All hotel data, images, reviews, and pricing shown on this website
            are fictional and used solely for demonstration purposes. Any
            resemblance to real properties is coincidental.
          </p>
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => {
              navigate("/");
              scrollTo(0, 0);
            }}
            className="px-8 py-3 bg-accent hover:opacity-90 transition-all text-white rounded-full font-medium text-sm cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
