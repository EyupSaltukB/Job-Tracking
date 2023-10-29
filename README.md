# Job Tracking System (React + Vite)

Redux Toolkit ile İş Ekleme ve İş Listesinden oluşan iki sayfalı bir İş Takip ekranı oluşturdum.
Sayfalama yapısı için react-router-dom kullandım. 
Redux Toolkit'in sunduğu createSlice() metoduyla birlikte bir slice oluşturup
action ile reducers'lara buradan erişir ve buradan yönetiriz.
Store dosyamızı oluştururken toolkitten gelen configureStore() metodunu kullanırız.
Bu da kod karmaşasını önler ve daha az kod yazmamıza olanak sağlar.
Axios ile yaptığım Get/Post isteklerinde kendi oluşturduğum db.json dosyasını kullandım.
Stillendirme için ise kendi SCSS dosyamı oluşturdum. 


# Kütüphaneler

- react-router-dom
- react-toastify
- sass
- axios
- json-server
- @reduxjs/toolkit
- react-redux
- uuid
- react-icons

# Ekran Görüntüleri

![](/public/images/jt-1.png)
![](/public/images/jt-2.png)
![](/public/images/jt-3.png)

# Video



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
