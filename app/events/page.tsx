import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import React from "react";
import automationbounty from "../assets/automationbounty.png";
import getintocybersecurity from "../assets/getintocybersecurity.png";
import beginnerbountyseries from "../assets/beginnerbountyseries.png";
import informationdisclosure from "../assets/informationdisclosure.png";
import cvehunting from "../assets/cvehunting.png";
import cybercrimeinvseting from "../assets/cybercrimeinvseting.png";
import getstartedwithoscp from "../assets/getstartedwithoscp.png";
import reflectedxss from "../assets/reflectedxss.png";
import web3andbugbounty from "../assets/web3andbugbounty.png";
import FABypassauthentication from "../assets/2FABypassauthentication.png";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bug Bounty Brigade - Events",
  description: "Join the Latest Events in Bug Bounty Brigade",
};
interface EventPosts {
  image: any;
  date: string;
  title: string;
  description: string;
  attendeesCount: string;
}

const events: EventPosts[] = [
  {
    image: FABypassauthentication,
    date: "Sat, Oct 21, 2023, 7:30PM IST",
    title: "2FA Bypass in Authentication",
    description:
      "Join us on October 21st at 7:30 PM as Aditya dives deep into the world of 2FA bypass in authentication. This is your chance to enhance your cybersecurity skills and stay updated on the latest techniques.",
    attendeesCount: "Aditya Shende | 122 attendees",
  },
  {
    image: reflectedxss,
    date: "Sun, Oct 8, 2023, 5:00PM IST",
    title: "Reflected XSS And Bypasses",
    description:
      "🙌 A heartfelt thank you to our incredible speaker, Shiv Pratap Singh , for sharing his expertise on Reflected XSS And Bypasses. Your insights illuminated our Bug Bounty Brigade community!",
    attendeesCount: "Shiv Pratap Singh | 122 attendees",
  },
  {
    image: cvehunting,
    date: "Sat, Sept 9, 2023, 6:00PM IST",
    title: "CVE Hunting on Programs",
    description:
      "🚀 The Session Concludes: A Resounding Triumph! 🌟The virtual halls of our recent session were buzzing with enthusiasm as the brilliant SANJAY SINGH shared his invaluable insights on CVE Hunting on Programs.🎙️ The excitement was palpable, and today, as the session comes to a close, we are left with a profound sense of satisfaction and gratitude.",
    attendeesCount: "SANJAY SINGH | 132 attendees",
  },
  {
    image: cybercrimeinvseting,
    date: "Sun, Aug 27, 2023, 7:00PM IST",
    title: "cybercrime investigation using OSINT and dark web operations",
    description:
      "As the Team Leader at Trinity Infotech Solutions, Ashwin Ragav is dedicated to harnessing the power of Open Source Intelligence (OSINT) techniques for effective cybercrime investigation. His insights promise to shed light on innovative approaches to gather and analyze digital footprints, bolstering our defense against modern cyber threats.",
    attendeesCount: "Ashwin Ragav | 122 attendees",
  },
  {
    image: web3andbugbounty,
    date: "Sun, Aug 20, 2023, 7:00PM IST",
    title: "Web3 and Bug Bounties",
    description:
      "🙌 Gratitude to Our Speaker, Rudra Singh for an Enlightening Session! 🎉We extend our heartfelt thanks to Rudra Singh for sharing his invaluable insights and expertise during our session on Web3 and Bug Bounties" +
      " Rudra's profound knowledge and passion for cybersecurity illuminated our understanding of these intricate subjects. His dedication to the Bug Bounty Brigade community has truly enriched our learning experience",
    attendeesCount: "Rudra Singh | 122 attendees",
  },
  {
    image: informationdisclosure,
    date: "Sun, Aug 13, 2023, 4:30PM IST",
    title: "Information Disclosure Methodology",
    description:
      "A resounding round of applause and heartfelt thanks to our remarkable speaker, Agnibha Dutta (AnonY0gi), for a captivating session on Information Disclosure Methodology. Your insights, expertise, and dedication truly ignited a passion for cybersecurity in all of us!",
    attendeesCount: "Agnibha Dutta (AnonY0gi) | 81 attendees",
  },
  {
    image: getintocybersecurity,
    date: "Sat, Jul 29, 2023, 5:00PM IST",
    title: "How to Get Into Cyber Security - Building your path and crafting an impactful resume",
    description:
      "Are you curious about breaking into the dynamic field of Cyber Security? Our esteemed Cyber Security Consultant, Sanjay Singh, will guide you on how to kickstart your journey and build a rewarding career in cybersecurity. In this session, you'll gain essential insights into starting your cybersecurity journey, crafting an impactful resume that stands out to recruiters, navigating certifications and skills to boost your employability, and acquiring practical experience and networking opportunities.",
    attendeesCount: "Sanjay Singh| 46 attendees",
  },
  {
    image: automationbounty,
    date: "Sat, Jul 22, 2023, 6:00PM IST",
    title: "Automating Bug Bounty",
    description:
      "In this exciting session, esteemed speaker S Rahul a highly accomplished Cyber Security Analyst, and skilled Bug Bounty Hunter, delved into the secrets of automating bug bounty workflows. From privacy and data protection to penetration testing, Rahul's expertise in various cybersecurity domains enriched the session for both seasoned bug hunters and aspiring enthusiasts",
    attendeesCount: "S Rahul | 122 attendees",
  },
  {
    image: beginnerbountyseries,
    date: "Sun, Jul 16, 2023, 6:00PM IST",
    title: "Beginner Bounty Series",
    description:
      "Join Bug Bounty Brigade and OWASP Kaithal for an educational bug-hunting session. Our speaker, Shaik Arif Ali, will focus on discovering low-hanging fruits in bug hunting, making it ideal for beginners. This collaborative event provides a supportive environment for bug bounty enthusiasts, whether you're new to the field or looking to refine your skills. Expect hands-on examples and a community-driven approach to learning.",
    attendeesCount: "Shaik Arif Ali | 54 attendees",
  },
  {
    image: getstartedwithoscp,
    date: "Sat, Jul 8, 2023, 10:00AM IST",
    title: "How to get started with OSCP",
    description:
      "Usman Shah shared his incredible journey of becoming an Offensive Security Certified Professional (OSCP). From exploring the value of OSCP to unlocking career opportunities, his insights provided valuable guidance for aspiring cybersecurity professionals.",
    attendeesCount: "Usman Shah | 122 attendees",
  },
];

