# ⚡ LearnFlow - AI-Powered Learning Platform

A modern online learning platform with course management, progress tracking, and an AI-powered chatbot assistant to help learners discover the perfect courses.

![LearnFlow](https://img.shields.io/badge/LearnFlow-AI--Powered-orange) ![License](https://img.shields.io/badge/license-MIT-blue) ![Status](https://img.shields.io/badge/status-production--ready-green)

## 🎯 Features

- **🎓 Course Management**: Browse and enroll in structured video courses
- **📊 Progress Tracking**: Track your learning progress with visual indicators
- **🔒 Sequential Learning**: Videos unlock sequentially as you complete lessons
- **🤖 AI Chatbot Assistant**: Get personalized course recommendations and answers
- **📱 Responsive Design**: Works seamlessly on desktop and mobile
- **👤 User Authentication**: Register, login, and manage your profile
- **🎨 Modern UI**: Clean, dark-themed interface with smooth animations

## 🏗️ Architecture

### Frontend (Vercel)
- **Tech Stack**: HTML5, CSS3, Vanilla JavaScript
- **Features**: Static hosting, fast loading, no build process required
- **Deployment**: Vercel (automatic deployments from GitHub)

### Backend (Render)
- **Tech Stack**: Node.js, Express, Axios
- **Features**: REST API, CORS enabled, secure API proxy
- **Deployment**: Render (Node.js web service)

### AI Integration
- **Provider**: Anthropic Claude API
- **Model**: Claude 3 Haiku
- **Security**: API keys stored in environment variables (never exposed to frontend)

## 📁 Project Structure

```
learnflow_00/
├── frontend/              # Frontend files (Vercel)
│   ├── index.html        # Main HTML file
│   ├── css/
│   │   └── style.css     # Styles with dark theme
│   └── js/
│       ├── app.js        # Main application logic
│       ├── chat.js       # AI chatbot widget
│       └── data.js       # Course data
├── server/               # Backend files (Render)
│   ├── index.js          # Express server
│   ├── package.json      # Dependencies
│   └── .env.example      # Environment variables template
├── learnflow/            # Original files (legacy)
├── .gitignore           # Git ignore rules
├── README.md            # This file
└── DEPLOYMENT.md        # Detailed deployment guide
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- Python 3+ (for local frontend server)
- Anthropic API key (for chatbot functionality)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/Kavya-Hugar/Learning-Platform.git
cd Learning-Platform
```

2. **Setup Backend**
```bash
cd server
npm install
# Create .env file with your API key
echo "ANTHROPIC_API_KEY=your_key_here" > .env
node index.js
```
Backend runs on: `http://localhost:5000`

3. **Setup Frontend** (new terminal)
```bash
cd frontend
python -m http.server 3000
```
Frontend runs on: `http://localhost:3000`

4. **Access the Application**
- Open `http://localhost:3000` in your browser
- Click the chat widget (bottom-right) to interact with the AI assistant

## 🌐 Live Deployment

### Frontend (Vercel)
- **URL**: [Your Vercel URL]
- **Status**: 🟢 Live
- **Deployed from**: `frontend/` directory

### Backend (Render)
- **URL**: [Your Render URL]
- **Status**: 🟢 Live
- **Deployed from**: `server/` directory

## 📖 Available Courses

1. **Complete JavaScript Mastery** ⚡
   - Category: Programming
   - Level: Beginner
   - Duration: 18 hours
   - Rating: 4.9★

2. **React & Next.js: Full Stack** ⚛️
   - Category: Programming
   - Level: Intermediate
   - Duration: 24 hours
   - Rating: 4.8★

3. **UI/UX Design Fundamentals** 🎨
   - Category: Design
   - Level: Beginner
   - Duration: 12 hours
   - Rating: 4.7★

4. **Python for Data Science** 🐍
   - Category: Data Science
   - Level: Beginner
   - Duration: 22 hours
   - Rating: 4.9★

5. **Docker & Kubernetes** 🐳
   - Category: DevOps
   - Level: Intermediate
   - Duration: 16 hours
   - Rating: 4.8★

6. **Product Management 101** 📊
   - Category: Business
   - Level: Beginner
   - Duration: 10 hours
   - Rating: 4.6★

## 🤖 AI Chatbot Features

The AI chatbot assistant can help you with:
- **Course Discovery**: Find courses based on your interests and skill level
- **Recommendations**: Get personalized course suggestions
- **Information**: Learn about course content, prerequisites, and outcomes
- **Guidance**: Receive learning path recommendations

### How to Use
1. Click the chat widget in the bottom-right corner
2. Type your question or request
3. Get instant AI-powered responses

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `server/` directory:

```env
ANTHROPIC_API_KEY=sk-ant-your_api_key_here
PORT=5000
```

### Frontend Configuration

Edit `frontend/js/chat.js` to change the backend URL:

```javascript
const CHAT_API_URL = 'http://localhost:5000/api/chat'; // Local
// or
const CHAT_API_URL = 'https://your-backend.onrender.com/api/chat'; // Production
```

## 📝 Deployment Guide

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Quick Deployment Summary

**Backend (Render)**:
1. Connect GitHub repository to Render
2. Set Root Directory to `server`
3. Add `ANTHROPIC_API_KEY` environment variable
4. Deploy

**Frontend (Vercel)**:
1. Connect GitHub repository to Vercel
2. Set Root Directory to `frontend`
3. Deploy

## 🔒 Security

- ✅ API keys stored in environment variables
- ✅ Backend proxies API requests (keys never exposed to frontend)
- ✅ CORS enabled for secure cross-origin requests
- ✅ No sensitive data committed to Git

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- LocalStorage for data persistence

### Backend
- Node.js
- Express.js
- Axios (HTTP client)
- dotenv (Environment variables)
- CORS (Cross-Origin Resource Sharing)

### AI/ML
- Anthropic Claude 3 Haiku API
- Natural language processing for course recommendations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Kavya Hugar**

- GitHub: [@Kavya-Hugar](https://github.com/Kavya-Hugar)
- Project: [Learning-Platform](https://github.com/Kavya-Hugar/Learning-Platform)

## 🙏 Acknowledgments

- Course content and structure inspired by modern online learning platforms
- AI powered by Anthropic Claude
- Icons and emojis for visual enhancement

## 📞 Support

If you have any questions or need help with deployment:
- Check the [DEPLOYMENT.md](DEPLOYMENT.md) guide
- Open an issue on GitHub
- Contact the author

## 🎉 Future Enhancements

- [ ] User reviews and ratings
- [ ] Course certificates
- [ ] Payment integration
- [ ] Instructor dashboard
- [ ] Advanced AI features (learning analytics)
- [ ] Mobile app (React Native)
- [ ] Video hosting integration
- [ ] Discussion forums

---

Made with ❤️ by Kavya Hugar
