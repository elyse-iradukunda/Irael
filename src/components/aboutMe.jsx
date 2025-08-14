
import React from "react";
import profilePic from "../assets/profile.jpg"; 

function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-16">
   
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">👋 Hey there, I'm Elyse Iradukunda!</h1>
        <p className="text-xl text-gray-600">
          🚀💻 Junior Front-End Developer crafting beautiful web experiences with React ⚛️
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
      
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <img src={profilePic} alt="Elyse Iradukunda" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 flex-1">
          <h2 className="text-2xl font-semibold mb-4">✨ About Me</h2>
          <p className="text-gray-700 mb-4">
            🎯 Junior Front-End Developer focused on building sleek, responsive, and user-friendly web apps. 🚀 Always curious, always learning — diving deep into modern web tech & best practices. 💡 Excited to contribute to open source and collaborate on cool projects!
          </p>

          <h3 className="text-xl font-semibold mb-2">🛠️ Tech Stack & Tools</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>🌐 Front-End: ⚛️ React | 📜 JavaScript | 🧱 HTML5 | 🎨 CSS3</li>
            <li>🧰 Tools & Platforms: 🐙 Git & GitHub | 🧑‍💻 VS Code | 📦 npm | 🔧 Webpack</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">🌱 Currently Leveling Up</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>📘 Advanced React patterns</li>
            <li>📦 Redux for state management</li>
            <li>🔙 Node.js basics for backend integration</li>
          </ul>
        </div>
      </div>

     
      <div className="bg-white shadow-lg rounded-xl p-6 text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4">📫 Connect with Me</h2>
        <p className="text-gray-700 mb-2">
          Email: <a href="mailto:ellycreativity8@gmail.com" className="text-blue-500">ellycreativity8@gmail.com</a>
        </p>
        <p className="text-gray-700 mb-2">Phone: +250 798454108</p>
        <p className="text-gray-700">
          Instagram: <a href="https://instagram.com/Ellyse_photographer" className="text-blue-500">@Ellyse_photographer</a>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
