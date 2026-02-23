import React from "react";
import { assets } from "../assets/assets.js";
import { useAppContext } from "../context/AppContext.jsx";

const reasons = [
  {
    icon: "🧠",
    title: "Mental Reset",
    description:
      "Stepping away from your daily routine gives your mind the space to recover. Travel reduces stress hormones, lowers anxiety, and helps you return to work with a clearer, sharper mindset.",
  },
  {
    icon: "💤",
    title: "Better Sleep",
    description:
      "Changing your environment resets your internal clock. Waking up to the sound of waves or birds instead of alarms helps regulate your sleep cycle and leaves you feeling genuinely rested.",
  },
  {
    icon: "❤️",
    title: "Improved Wellbeing",
    description:
      "Studies show that people who take regular vacations have lower risks of heart disease, burnout, and depression. Your health is the best investment you can make — protect it with rest.",
  },
  {
    icon: "🌍",
    title: "Broadened Perspective",
    description:
      "Experiencing new cultures, cuisines, and landscapes reshapes how you see the world. Travel makes you more creative, more empathetic, and more open to new ideas at work and in life.",
  },
  {
    icon: "🤝",
    title: "Stronger Relationships",
    description:
      "Shared experiences build deeper bonds. Whether you travel with family, a partner, or friends, vacation memories last a lifetime and strengthen the connections that matter most.",
  },
  {
    icon: "⚡",
    title: "Recharged Productivity",
    description:
      "You cannot pour from an empty cup. Employees who take vacations are proven to be more focused, more motivated, and significantly more productive when they return to their desks.",
  },
];

const stats = [
  { value: "89%", label: "of travellers feel less stressed after a vacation" },
  { value: "3×", label: "more creative after spending time away from work" },
  { value: "77%", label: "report better sleep during and after travel" },
  { value: "50%", label: "lower risk of burnout with regular time off" },
];

const Experience = () => {
  const { navigate } = useAppContext();

  return (
    <div className="pt-28 md:pt-32 dark:bg-slate-900">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={assets.bck1}
          alt="Travel Experience"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-accent font-medium mb-4">
            Why You Deserve a Break
          </p>
          <h1 className="text-4xl md:text-6xl font-playfair leading-tight mb-6">
            The Art of Taking a <span className="text-accent">Real</span>{" "}
            Vacation
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            In a world that celebrates being busy, choosing to rest is a radical
            act of self-care. Discover why travelling is not a luxury — it is a
            necessity.
          </p>
          <button
            onClick={() => {
              navigate("/rooms");
              scrollTo(0, 0);
            }}
            className="mt-10 px-8 py-3.5 bg-accent hover:opacity-90 transition-all text-white rounded-full font-medium text-sm tracking-wide cursor-pointer"
          >
            Find Your Perfect Stay
          </button>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-orange-50 dark:bg-slate-800 py-16 px-6 text-center">
        <p className="text-2xl md:text-3xl font-playfair text-gray-800 dark:text-slate-100 max-w-3xl mx-auto leading-relaxed italic">
          "Almost everything will work again if you unplug it for a few minutes
          — including you."
        </p>
        <p className="mt-4 text-gray-500 dark:text-slate-400 font-medium">
          — Anne Lamott
        </p>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-6 md:px-16 lg:px-24 bg-white dark:bg-slate-900">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-playfair text-accent font-bold">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-500 dark:text-slate-400 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reasons Section */}
      <div className="py-20 px-6 md:px-16 lg:px-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm text-accent font-medium mb-3">
              6 Reasons to Travel
            </p>
            <h2 className="text-3xl md:text-4xl font-playfair text-gray-800 dark:text-slate-100">
              Why Taking Time Off Changes Everything
            </h2>
            <p className="mt-4 text-gray-500 dark:text-slate-400 max-w-xl mx-auto">
              Rest is not the opposite of productivity — it is the foundation of
              it. Here is what happens when you finally give yourself permission
              to escape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.3)] transition-shadow"
              >
                <span className="text-4xl">{reason.icon}</span>
                <h3 className="mt-4 text-xl font-playfair text-gray-800 dark:text-slate-100">
                  {reason.title}
                </h3>
                <p className="mt-3 text-gray-500 dark:text-slate-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="py-20 px-6 md:px-16 lg:px-24 bg-white dark:bg-slate-900 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair text-gray-800 dark:text-slate-100 mb-8">
          You Have Earned This
        </h2>
        <div className="space-y-6 text-gray-500 dark:text-slate-400 text-base leading-relaxed">
          <p>
            Think about the last time you truly switched off. No emails, no
            deadlines, no meetings — just you, a new place, and the freedom to
            breathe. For most people, that moment feels distant. Modern work
            culture has made rest feel like a reward only for the most
            productive, and yet the science tells a completely different story.
          </p>
          <p>
            Burnout costs the global economy over{" "}
            <span className="text-gray-800 dark:text-slate-200 font-medium">
              $322 billion
            </span>{" "}
            each year in lost productivity. The irony is that the solution is
            simple and beautiful: take a break. Go somewhere new. Let your
            senses absorb a different sky, a different language, a different
            rhythm of life.
          </p>
          <p>
            Vacation is not laziness. It is strategy. The world's highest
            performers — athletes, CEOs, artists — all share one habit: they
            protect their rest fiercely. They know that the mind, like any
            muscle, grows stronger with recovery.
          </p>
          <p>
            At QuickStay, we believe that every person deserves a place to land,
            to exhale, and to rediscover what it feels like to be fully present.
            Whether it is a mountain retreat, a coastal escape, or a bustling
            city adventure — your next chapter begins with a single booking.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-24 px-6 text-center">
        <p className="uppercase tracking-widest text-sm text-accent font-medium mb-4">
          Your Journey Starts Here
        </p>
        <h2 className="text-3xl md:text-5xl font-playfair text-white mb-6 max-w-2xl mx-auto leading-tight">
          Stop Waiting for the Perfect Moment
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-10 text-base leading-relaxed">
          The perfect moment to rest is now. Browse our handpicked collection of
          stunning hotels and find the escape you have been putting off for too
          long.
        </p>
        <button
          onClick={() => {
            navigate("/rooms");
            scrollTo(0, 0);
          }}
          className="px-10 py-4 bg-accent hover:opacity-90 transition-all text-white rounded-full font-medium tracking-wide cursor-pointer"
        >
          Explore Hotels
        </button>
      </div>
    </div>
  );
};

export default Experience;
