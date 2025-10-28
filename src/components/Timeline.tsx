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
        of communication, and the official introduction of the Metaman:
        Metadot’s official manual.
      </>
    ),
  },
  {
    year: "2019",
    title: "Bamzooka Creation",
    description: (
      <>
        Bamzooka was released in Morocco. Bamzooka helps document processes,
        organize work, and improve the quality of everything our teams do.
      </>
    ),
  },
  {
    year: "2011",
    title: "Creation of Mojo Helpdesk",
    description: (
      <>
        Mojo Helpdesk was invented to fill a need from the Das Keyboard company,
        to help improve the after-sale service.
      </>
    ),
  },
  {
    year: "2010",
    title: "First edition of UTC",
    description: (
      <>
        UTC or Ultimate Typing Championship is a competition organized by
        Metadot promoting typing over the world. The first edition knew an
        absolute craze on{" "}
        <a
          href="https://www.youtube.com/watch?v=m9EXEpjSDEw&t=134s"
          target="_top"
        >
          youtube
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
        laser-etched keys and full n-key rollover. The Model S also debuts the
        Professional Model S Tactile Soft keyboard featuring Cherry MX brown key
        switches which gives a quieter typing experience for those in
        environments where the blue switch is too loud.
      </>
    ),
  },
  {
    year: "2005",
    title: "Creation of Das Keyboard",
    description: (
      <>
        Das Keyboard announces the launch of its first keyboard: a completely
        blank keyboard designed specifically for &quot;über geeks.&quot; The keyboard
        features individually weighted keys. Praised by many prominent sources
        such as the{" "}
        <a
          href="https://www.nytimes.com/2005/05/26/technology/circuits/a-keyboard-that-lets-the-supremely-confident-show.html"
          target="_top"
        >
          New York Times
        </a> {" "}
        for its quality and originality.
      </>
    ),
  },
  {
    year: "2000",
    title: "Creation of Metadot",
    description: (
      <>
        Founded by Daniel Guermeur, this was the beginning of a successful
        company that would grow globally, producing impressive products by
        talented individuals.
      </>
    ),
  },
];

export default function Timeline() {
  return (
    <section id="history-section" className="mb-[5rem]">
      {/* Header */}
      <div className="mb-[3rem]">
        <h2 className="section-title">Our History</h2>
        <p className="section-subtitle">
          Here are some of our key moments and milestones throughout the history
          of Metadot...
        </p>
      </div>

      {/* Timeline */}
      <ul className="timeline">
        {timelineData.map((item, i) => {
          const direction = i % 2 === 0 ? "direction-r" : "direction-l";
          const isLast = i === timelineData.length - 1;
          return (
            <li key={i}>
              {/* Connector dot */}
              <div className={`${direction} ${isLast ? "ending" : ""}`}>
                {/* Timeline content card */}
                <div className={`flag-wrapper`}>
                  <span className="flag">{item.title}</span>
                  <span className="time-wrapper">
                    <span className="time">{item.year}</span>
                  </span>
                </div>
                <div className="desc">{item.description}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
