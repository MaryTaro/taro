import React from "react";

function About() {
  return (
    <>
      <section className="max-w-6xl mx-auto text-gray-600 text-center body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* Heading */}
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font cursive mb-4 md:mb-0 md:w-2/5 md:text-left">
            100% Конфиденциальность
          </h2>
          
          {/* Paragraph Content */}
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
              Все ваши данные и ваши вопросы конфиденциальны.
            </p>
            <p className="leading-relaxed text-base mt-4">
              Я максимально открыта для вас и работаю честно.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
