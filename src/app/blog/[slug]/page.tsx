import Image from "next/image";

export default function BlogArticlePage() {
  return (
    <>
      <div className="max-w-[1140px] px-[15px] mx-auto mt-[1.1rem]">
        <nav className="nav flex">
          <a className="p-[0.55rem] !text-[#6c757d]" href="/blog/">
            Back to Home
          </a>
        </nav>
      </div>
      <div className="mojo-card blogpost max-w-[1140px] mx-auto px-[15px] mb-[3.3rem]">
        <h2 className="blog-title title-h2">
          Connecting the Continents: How We Operate a Global Team
        </h2>
        <p className="blog-references my-[1.65rem]">
          Catherine Mulder on <time>May 5, 2021</time>
        </p>
        <Image
          src="/blog/global.svg"
          alt="a woman staring at the globe with marked locations"
          width={808}
          height={582}
          className="img-fluid rounded img-post"
        />
        <div className="blog-content pt-[1.1rem]">
          <p>
            The United States, Canada, France, and Germany - the Metadot team is
            spread all throughout the world. While we live in these countries,
            we represent many different cultures and diverse backgrounds - all
            connected through our organization, Metadot. Our diversity is
            something we celebrate, and we consider it to be one of our greatest
            strengths. Each member of our team brings a unique and different
            skill set, as well as perspectives and belief systems that help us
            tackle even the toughest challenges. However, managing a team
            separated by thousands of miles and many different time zones is a
            challenge in itself.
          </p>
          <h2 id="time-zones--technology">Time Zones & Technology</h2>
          <p>
            Living in times of such impressive technology is what makes our
            company possible. While I hop on my morning meeting in Texas my
            colleagues in France are hopping on before they enjoy some evening
            dinner. However, we often manage to collaborate on projects as if we
            were sharing the same time zone. This works partially because we
            prioritize our time together to focus on the most important tasks,
            but also because we have adapted the ways in which we communicate.
            At Metadot, we use “Discord” which is an instant messaging and
            digital distribution platform where we hop on video calls, exchange
            messages, and share important information all in one place. It
            stores important conversations, and allows us to view if a person is
            active, inactive, or busy with another task. This allows me to
            contact my French colleagues after hours, without interfering with
            their personal time. At the end of each day, they can shut down
            their workspace and enjoy time with family, without having to
            communicate with work until the next day. These resources allow us
            to collaborate in an effective manner, and function as one unit
            despite the miles between our team.
          </p>
          <h2 id="building-a-connection">Building A Connection</h2>
          <p>
            While I know the familiar faces fairly well, there are very few of
            my colleagues I’ve ever met in person. A few years ago - when the
            majority of workplaces were in a physical environment - this
            structure was nearly unheard of. So how did we build these
            connections without sharing an office space? As you’ve read in our
            previous blogs, we are intentional with how we spend our time.
            Activities such a weekly stretching, coffee-dates, and happy hours
            give us the opportunity to collaborate outside of the typical work
            environment. Every Friday, we dedicate time to take a break from our
            weekly tasks and hang out in a virtual happy hour. To be considerate
            of the differing time zones, we have two happy hours - one which
            takes place in the mid-morning for those of us in the US, and one to
            close out the workday. While the European team is not expected to
            hop on the second virtual happy hour, we often still connect to play
            some games, enjoy some drinks, and talk about exciting news. There
            are some rules to keep the happy hours productive and fun, and to
            make sure they are fulfilling their true purpose:
          </p>
          <ul className="list-disc ps-[40px]">
            <li>
              <p>
                No working. Although we often start the Happy Hours by finishing
                up tasks, it is important to prioritize taking a break to
                socialize with the team
              </p>
            </li>
            <li>
              <p>
                Cameras & Microphones on. Just like the etiquette for a
                traditional virtual meeting, we want the happy hour to feel as
                normal as possible. We aim to replicate an environment similar
                to if we were together in person
              </p>
            </li>
            <li>
              <p>
                Have fun. While it can feel strange to adjust to the virtual
                workplace, happy hours are a great way to step away from hard
                tasks and receive some healthy human interaction that has been a
                challenge during the pandemic
              </p>
            </li>
          </ul>
          <p>
            A portion of our team lives alone, and may be in a region with
            stricter regulations due to the Covid-19 pandemic. This can limit
            the amount of social interaction, which can quickly lead to burnout.
            Happy Hours have been a fun and effective way to help ease the
            isolation, and spend time with others.
          </p>
          <h2 id="work--well-being">Work & Well-Being</h2>
          <p>
            While we prioritize emotional and mental well-being as a team, we
            also prioritize physical health. Throughout the pandemic, we
            utilized our resources to create healthy and fun challenges to
            improve our team relationships and our physical well being.
          </p>
          <ul className="list-disc ps-[40px]">
            <li>
              <p>
                Virtual Stretch. Each week, our team engages in a 15 minute
                stretch led by one of our members. It is a healthy way to take a
                break from the day, and take some time to focus on physical and
                mental wellbeing.
              </p>
            </li>
            <li>
              <p>
                Push-ups. Started by our CEO Daniel, we take a break once each
                hour of the work day to do push-ups. Different from stretching,
                we do this in our personal time. However, we do have a reminder
                set to notify those who participate that it’s time to take a
                break, and complete your push-ups. While this is not everyone’s
                favorite activity, those who do participate feel stronger and
                more ready to tackle their next tasks.
              </p>
            </li>
          </ul>
          <p>
            Quick fact: {" "}
            <a href="https://ergonomictrends.com/sedentary-lifestyle-sitting-statistics/">
              A study from Dr. James Levine
            </a>
            , the director of Mayo Clinic, concluded that “people who spent more
            than 6 hours per day sitting with low levels of physical activity
            have a 71% increase in mortality rate.” (Muller). Statistics like
            this drive us to be even more creative in how we encourage one
            another to keep moving, while balancing work and life.
          </p>
          <h2 id="learning-through-the-language-barrier">
            Learning through the Language Barrier
          </h2>
          <p>
            One question I am frequently asked when I tell people about the
            diversity of our company is: how do we deal with the language
            barrier? While our main form of communication is in English, there
            are times where colleagues work together in virtual rooms and speak
            in their native languages. As a person who only speaks one language,
            my multilingual coworkers impress me more than anything. They’re
            able to communicate about a variety of topics, and easily switch
            between languages. While others may view the language barrier as
            just that - a barrier - I view it as one of our greatest strengths.
            From a business standpoint, it opens our ability to expand into
            different markets, and reach a whole new audience that would
            otherwise be difficult to connect. From the standpoint of personal
            growth, I’ve also had the opportunity to learn words, phrases, and
            grow in my communication skills.
          </p>
          <p>
            While we still face challenges like occasional technical
            difficulties and other obstacles, we have successfully managed to
            grow our team and onboard new individuals virtually. This was made
            possible by utilizing our software, implementing new strategies, and
            ultimately working together as a team to create an efficient,
            welcoming remote environment. As we continue to build our team, we
            aim to maintain this environment that prioritizes efficiency,
            well-being and teamwork.
          </p>
        </div>
      </div>
    </>
  );
}
