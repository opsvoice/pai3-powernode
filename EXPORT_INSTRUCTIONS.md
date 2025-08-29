# PAI3 Power Node - Export Instructions

## Files you need to copy:

### 1. Main GHL HTML File
File: `powernode-ghl-final.html`
- This is your complete landing page
- Copy the entire content from the file viewer

### 2. React Component (if needed)
File: `src/pages/PowerNodeLanding.tsx`
- This is the React version
- Copy if you want to use with React

### 3. Package.json (for React setup)
File: `package.json`
- Contains all dependencies
- Copy if using React version

## Steps to recreate locally:

1. Create a new folder on your computer
2. Create these files and paste the content
3. For React version: run `npm install` then `npm run dev`
4. For HTML version: just open the HTML file in browser

## Git Setup (run in your local terminal):
```bash
git init
git add .
git commit -m "Initial commit: PAI3 Power Node website"
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## Deploy Options:
- **Vercel**: Connect your GitHub repo for auto-deploy
- **Netlify**: Drag & drop the built files
- **GitHub Pages**: Enable in repository settings