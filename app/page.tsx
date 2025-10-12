import { NextPage } from "next";
import React from "react";

const socialLinls = [
  {
    name: "GitHub",
    url: "https://github.com/fasokh",
    color: "bg-gray-800 hover:bg-gray-700",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/codechain.dev",
    color: "bg-pink-500 hover:bg-pink-400",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fatemeh-sokhandan",
    color: "bg-blue-600 hover:bg-blue-500",
  },
];

const Page: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-10 font-sans rtl">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">فاطمه سخندان</h1>
        <h2 className="text-xl text-blue-600">فرانت‌اند دولوپر</h2>
      </div>

      <section className="mb-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">درباره من</h2>
        <p className="leading-8">
          من از سال 1400 شروع به یادگیری برنامه‌نویسی فرانت‌اند به‌صورت خودخوان
          کردم و در حال حاضر با Next.js و React کار می‌کنم. چندین پروژه شخصی
          نوشتم و آماده‌ی همکاری با تیم‌های حرفه‌ای هستم.
        </p>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">
          تحصیلات دانشگاهی
        </h2>
        <div className="flex flex-wrap gap-2">
          {["مهندسی فناوری اطلاعات", "مهندسی شبکه های کامپیوتری"].map(
            (item) => (
              <span
                key={item}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            )
          )}
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">مهارت‌ها</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Chakra UI",
            "Postman",
            "Trelo",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">زبان</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            انگلیسی
          </span>
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          نمونه‌کارها
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Online Shop</h3>
            <p className="mb-2">
              یک آنلاین شاپ جهت خرید پوشاک، سفارش دادن و جتسجوی کالا
            </p>
            <div className="flex gap-4">
              <a
                href="https://online-shop-mu-ebon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                مشاهده آنلاین
              </a>
              <a
                href="https://github.com/fasokh/online-shop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                سورس کد
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Task Manager</h3>
            <p className="mb-2">
              مدیریت انجام کارها بر اساس تاریخ و ساعت با ذخیره‌سازی در
              IndexedDB.
            </p>
            <div className="flex gap-4">
              <a
                href="https://task-manager-tawny-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                مشاهده آنلاین
              </a>
              <a
                href="https://github.com/fasokh/Task-Manager"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                سورس کد
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Todo List</h3>
            <p className="mb-2">
              اپلیکیشن برنامه‌ریزی با قابلیت Drag & Drop و ذخیره در
              LocalStorage.
            </p>
            <div className="flex gap-4">
              <a
                href="https://todo-list-phi-eight-89.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                مشاهده آنلاین
              </a>
              <a
                href="https://github.com/fasokh/Todo-List"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                سورس کد
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Week Planner</h3>
            <p className="mb-2">
              برنامه‌ریز هفتگی با قابلیت Drag & Drop، آرشیو و ذخیره در
              LocalStorage.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">
          تجربه کاری
        </h2>
        <p className="mb-2">
          انجام پروژه های شخصی با استفاده از NextJs و Firebase، شامل طراحی
          ریسپانسیو، بهینه سازی عملکرد و تعامل با APIهای خارجی(Strava, Google
          Maps)
        </p>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">
          تکنولوژی های مورد علاقه
        </h2>
        <p className="mb-2">
          انجام پروژه های شخصی با استفاده از NextJs و Firebase، شامل طراحی
          ریسپانسیو، بهینه سازی عملکرد و تعامل با APIهای خارجی(Strava, Google
          Maps)
        </p>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">
          لینک های اجتماعی
        </h2>
        <div className="flex flex-wrap gap-2">
          {socialLinls.map((item) => (
            <a
              href={item.url}
              key={item.name}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">
          اطلاعات تماس
        </h2>
        <p>📞 09363363326</p>
        <p>📧 fatemeh.sokhandan@gmail.com</p>
      </section>
    </div>
  );
};

export default Page;
