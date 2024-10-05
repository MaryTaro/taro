import React from "react";
import Taro_img from "../../assets/img/matrica.jpeg";

function Taro() {
  return (
    <>
      {/* Таро */}

      <section id="taro" class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto flex flex-col">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Таро
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Таро - это не просто игра в карты, это путешествие вглубь себя.
              Колода Таро – это древняя система символов, которая помогает
              открыть двери в бессознательное и разобраться в сложных жизненных
              ситуациях.
            </p>
          </div>
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={Taro_img}
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    В чем польза гадания на Таро?
                  </h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">
                  <li>
                    Карты Таро могут помочь выявить и анализировать свои мысли,
                    чувства и поведение. Это позволяет лучше понять себя и свои
                    мотивации.
                  </li>
                  <li>
                    Таро может подсказать новые пути и идеи для достижения своих
                    целей.
                  </li>
                  <li>
                    Карты могут помочь с выбором направления и мотивировать на
                    движение вперед.
                  </li>
                  <li>
                    Изучение значений карт может помочь понять причины
                    конфликтов и найти компромиссные решения.
                  </li>
                  <li>
                    Таро может предложить новые перспективы и помочь увидеть
                    ситуацию в более широком контексте.
                  </li>
                  <li>
                    {" "}
                    В трудные моменты карты Таро могут предложить поддержку и
                    утешение. Они напоминают о силе и мудрости, которая есть в
                    каждом человеке.
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Цена на таро */}

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Стоимость услуг
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Таро консультации
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 xl:w-1/2 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  Таро консультации онлайн
                </h2>
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  от 10€
                </h1>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  1 вопрос в формате “Да/Нет” - 10 €
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  1 вопрос развернутый ответ - 20 €
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  2 вопроса развернуто - от 35 €
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  3 вопроса и более - от 50 €
                </p>
                <a href="#contact" class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Заказать
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <p class="text-xs text-gray-500 mt-3">
                  Стоимость консультации всегда зависит от сложности и
                  количества вопросов. Конечную стоимость лучше уточнить при
                  обращении.
                </p>
              </div>
            </div>
            <div class="p-4 xl:w-1/2 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  Популярно
                </span>
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  Таро консультации очные
                </h2>
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  от 80€
                </h1>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Длительность 1,5 часа - 80€
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  В оплаченное время может входить Сеанс Рейки (20 мин) если
                  предупредили заранее или его можно добавить по тарифу<br/>
                  (обязательно предупредив заранее).
                </p>
                <a href="#contact" class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  Заказать
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <p class="text-xs text-gray-500 mt-3">
                  Личные консультации всегда только по предварительной записи
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Taro;
