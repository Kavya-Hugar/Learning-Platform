# LearnFlow Deployment Guide

This guide explains how to deploy the LearnFlow platform with a secure full-stack architecture.

## 📋 Project Structure

```
learnflow_00/
├── frontend/           # Frontend for Vercel deployment
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── app.js
│       ├── chat.js
│       └── data.js
├── server/            # Backend for Render deployment
│   ├── index.js
│   ├── package.json
│   └── .env.example
├── learnflow/         # Original files (can be ignored)
└── .gitignore
```

## 🚀 Deployment Overview

- **Frontend**: Deployed on Vercel (static hosting)
- **Backend**: Deployed on Render (Node.js server)
- **AI Chatbot**: Uses Anthropic API via secure backend proxy

## 🔧 Backend Deployment (Render)

### 1. Create Render Account
- Go to [render.com](https://render.com) and sign up
- Connect your GitHub account

### 2. Create New Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository: `Kavya-Hugar/Learning-Platform`
3. Configure the following settings:

#### Build & Deploy Settings
- **Name**: `learnflow-backend` (or your preferred name)
- **Root Directory**: `server`
- **Build Command**: `npm install`
- **Start Command**: `node index.js`
- **Runtime**: `Node`

#### Environment Variables (CRITICAL)
Add these environment variables in Render Dashboard:

```
ANTHROPIC_API_KEY=your_actual_anthropic_api_key_here
PORT=5000
```

**Important**: 
- Get your Anthropic API key from [console.anthropic.com](https://console.anthropic.com/)
- The API key is required for the AI chatbot to work
- Never commit API keys to GitHub

### 3. Deploy
- Click "Create Web Service"
- Render will build and deploy your backend
- Once deployed, you'll get a URL like: `https://learnflow-backend.onrender.com`

### 4. Test Backend
- Visit: `https://your-backend-url.onrender.com/health`
- Should return: `{"status":"ok","timestamp":"..."}`

## 🌐 Frontend Deployment (Vercel)

### 1. Create Vercel Account
- Go to [vercel.com](https://vercel.com) and sign up
- Connect your GitHub account

### 2. Import Project
1. Click "Add New" → "Project"
2. Select your repository: `Kavya-Hugar/Learning-Platform`
3. Configure the following settings:

#### Project Settings
- **Framework Preset**: Other
- **Root Directory**: `frontend`
- **Build Command**: (leave empty - static files)
- **Output Directory**: `./`
- **Install Command**: (leave empty)

#### Environment Variables (Optional)
Add this to switch between local and production backend:

```
CHAT_API_URL=https://your-backend-url.onrender.com/api/chat
```

### 3. Deploy
- Click "Deploy"
- Vercel will deploy your frontend
- Once deployed, you'll get a URL like: `https://learnflow.vercel.app`

### 4. Update Chat API URL (if needed)
If you didn't set the environment variable, edit `frontend/js/chat.js`:
```javascript
const CHAT_API_URL = 'https://your-backend-url.onrender.com/api/chat';
```

## 🔑 Solving "Model Provider Unreachable" Error

The "Model provider unreachable" error occurs when:
1. The Anthropic API key is not set in Render environment variables
2. The API key is invalid or expired
3. The Anthropic service is temporarily overloaded (external issue)

### Solution:

1. **Add API Key to Render**:
   - Go to your Render service dashboard
   - Settings → Environment Variables
   - Add: `ANTHROPIC_API_KEY=sk-ant-xxxxx`
   - Redeploy the service

2. **Get Valid API Key**:
   - Visit [console.anthropic.com](https://console.anthropic.com/)
   - Create an account or sign in
   - Generate API key in API Keys section
   - Copy the key (starts with `sk-ant-`)

3. **Test Backend Locally** (Optional):
   ```bash
   cd server
   npm install
   echo "ANTHROPIC_API_KEY=your_key_here" > .env
   node index.js
   ```

## 🧪 Local Development

### Backend (Local)
```bash
cd server
npm install
# Create .env file with your API key
echo "ANTHROPIC_API_KEY=your_key_here" > .env
node index.js
```
Backend runs on: `http://localhost:5000`

### Frontend (Local)
```bash
cd frontend
# Using Python
python -m http.server 3000

# Or using Node.js
npx serve
```
Frontend runs on: `http://localhost:3000`

### Test Chatbot
1. Start both servers
2. Open frontend in browser
3. Click chat widget (bottom-right)
4. Send a message to test AI response

## 📝 Post-Deployment Checklist

- [ ] Backend deployed on Render with API key configured
- [ ] Frontend deployed on Vercel
- [ ] Chat API URL updated in frontend (if needed)
- [ ] Test health endpoint: `https://your-backend.onrender.com/health`
- [ ] Test chatbot on live site
- [ ] Verify CORS is working (no console errors)

## 🔒 Security Notes

- ✅ API keys are stored in environment variables (not in code)
- ✅ Backend proxies API requests (keys never exposed to frontend)
- ✅ CORS enabled for secure cross-origin requests
- ✅ .gitignore prevents committing sensitive files

## 🐛 Troubleshooting

### Chatbot not responding
- Check Render logs for API errors
- Verify ANTHROPIC_API_KEY is set correctly
- Ensure backend URL is correct in chat.js

### CORS errors
- Verify backend has CORS enabled (already configured in index.js)
- Check that frontend URL is allowed

### Build errors on Render
- Check that Root Directory is set to `server`
- Verify package.json has correct dependencies
- Check Render build logs

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Anthropic API Documentation](https://docs.anthropic.com)

## 🎯 Quick Start Commands

```bash
# Clone repository
git clone https://github.com/Kavya-Hugar/Learning-Platform.git
cd Learning-Platform

# Setup backend
cd server
npm install
# Add your API key to .env
node index.js

# Setup frontend (new terminal)
cd frontend
python -m http.server 3000
```

---

**Note**: The "Model provider unreachable" error you're seeing is an external issue with the Anthropic API service. Once you deploy the backend with a valid API key in Render environment variables, the chatbot will work correctly.
