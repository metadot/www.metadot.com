"use client";

import Image from "next/image";
import React from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    year: "2020",
    title: "Remote working switching",
    description: (
      <>
        With the outbreak of the Covid-19 pandemic, Metadot made the transition
        to an entirely remote organization. With updated structures, new forms
        of communication, and the official introduction of the Metaman —
        Metadot’s official manual.
      </>
    ),
  },
  {
    year: "2019",
    title: "Bamzooka Creation",
    description: (
      <>
        Bamzooka was released in Morocco. It helps document processes, organize
        work, and improve the quality of everything our teams do.
      </>
    ),
  },
  {
    year: "2011",
    title: "Creation of Mojo Helpdesk",
    description: (
      <>
        Mojo Helpdesk was invented to fill a need from the Das Keyboard company,
        improving after-sale service.
      </>
    ),
  },
  {
    year: "2010",
    title: "First edition of UTC",
    description: (
      <>
        UTC (Ultimate Typing Championship) is a competition organized by
        Metadot promoting typing worldwide. The first edition went viral on{" "}
        <a
          href="https://www.youtube.com/watch?v=m9EXEpjSDEw&t=134s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          YouTube
        </a>
        .
      </>
    ),
  },
  {
    year: "2009",
    title: "Das Keyboard S Model",
    description: (
      <>
        Das Keyboard launches the Model S with upgraded electronics,
        laser-etched keys, and full n-key rollover — also debuting the quieter
        Professional S Tactile Soft keyboard with Cherry MX Brown switches.
      </>
    ),
  },
  {
    year: "2005",
    title: "Creation of Das Keyboard",
    description: (
      <>
        Das Keyboard announces the launch of its first keyboard: a completely
        blank keyboard designed for “über geeks.” Praised by many, including the{" "}
        <a
          href="https://www.nytimes.com/2005/05/26/technology/circuits/a-keyboard-that-lets-the-supremely-confident-show.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          New York Times
        </a>
        , for its originality and quality.
      </>
    ),
  },
  {
    year: "2000",
    title: "Creation of Metadot",
    description: (
      <>
        Founded by Daniel Guermeur — the beginning of a company that would grow
        globally, producing innovative products by talented individuals.
      </>
    ),
  },
];

export default function Timeline() {
  return (
    <section id="history-section" className="mb-[5rem]">
      {/* Header */}
      <div className="mb-[3rem] text-center">
        <h2 className="section-title mb-[1.1rem]">Our History</h2>
        <p className="section-subtitle text-gray-600">
          Here are some of our key moments and milestones throughout the history
          of Metadot...
        </p>
      </div>

      {/* Timeline */}
      <ul className="relative max-w-3xl mx-auto before:content-[''] before:absolute before:top-0 before:left-[50%] before:-translate-x-1/2 before:w-[2px] before:h-full before:bg-gray-300">
        {timelineData.map((item, i) => (
          <li
            key={i}
            className={`relative mb-16 sm:mb-20 flex flex-col sm:flex-row sm:items-center ${
              i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Connector dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full z-10" />

            {/* Timeline content card */}
            <div
              className={`bg-white border border-gray-200 shadow-sm rounded-lg p-6 w-[85%] sm:w-[43%] ${
                i % 2 === 0
                  ? "sm:ml-[calc(50%+1rem)]"
                  : "sm:mr-[calc(50%+1rem)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-500 font-semibold">
                  {item.year}
                </span>
              </div>
              <p className="mt-2 text-gray-700 text-[0.95rem] leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}