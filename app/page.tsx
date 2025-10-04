import { NextPage } from "next";
import React from "react";

const page: NextPage = () => {
  return (
    <div>
      <div>
        <h2>نام: فاطمه سخندان</h2>
        <h2>عنوان شغلی: فرانت اند دولوپر</h2>
      </div>
      <div>
        <h2>درباره من:</h2>
        <p>
          من از سال 1400 شروع به یادگیری زبان برنامه نویسی فرانت اند بصورت
          خودخوان کردم و سعی کردم خودمو ارتقا بدم و الان هم با زبان nextJs
          برنامه های خود را کد میزنم چندین پروژه شخصی به زبان های ریکت و نکست
          نوشتم و مسلط به زبان نکست و ریکت هستم و آماده همکاری با تیم های حرفه
          ای هستم
        </p>
      </div>
      <div>
        <h2>مهارت ها:</h2>
        <p>HTML, CSS, JavaScript, Next.Js, React, Tailwind CSS, Chakra UI</p>
      </div>
      <div>
        <h2>نمونه کارها:</h2>
        <div>
          <h3>پروژه Task Manager</h3>
          <p>
            برنامه ریزی تقویمی براساس تاریخ و ساعت و ذخیره سازی در indexedDI
          </p>
          <a
            href="https://task-manager-tawny-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            مشاهده آنلاین
          </a>
          <a
            href="https://github.com/fasokh/Task-Manager"
            target="_blank"
            rel="noopener noreferrer"
          >
            سورس کد
          </a>
        </div>
        <div>
          <h3>پروژه Todo-list</h3>
          <p>
            برنامه ای جهت اضافه کردن برنامه ها با قابلیت Drag&Drop و ذخیره سازی
            در LocalStorge
          </p>
          <a
            href="https://todo-list-phi-eight-89.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://github.com/fasokh/Todo-List"
            target="_blank"
            rel="noopener noreferre"
          ></a>
        </div>
        <div>
          <h3>پروژه Week Planner</h3>
          <p>
            برنامه ریزی هفتگی با قابلیت آرشیو کردن برنامه ها و Drag&Drop کردن و
            ذخیره سازی در LocalStorage
          </p>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
      <div>
        <h2>اطلاعات تماس:</h2>
        <p>تلفن: 09363363326</p>
        <p>ایمیل: fatemeh.sokhandan@gmail.com</p>
        <p>لینکدین:</p>
        <p>اینستاگرام:codechain.dev</p>
      </div>
    </div>
  );
};

export default page;
