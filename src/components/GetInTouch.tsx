"use client";

import React from "react";

const GetInTouch = () => {
  const onWhatsApp = (formData: FormData) => {
    const name = formData.get("name");
    const question = formData.get("question");

    if (name !== "" && question !== "")
      window.open(
        `http://wa.me/+77006068494?text=Здравствуйте! Меня зовут ${name}. Вопрос: ${question}`,
        "_blank"
      );
  };

  return (
    <section id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 rounded-lg">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-accent ">
              Asia Power Operating
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900  text-3xl sm:text-5xl">
              Остались вопросы?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 ">
              Получите профессиональную консультацию и помощь в выборе
              электротехнической продукции
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 ">
                Свяжитесь с нами прямо сейчас, чтобы получить консультацию,
                узнать о наличии товара или сделать заказ. Наша команда
                экспертов с удовольствием ответит на все ваши вопросы и
                предложит оптимальное решение для ваших потребностей.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-accent text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                      Наш адрес
                    </h3>
                    <a
                      className="text-gray-600 "
                      href="https://go.2gis.com/3WPCX"
                    >
                      Керей Жанибек 12а, офис 603
                    </a>
                    <p className="text-gray-600 ">Астана, Казахстан</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-accent text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                      Контактные данные
                    </h3>
                    <p className="text-gray-600 ">
                      Мобильный телефон:{" "}
                      <a href="tel:+7-700-606-8494">+7 700 606 8494</a>
                    </p>
                    <p className="text-gray-600 ">
                      Почтовый адрес:{" "}
                      <a href="ap.operating@gmail.com">
                        ap.operating@gmail.com
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-accent text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                      Работаем
                    </h3>
                    <p className="text-gray-600 ">
                      Понедельник - Пятница: 09:00 - 18:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold ">
                Напишите! Мы здесь, чтобы помочь!
              </h2>
              <form id="contactForm" action={onWhatsApp}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Ваше имя"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="question"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="question"
                      name="question"
                      cols={30}
                      rows={5}
                      placeholder="Напишите свой вопрос..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-accent text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Отправить сообщение на Whatsapp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
