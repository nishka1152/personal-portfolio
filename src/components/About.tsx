const About = () => {

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              About
            </h2>
          </div>

            <div className="space-y-6">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
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
    </section>
  );
};

export default About;
