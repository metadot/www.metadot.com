"use client";

import {
  FaRegEnvelope,
  FaRegKeyboard,
  FaTasks,
  FaShare,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  const cards = [
    {
      title: "For Mojo Helpdesk",
      href: "https://www.mojohelpdesk.com/contact-us/",
      icon: <FaRegEnvelope size={58} className="my-[1.65rem]" />,
    },
    {
      title: "For Das Keyboard",
      href: "https://www.daskeyboard.com/contact-us/",
      icon: <FaRegKeyboard size={65} />,
    },
    {
      title: "For Bamzooka",
      href: "https://bamzooka.com/contact/",
      icon: <FaTasks size={58} />,
    },
    {
      title: "For Metadot & Montastic",
      href: "https://support.metadot.com/login/create_request#/ticket-form/13",
      icon: <FaShare size={58} />,
    },
  ];
  return (
    <>
      <section className="section-mojo bg-[#2b70a9]">
        <div className="container mx-auto px-[15px]">
          <div className="text-white">
            <div className="container-sm text-center">
              <h1 className="mb-[1.1rem]">Questions? We are here to help</h1>
            </div>
            <div className="mt-[3.3rem] flex flex-wrap justify-center  max-w-[1040px]">
              {cards.map((card, i) => (
                <a
                  key={i}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[260px]" // link is just a wrapper
                >
                  <div className="bg-white text-gray-800 rounded-lg shadow-md flex flex-col justify-between p-[0.55rem]">
                    <div className="icon text-left pl-[1.1rem]">
                      {card.icon}
                    </div>
                    <div className="sc-card-body px-[1.1rem]">
                      <h6 className="flex flex-wrap font-semibold mt-[0.55rem]">
                        {card.title}
                      </h6>
                    </div>
                    <div className="sc-card-footer link-color flex items-center  small-text px-[1.1rem]">
                      Go to support
                      <FaArrowRight size={17} className="ml-auto" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-mojo">
        <div className="container mx-auto">
          <div className="container-lg my-[3.3rem] px-[15px]">
            <h3 className="mb-[1.65rem]">Our international offices</h3>
          </div>
          <div className="grid grid-cols-2 px-[15px]">
            <div>
              <p className="font-semibold text-[1.1rem] flex items-center mb-2">
                <Image
                  src="/flags/us-flag.webp"
                  alt="USA flag"
                  width={30}
                  height={20}
                  className="mr-2"
                />
                Austin, Texas, USA (HQ)
              </p>
              <div className="text-sm leading-relaxed text-gray-800">
                <p>Metadot Corporation</p>
                <p>14400 Piper Glen Dr</p>
                <p>Austin, Texas 78738-6528</p>
                <p>USA</p>
                <br />
                <p>
                  Tel:{" "}
                  <a
                    href="tel:+15126379983"
                    className="text-[#2b70a9] hover:underline"
                  >
                    +1 512-637-9983
                  </a>
                </p>
                <p>Fax: +1 512-233-5335</p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-[1.1rem] flex items-center mb-2">
                <Image
                  src="/flags/france-flag.webp"
                  alt="France flag"
                  width={30}
                  height={20}
                  className="mr-2"
                />
                France
              </p>

              <div className="text-sm leading-relaxed text-gray-800">
                <p>29 bis, Rue de la Prairie</p>
                <p>78120 Rambouillet - FRANCE</p>
              </div>
            </div>
          </div>

          <div className="container-fluid container-lg my-[3.3rem] px-[15px]">
            <iframe
              title="Metadot Austin HQ Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.190763988241!2d-97.89932172358396!3d30.341740605810878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644c7597e2bb5fb%3A0x9a3b5ebee7e3c6a5!2s14400%20Piper%20Glen%20Dr%2C%20Austin%2C%20TX%2078738!5e0!3m2!1sen!2sus!4v1691619392720!5m2!1sen!2sus"
              width="100%"
              height="350"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
