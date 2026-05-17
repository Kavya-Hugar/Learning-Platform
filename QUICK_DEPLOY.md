# 🚀 Quick Deployment Guide - Make LearnFlow Live

Follow these exact steps to deploy LearnFlow to production.

## 📋 Prerequisites

- GitHub account (already connected)
- Anthropic API key from [console.anthropic.com](https://console.anthropic.com/)
- 5-10 minutes for deployment

---

## 🌐 Step 1: Deploy Backend to Render

### 1.1 Create Render Account
1. Go to [https://render.com](https://render.com)
2. Click "Sign Up" and sign up with GitHub
3. Authorize Render to access your GitHub repositories

### 1.2 Create New Web Service
1. Click "New +" button (top right)
2. Select "Web Service"
3. Click "Connect" next to `Kavya-Hugar/Learning-Platform`

### 1.3 Configure Render Service

**Basic Settings:**
- **Name**: `learnflow-backend`
- **Region**: Leave as default (closest to you)
- **Branch**: `master`

**Build & Deploy Settings:**
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `node index.js`
- **Root Directory**: `server`

**Environment Variables** (CRITICAL):
Click "Advanced" → "Add Environment Variable"

Add these TWO variables:
```
Name: ANTHROPIC_API_KEY
Value: sk-ant-your_actual_api_key_here

Name: PORT
Value: 5000
```

**Important**: Get your API key from [console.anthropic.com](https://console.anthropic.com/)

### 1.4 Deploy
1. Click "Create Web Service" at the bottom
2. Wait for deployment (2-3 minutes)
3. You'll see a URL like: `https://learnflow-backend.onrender.com`

### 1.5 Test Backend
Visit: `https://learnflow-backend.onrender.com/health`
Should return: `{"status":"ok","timestamp":"..."}`

**Copy your backend URL** - you'll need it for the frontend!

---

## 🎨 Step 2: Deploy Frontend to Vercel

### 2.1 Create Vercel Account
1. Go to [https://vercel.com](https://vercel.com)
2. Click "Sign Up" and sign up with GitHub
3. Authorize Vercel to access your GitHub repositories

### 2.2 Import Project
1. Click "Add New" → "Project"
2. Find and select `Kavya-Hugar/Learning-Platform`
3. Click "Import"

### 2.3 Configure Vercel Project

**Project Settings:**
- **Project Name**: `learnflow` (or your preference)
- **Framework Preset**: `Other`
- **Root Directory**: `frontend`
- **Build Command**: (leave empty)
- **Output Directory**: `./`
- **Install Command**: (leave empty)

**Environment Variables** (Optional but recommended):
Click "Environment Variables" → "Add"

```
Name: CHAT_API_URL
Value: https://learnflow-backend.onrender.com/api/chat
```

Replace with your actual Render backend URL from Step 1.5!

### 2.4 Deploy
1. Click "Deploy" button
2. Wait for deployment (30-60 seconds)
3. You'll see a URL like: `https://learnflow.vercel.app`

### 2.5 Test Frontend
1. Visit your Vercel URL
2. Click the chat widget (bottom-right)
3. Send a message to test the AI chatbot

---

## 🔧 Step 3: Update Chat API URL (if needed)

If you didn't set the environment variable in Vercel, update the file:

1. Go to GitHub
2. Edit `frontend/js/chat.js`
3. Change line 3:
```javascript
const CHAT_API_URL = 'https://learnflow-backend.onrender.com/api/chat';
```
4. Commit and push

---

## ✅ Step 4: Verify Everything Works

### Check Backend
- Visit: `https://your-backend.onrender.com/health`
- Should return JSON with status "ok"

### Check Frontend
- Visit: `https://your-frontend.vercel.app`
- Should load the LearnFlow homepage
- Chat widget should appear in bottom-right

### Check Chatbot
- Click chat widget
- Send: "What courses do you have for beginners?"
- Should get AI response about courses

---

## 🎉 You're Live!

Your LearnFlow platform is now live at:
- **Frontend**: Your Vercel URL
- **Backend**: Your Render URL

### Share Your URLs:
- Frontend: `https://learnflow.vercel.app` (your actual URL)
- Backend: `https://learnflow-backend.onrender.com` (your actual URL)

---

## 🐛 Troubleshooting

### Chatbot not working?
- Check Render logs for API errors
- Verify ANTHROPIC_API_KEY is set correctly
- Ensure backend URL is correct in chat.js

### Frontend not loading?
- Check Vercel deployment logs
- Verify Root Directory is set to `frontend`
- Ensure files are in correct GitHub structure

### CORS errors?
- Backend should have CORS enabled (already configured)
- Check that frontend URL is allowed

### Need help?
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for detailed guide
- Open an issue on GitHub

---

## 📱 Next Steps

1. **Customize**: Add your own courses, branding, and features
2. **Monitor**: Check Render and Vercel dashboards for analytics
3. **Scale**: Upgrade plans as needed for more users
4. **Promote**: Share your live platform with others!

---

**Estimated time**: 10-15 minutes
**Difficulty**: Easy (follow steps exactly)
**Cost**: Free tiers available on both platforms

Good luck! 🚀
