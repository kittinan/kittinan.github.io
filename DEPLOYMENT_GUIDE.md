# Manual Deployment Guide

## Step 1: Deploy Cloudflare Worker

### 1.1 Navigate to worker directory
```bash
cd /home/tun/git/kittinan.github.io/worker
```

### 1.2 Logout from current account
```bash
npx wrangler logout
```

### 1.3 Deploy and select correct account
```bash
npx wrangler deploy
```

**IMPORTANT**: When prompted to select an account, use arrow keys to select **Tunxedge@gmail.com's Account** and press Enter.

### 1.4 Set your Gemini API Key
After successful deployment, set your API key as a secret:
```bash
npx wrangler secret put API_KEY
```

When prompted, paste your actual Gemini API key (not the PLACEHOLDER_API_KEY).

### 1.5 Note the Worker URL
After deployment, you'll see a URL like:
```
https://kittinan-portfolio-worker.YOUR-SUBDOMAIN.workers.dev
```

Copy this URL - you'll need it for the next step.

---

## Step 2: Update Frontend Configuration

### 2.1 Update the API endpoint
Edit the file: `/home/tun/git/kittinan.github.io/services/geminiService.ts`

Change line 5 from:
```typescript
const API_ENDPOINT = "http://localhost:8787";
```

To:
```typescript
const API_ENDPOINT = "https://kittinan-portfolio-worker.YOUR-SUBDOMAIN.workers.dev";
```

Replace `YOUR-SUBDOMAIN` with the actual subdomain from your worker URL.

---

## Step 3: Deploy to GitHub Pages

### 3.1 Install dependencies (if not already done)
```bash
cd /home/tun/git/kittinan.github.io
npm install
```

### 3.2 Build the frontend
```bash
npm run build
```

### 3.3 Commit and push changes
```bash
git add .
git commit -m "Deploy portfolio with Cloudflare Worker backend"
git push origin main
```

### 3.4 Enable GitHub Pages
1. Go to your repository on GitHub: https://github.com/kittinan/kittinan.github.io
2. Click on **Settings** tab
3. Scroll to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. The workflow will automatically run and deploy your site

---

## Step 4: Verify Deployment

### 4.1 Wait for GitHub Actions
- Go to the **Actions** tab in your repository
- Wait for the "Build and Deploy to GitHub Pages" workflow to complete (green checkmark)

### 4.2 Test your website
1. Visit: https://kittinan.github.io/
2. Try these commands in the terminal:
   - `help` - should show available commands
   - `about` - should fetch live data from Gemini API
   - `projects` - should fetch your GitHub projects
   - `ask what is AI?` - should get AI response

### 4.3 Check browser console
- Open browser DevTools (F12)
- Check Console tab for any errors
- Network tab should show successful requests to your worker URL

---

## Troubleshooting

### Worker not responding
- Check that API_KEY secret is set: `npx wrangler secret list`
- View worker logs: `npx wrangler tail`

### CORS errors
- The worker already has CORS headers configured
- Make sure you're using the correct worker URL in `geminiService.ts`

### GitHub Pages not updating
- Check Actions tab for deployment errors
- Ensure GitHub Pages is set to use "GitHub Actions" as source
- Clear browser cache and hard refresh (Ctrl+Shift+R)

---

## Quick Reference

**Worker directory**: `/home/tun/git/kittinan.github.io/worker`

**Key files to update**:
- `services/geminiService.ts` - Update API_ENDPOINT with your worker URL
- `worker/wrangler.toml` - Worker configuration (already configured)

**Important commands**:
```bash
# Deploy worker
cd worker && npx wrangler deploy

# Set API key
npx wrangler secret put API_KEY

# Build frontend
npm run build

# Push to GitHub
git add . && git commit -m "Update" && git push
```
