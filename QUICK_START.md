# 🚀 Quick Start: Deploy Your Site

## Step 1: Set Up Environment Variables

Before deploying, you need to set up your environment variables.

1. **Get your Formspree endpoint:**
   - Go to [formspree.io](https://formspree.io)
   - Create a free account
   - Create a new form
   - Copy the form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

2. **Get your Calendly URL:**
   - You already have this: `https://calendly.com/mindfultechnology`

## Step 2: Choose Your Hosting Platform

### 🎯 RECOMMENDED: Vercel (Easiest for Next.js)

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Create a repo on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" → Use GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - **Add Environment Variables:**
     - `NEXT_PUBLIC_CALENDLY_URL` = `https://calendly.com/mindfultechnology`
     - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = `https://formspree.io/f/YOUR_FORM_ID`
   - Click "Deploy"
   - **Done!** Your site will be live in 2 minutes

3. **Add Your Domain:**
   - In Vercel dashboard → Settings → Domains
   - Add `mindfultech.services`
   - Follow DNS instructions

---

### Alternative: Netlify

1. **Push code to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub → Select your repo
   - **Build settings:**
     - Build command: `npm run build`
     - Publish directory: `.next`
   - **Add Environment Variables:**
     - `NEXT_PUBLIC_CALENDLY_URL` = `https://calendly.com/mindfultechnology`
     - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = `https://formspree.io/f/YOUR_FORM_ID`
   - Click "Deploy site"

3. **Add Your Domain:**
   - Site settings → Domain management
   - Add custom domain: `mindfultech.services`

---

## Step 3: Test Your Site

After deployment, test:
- ✅ All pages load
- ✅ Forms submit (check Formspree dashboard)
- ✅ Calendly embed works
- ✅ Mobile menu works
- ✅ All links work

---

## 🎉 That's It!

Your site is now live! 

**Need help?** Check `DEPLOYMENT.md` for detailed instructions.


