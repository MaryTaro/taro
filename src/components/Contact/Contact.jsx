import React from "react";

function Contact() {
  return (
    <>
      <section
        id="contact"
        class="max-w-6xl mx-auto text-gray-600 body-font relative"
      >
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Контакты
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Оставьте ваши контакты, и я свяжусь с вами в скором времени.
            </p>
          </div>
          <form
            name="Contact"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            class="lg:w-1/2 md:w-2/3 mx-auto"
          >
            <input type="hidden" name="form-name" value="Contact" />
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Э-почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  type="submit"
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Отправить
                </button>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href="mailto:taroireiki@gmail.com" class="text-indigo-500">
                  taroireiki@gmail.com
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
