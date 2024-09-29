import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const testimonialsData = [
  {
    id: 0,
    text: "Маша, добрый день! Спасибо Вам огромное! Вы все верно и точно смотрите, который раз в этом убеждаюсь.",
    name: "Наталия",
    date: "Дата",
    img: "fas fa-user",
  },
  {
    id: 1,
    text: "Мария, добрый день! Спасибо за предыдущий расклад, буквально через несколько дней всё начало происходить так как вы говорили.",
    name: "Олеся",
    date: "21.11.2023",
    img: "fas fa-user",
  },
  {
    id: 2,
    text: "Благодарю за расклад Марию!! Уже заказываю второй расклад. Такая молодчина! В точку, корректно, без «воды». Успехов и процветания!",
    name: "Юлия",
    date: "Дата",
    img: "fas fa-user",
  },
  {
    id: 3,
    text: "Благодарю Марию,за время, труд и помощь,все сказано точно,описала все что отдаю и что получаю от отношений,очень помогла в моем вопросе теперь знаю что нужно поменять) Желаю побольше клиентов,удачи и процветания группе",
    name: "Алёна",
    date: "Дата",
    img: "fas fa-user",
  },
  {
    id: 4,
    text: "Благодарю прекрасную Марию за быстрый просмотр на негатив по акции и полезные советы! Меня накрутила предыдущая гадалка, к которой я ходила у себя, сказала, что у меня венец безбрачия и крадник на молодость. Спасибо Марии, что развенчала эти глупости и убрала их из моей головы, скоро приду за раскладом на отношения! Буду рекомендовать подругам, вы очень милая и душевная! Прекрасный профессионал своего дела! И просто мега-позитивный человек с добрым сердцем! Спасибо вам много-много раз!",
    name: "Даша",
    date: "Дата",
    img: "fas fa-user",
  },
  {
    id: 5,
    text: "От всего сердца благодарю Марию за просмотр на негатив и советы в личной сфере. Недобросовестный практик диагностировал мне негатив на смерть и прочее, Мария же развеяла данную муть и враньё, что помогло мне сберечь нервы и финансы. Также была проведена диагностика по поводу проблем в личной жизни, информация очень корректная, верная. Всех благ Вам уважаемая Мария, спасибо что уберегли от необдуманных действий и развеяли мои страхи.",
    name: "Мария",
    date: "07.02.2018",
    img: "fas fa-user",
  },
  {
    id: 6,
    text: "2 раз обращалась к Маше и все в точку. Был вопрос 'встречу ли я своего человека в ближайшее время,при каких обстоятельствах,какие отношения между нами будут'. И все в точку,даже сроки! Описание характера 100%. Спасибо большое! Даже не ожидала,что все действительно так сбудется",
    name: "Любовь",
    date: "24.03.2017",
    img: "fas fa-user",
  },
  {
    id: 7,
    text: "Уже не первый раз обращаюсь к Марии за просмотром спорной и жизненно важной доя меня ситуации, и каждый раз удивляет профессионализм Марии и четкость попадания ответов. Другими словами, если я боюсь проблемы, но ее там нет, Мария говорит, что не надо бояться и так и выходит. Также я лучше понимаю, как поступить наиболее гармоничным способом для того, чтобы достичь моих целей и планов... Благодарю",
    name: "Genya",
    date: "09.10.2018",
    img: "fas fa-user",
  },
  {
    id: 8,
    text: "Обратилась к Марии случайно,можно сказать из любопытства. Получила четкие ответы на свои вопросы.Очень деликатно и тактично были обозначены проблемные моменты. Мария хороший профессионал в своем деле,выполняет свою работу на 100%.",
    name: "Екатерина",
    date: "15.09.2018",
    img: "fas fa-user",
  },
  {
    id: 9,
    text: "Хочу поблагадорить от все души! Пользуюсь услугами уже больше года и никогда не было промашек! Всегда помогала развеять сомнения и обрести уверенность в завтрашнем дне! Также заказывала береги, не знаю совпадение или нет, но на душе обрелось спокойствие и решились некоторые жизненные вопросы! СПАСИБО!",
    name: "Анастасия",
    date: "26.04.2018",
    img: "fas fa-user",
  },
  {
    id: 10,
    text: "Обожаю Ваши расклады, хотя они и бывали спорные, но после я понимала, что правдивые",
    name: "Ольга",
    date: "Дата",
    img: "fas fa-user",
  },
  {
    id: 11,
    text: "Благодарю за расклад, Мария! Всё так и есть. Именно это я и хотела услышать. Да, мы уже 10 лет как в разводе. Просто приезжает ко мне в конце мая из другого города решить квартирный вопрос после долгих судебных разбирательств. И на этом, судя по всему, окончательно отпустим друг друга. Спасибо! Буду обращаться к Вам ещё!",
    name: "Марина",
    date: "Дата",
    img: "fas fa-user",
  }
];

const Testimonial = ({ text, name, date, img }) => (
  <div className="p-4 md:w-1/2 w-full">
    <div className="h-full bg-gray-100 p-8 rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="block w-5 h-5 text-gray-400 mb-4"
        viewBox="0 0 975.036 975.036"
      >
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed mb-6">{text}</p>
      <a className="inline-flex items-center">
      <i className={`${img} text-4xl rounded-full flex-shrink-0 object-cover object-center text-gray-600`} /> {/* Font Awesome user icon */}
        <span className="flex-grow flex flex-col pl-4">
          <span className="title-font font-medium text-gray-900">{name}</span>
          <span className="text-gray-500 text-sm">{date}</span>
        </span>
      </a>
    </div>
  </div>
);

function Testimonials() {
  return (
    <section id="testimonials" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Отзывы
        </h1>
        <div className="flex flex-wrap -m-4">
          {testimonialsData.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              text={testimonial.text}
              name={testimonial.name}
              date={testimonial.date}
              img={testimonial.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