const Events = () => {
  return (
    <PageLayout>
      <header className="flex flex-col items-center w-full gap-4 md:gap-12 md:flex-row">
        <h2 className="text-[1.2rem] heading font-[700] w-full md:text-[36px]">
          Ignite Your Cybersecurity Journey with Our Events
        </h2>
        <p className="text-lg md:text-2xl md:text-[18px] font-[400] w-full text-color">
          Engage in captivating discussions, interactive workshops, and
          networking opportunities with industry experts. Ignite your
          cybersecurity journey by staying informed, connecting with like-minded
          professionals, and expanding your knowledge in a dynamic and inclusive
          community.
        </p>
      </header>
      <div className="grid w-full grid-cols-1 py-12 md:grid-cols-3 gap-x-6 gap-y-12 justify-stretch">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-cardevents flex flex-col rounded-[24px] p-6 gap-2 md:gap-6"
          >
            <Image
              src={event.image}
              alt="event banner"
              width={1000}
              height={1000}
              className="max-h-[14.75rem] rounded-md hover:scale-110 transition duration-100 delay-200 ease-in-out"
            />
            <p className="text-color">{event.date}</p>
            <p className="neutral text-[24px] font-[700]">{event.title}</p>
            <p className="text-[18px] text-color text-blue-950 font-semibold">{event.description}</p>
            <p className="text-[18px] text-color font-bold ">{event.attendeesCount}</p>

          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Events;
