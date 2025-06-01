# 🌟 React + Vite Portfolio Template

This is a **developer portfolio template** built with **React + Vite**, following **Atomic Design principles**. It includes **custom hooks**, **context-based language and theme switching (English/Spanish + Light/Dark)**, and **FontAwesome icons** for social links and tech skills.

Designed to be **easily customizable** so anyone can quickly set up and showcase their personal projects, skills, and contact info.

> 💻 Built with love using modern best practices
> 🎨 UI Design by ChatGPT

---

## 🚀 Features

- ⚛️ **React + Vite** for fast development and performance  
- 🧬 **Atomic Design** architecture for scalable components  
- 🌐 **Language toggle** (English / Spanish) via React Context  
- 🌗 **Light / Dark mode** switch with global context  
- 🧠 **Custom hooks** for clean and reusable logic  
- 🎨 Styled with Tailwind CSS (optional, depending on your implementation)  
- 📦 Uses **FontAwesome** for social and tech icons  

---

## 📁 Project Structure

```text
src/
├── assets/                # Static files (images, fonts, data, etc.)
├── components/            # Shared atomic design components
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
├── context/               # Theme and language context providers
├── hooks/                 # Custom React hooks
├── pages/                 # Portfolio sections (Home, About, Projects, etc.)
├── data/                  # JSON or JS files for projects, skills, etc.
├── App.jsx
└── main.jsx
```

---

## 🌐 Language & Theme Context

- `LanguageContext` manages **English** and **Spanish** strings.  
- `ThemeContext` toggles between **light** and **dark** modes.  
- Wrap your app with both providers to use them globally.

---

## 🎨 Customization

1. **Clone the repo:**

   ```bash
   git clone https://github.com/laloptk/bilingual-themed-portfolio.git
   cd bilingual-themed-portfolio
   npm install
   ```

2. **Update content:**
   - Modify data in `/assets/data` for:
     - Experience
     - Projects
     - Skills

3. **Add your icons:**
   - Use [FontAwesome](https://fontawesome.com/icons) icons in social links and tech skills.
   - Example:
     ```jsx
     <FontAwesomeIcon icon={faGithub} />
     ```

4. **Run the project:**

   ```bash
   npm run dev
   ```

---

## 📦 Dependencies

- `react`, `react-dom`  
- `vite`  
- `@fortawesome/react-fontawesome`  
- `@fortawesome/free-brands-svg-icons`  
- `@fortawesome/free-solid-svg-icons`  

---

## 🛠️ Built With

- [React](https://react.dev/)  
- [Vite](https://vite.dev/)  
- Context API  
- [FontAwesome](https://docs.fontawesome.com/v5/web/use-with/react)  
- [Atomic Design](https://atomicdesign.bradfrost.com/)  
- [Tailwind CSS](https://tailwindcss.com/) (optional)

---

## 🤝 Contributing

This template is open for contributions. Feel free to fork and make it your own!

---

## 📄 License

MIT License. Free for personal or commercial use.

---

## 📸 Preview

![preview](./assets/screenshot.png)

---

## 📬 Contact

Feel free to connect via [LinkedIn](https://www.linkedin.com/in/eduardo-sanchez-hidalgo/) or [email](mailto:laloptk@gmail.com).

---

## 🧠 Credits

- UI Design: ChatGPT (prompt engineered by @laloptk)  
- Dev: [Eduardo Sanchez Hidalgo](https://github.com/laloptk)