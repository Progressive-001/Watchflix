import { useState } from "react";
import Faq from "./Faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      heading: "What is Netflix?",
      content1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      content2: "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price.",
    },
    {
      heading: "How much does Netflix cost?",
      content1: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,500 to ₦8,500 a month. No extra costs, no contracts.",
    },
    {
      heading: "Where can I watch?",
      content1: "Watch anywhere, anytime. Sign in with your Netflix account on the web or any device that supports the Netflix app.",
      content2: "You can also download shows to watch offline. Take Netflix with you anywhere.",
    },
    {
      heading: "How do I cancel?",
      content1: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online anytime.",
    },
    {
      heading: "What can I watch on Netflix?",
      content1: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, and more. Watch as much as you want, anytime you want.",
    },
    {
      heading: "Is Netflix good for kids?",
      content1: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly content.",
      content2: "Kids profiles come with parental controls that let you restrict content maturity ratings and block specific titles.",
    },
  ];

  return (
    <div className="w-[100%] max-w-[1559px] mx-auto text-white mt-2">
      <h2 className="font-netflix text-headline1 sm:text-headline1 md:text-headline1 lg:text-title2 font-bold mb-3 text-left">
        Frequently Asked Questions
      </h2>

      {faqData.map((item, index) => (
        <Faq
          key={index}
          heading={item.heading}
          content1={item.content1}
          content2={item.content2}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
