import React from "react";
import hero_img from "../../assets/img/hero.jpg";

function Hero() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Привет, меня зовут Мария!
              <br class="hidden lg:inline-block" />Я - таролог, эмпант,
              нумеролог, мастер Рейки
            </h1>
            <p class="mb-8 leading-relaxed">
              Главное, что вы должны знать обо мне - я смогу помочь вам
              разобраться в сложной ситуации.
              </p>
              <p class="mb-8 leading-relaxed"> Свою работу с картами Таро я начала в конце августа 2016
              года. Уже на протяжении 7 лет я помогаю людям со всего мира,
              отвечая на волнующие вопросы с помощью карт.
              </p>
              <p class="mb-8 leading-relaxed">
              <li>
                Я могу растолковать ваш сон. И определить есть ли в нем
                смысловая нагрузка.
              </li>
              <br />
              <li>
                Могу рассчитать вашу матрицу судьбы по вашей дате рождения,
                которая позволяет не упускать благоприятные возможности и быть
                успешным человеком во всех сферах жизни.
              </li>
              <br />
              <li>
                Также я являюсь мастером-учителем Традиционного Рейки. И провожу
                сеансы как очно так и дистанционно.
              </li>
              <br />
              <li>
                Помогаю извлечь из подсознания мысли и чувства, реальные мотивы
                поступков и причины проблем. Провожу консультации с помощью
                метафорических карт.
              </li>
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={hero_img}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
