
const About = () => {

  return (
    <section id="about" className="py-16 bg-black text-white">
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            About
          </h1>
            <div className="space-y-8 mt-8">
              <div>
                <p className="font-inter text-neutral-300 text-center leading-relaxed mb-4 text-2xl">
                  Hi! I am a sophomore at UC Irvine who has been passionate about coding since eighth grade. 
                  What started as a simple curiosity turned into something I love doing every day. 
                  I enjoy experimenting with new languages like Java, Python, and C++, and 
                  I am always looking for ways to challenge myself with new projects and technologies. 
                  I am especially interested in exploring machine learning and artificial intelligence. 
                  Right now, I am trying to dive deeper into front-end development to broaden my skills.
                </p>
              </div>

            </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
