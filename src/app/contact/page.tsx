"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  FaEnvelope,
  FaKeyboard,
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
      icon: <FaEnvelope className="h-5 w-5" />,
    },
    {
      title: "For Das Keyboard",
      href: "https://www.daskeyboard.com/contact-us/",
      icon: <FaKeyboard className="h-5 w-5" />,
    },
    {
      title: "For Bamzooka",
      href: "https://bamzooka.com/contact/",
      icon: <FaTasks className="h-5 w-5" />,
    },
    {
      title: "For Metadot & Montastic",
      href: "https://support.metadot.com/login/create_request#/ticket-form/13",
      icon: <FaShare className="h-5 w-5" />,
    },
  ];
  return (
    <>
      <section className="section-mojo bg-[#2b70a9]">
        <div className="container mx-auto px-[15px]">
          <div className="text-white">
            <div className="container-sm text-center">
              <h1 className="mb-[1.1rem]">Questions? We are here to help?</h1>
            </div>
            <div className="mt-[3.3rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {cards.map((card, i) => (
                <a
                  key={i}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-[260px]"
                >
                  <Card className="group flex flex-col justify-between h-full border border-gray-200 hover:shadow-md transition-all duration-300">
                    {/* Header */}
                    <CardHeader className="pl-4 pt-6 pb-2">
                      <div className="flex justify-start">{card.icon}</div>
                    </CardHeader>

                    {/* Content */}
                    <CardContent className="pl-4 pr-4 pb-2 flex-1">
                      <h6 className="font-semibold text-gray-800 mt-1 capitalize">
                        {card.title}
                      </h6>
                    </CardContent>

                    {/* Footer */}
                    <CardFooter className="flex items-center text-sm text-[#2b70a9] font-medium pl-4 pr-4 pb-4">
                      Go to support
                      <FaArrowRight className="ml-auto transition-transform group-hover:translate-x-1 duration-200" />
                    </CardFooter>
                  </Card>
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
