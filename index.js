const btns = document.querySelectorAll('.btn')

/// language title
const headerText1 = document.querySelector('.home_text1')
const headerText2 = document.querySelector('.home_text2')
const headerText3 = document.querySelector('.home_text3')
const headerText4 = document.querySelector('.home_text4')
const headerText5 = document.querySelector('.home_text5')
const headerText6 = document.querySelector('.home_text6')
const headerText7 = document.querySelector('.home_text7')
const headerText8 = document.querySelector('.home_text8')
const headerText9 = document.querySelector('.home_text9')
const headerText10 = document.querySelector('.home_text10')
const headerText11 = document.querySelector('.home_text11')
const headerText0 = document.querySelector('.home_text0')
const headerText18 = document.querySelector('.home_text18')
const headerText19 = document.querySelector('.home_text19')


btns.forEach(e => {
    e.addEventListener('click', () => {
      const til = e.getAttribute("lang")
      headerText1.textContent = translate[til].text1
      headerText2.textContent = translate[til].text2
      headerText3.textContent = translate[til].text3
      headerText4.textContent = translate[til].text4
      headerText5.textContent = translate[til].text5
      headerText6.textContent = translate[til].text6
      headerText7.textContent = translate[til].text7
      headerText8.textContent = translate[til].text8
      headerText9.textContent = translate[til].text9
      headerText10.textContent = translate[til].text10
      headerText11.textContent = translate[til].text11
      headerText0.textContent = translate[til].text0
      headerText18.textContent = translate[til].text18
      headerText19.textContent = translate[til].text19
    }) });


var translate = {
   uz: {
   text1: "Uy",
   text2: "Biz haqimizda",
   text3: "Bog'lanish",
   text4: "Matnni o'zgartirish uchun ikki marta bosing",
   text5: "Ushbu paragrafga uslub berish uchun ushbu paragrafni tanlang, so'ngra uning uslublarini tahrir qiling",
   text6: "Ushbu havolani o'ng paneldagi sozlamalar yorlig'ida tahrirlang",
   text7: "Sinf nima?",
   text8: "Sinf shunchaki element nomi emas balki siz yaratgan sarlavha bo'lib siz xuddi shinday",
   text9: "uslubda bo'lishini hohlagan boshqa elementlarga qo'shishingiz mumkin E'tibor ",
   text10: "bering agar siz ushbu paragrafni tanlab uni o'zgartirishingiz u shunday bo'ladi",
   text11: "Quyidagi paragrafga ham ta'sir qiladichunki ular bir xil sinfga ega.",
   text0: "Ota-onalar va matnni tekislash",
   text18: "Hozirga qadar siz veb-pdizayin oddiy qilib aytganda qutilar ichidagi matn va rasmlari bo'lgan bir",
   text19: "qator qutilar ekanligini payqagan bo'lishingiz mumkin Ushbu matnning asosiy elementini O'ngga 2"
  },
  
english: {
text1: "Home",
text2: "About",
text3: "Contact",
text4: "Double click text to change it",
text5: "To style this paragraph , select this paragraph, then edit its styles in the  Style tab br on the right side of the Designer.",
text6: "Edit this link in the settings tab in the right panel",
text7: "What is a Class?",
text8: "A  Class is more than just the name of an element, it is a title you create that",
text9: "can be added to other elements that you'd like to be styled the same way",
text10: "Notice that if you select this paragraph, and change it, it will effect the",
text11: "paragraph below as well, since they have the same Class.",
text0: "Parents, and text alignment",
text18: "By now you may have noticed that web design, simply put, is a series of boxes",
text19: "inside of boxes with text and images inside of them. Try selecting the parent"
}
}
