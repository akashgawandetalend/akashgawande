# Akash Gawande - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, skills, and projects as a Senior Data Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Perfect display on desktop, tablet, and mobile devices
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Interactive**: Smooth scrolling, hover effects, and dynamic animations
- **Contact Form**: Easy way for recruiters to get in touch
- **Resume Download**: One-click resume download

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── resume.pdf          # Your resume (to be added)
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid and Flexbox
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 📦 Setup Instructions

### Local Development

1. **Download or Clone** this repository to your computer

2. **Add Your Resume**: 
   - Place your PDF resume in the same folder as `index.html`
   - Name it `resume.pdf` or update the link in `index.html`

3. **Open in Browser**:
   - Simply double-click `index.html` to open in your browser
   - Or right-click → Open with → Your preferred browser

4. **Customize** (optional):
   - Edit `index.html` to update content
   - Modify `styles.css` for styling changes
   - Update colors in CSS variables at the top of `styles.css`

## 🌐 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click "+" icon → "New repository"
3. Name it: `your-username.github.io` (replace with your GitHub username)
4. Make it **Public**
5. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**
1. Click "uploading an existing file"
2. Drag and drop all your files (`index.html`, `styles.css`, `script.js`, `resume.pdf`)
3. Scroll down and click "Commit changes"

**Option B: Using Git Command Line**
```bash
# Navigate to your portfolio folder
cd path/to/portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section (left sidebar)
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes
7. Your site will be live at: `https://your-username.github.io`

## 🌐 Deployment to Netlify

### Option 1: Drag and Drop (Easiest)

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up / Log in
3. Drag your entire portfolio folder to the Netlify dashboard
4. Your site is live! Netlify will give you a URL like `random-name.netlify.app`
5. You can customize the domain in Site settings → Domain management

### Option 2: Connect to GitHub

1. Push your code to GitHub (see above)
2. Go to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Choose "GitHub"
5. Authorize Netlify
6. Select your portfolio repository
7. Click "Deploy site"
8. Your site will be live with automatic deployments on every push!

## 🎨 Customization Guide

### Update Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Secondary brand color */
    --accent-color: #3b82f6;       /* Accent color */
    /* ... more colors */
}
```

### Update Content

1. **Personal Information**: Edit the hero section in `index.html`
2. **Skills**: Update the skills sections with your technologies
3. **Experience**: Modify the timeline items
4. **Projects**: Update project cards with your work
5. **Contact**: Update email, phone, LinkedIn URLs

### Add Your Photo

Replace the placeholder in the About section:

```html
<div class="about-image">
    <img src="your-photo.jpg" alt="Akash Gawande">
</div>
```

## 📱 Social Media Links

Update these in `index.html`:

- LinkedIn: Replace `https://www.linkedin.com/in/akash-gawande`
- GitHub: Add your GitHub profile URL
- Email: `akashgawande341@gmail.com`
- Phone: `+91 8767437169`

## ✨ Future Enhancements

Suggested improvements you can add:

1. **Dark Mode**: Toggle between light and dark themes
2. **Blog Section**: Share your technical articles
3. **Testimonials**: Add recommendations from colleagues
4. **Analytics**: Integrate Google Analytics
5. **Contact Form Backend**: Use Formspree or EmailJS for working contact form
6. **Animations**: Add more scroll animations with libraries like AOS
7. **Project Filters**: Filter projects by technology
8. **Multi-language**: Support for multiple languages

## 🔧 Troubleshooting

### Resume Download Not Working
- Ensure `resume.pdf` is in the same folder as `index.html`
- Check the file name matches in the download link

### Images Not Showing
- Verify image paths are correct
- Use relative paths like `./images/photo.jpg`

### Site Not Deploying on GitHub Pages
- Ensure repository name is exactly `username.github.io`
- Check that `index.html` is in the root folder
- Wait 5-10 minutes after enabling Pages

### Mobile Menu Not Working
- Clear browser cache
- Ensure `script.js` is properly linked
- Check browser console for errors (F12 → Console)

## 📊 Performance Tips

1. **Optimize Images**: 
   - Use WebP format
   - Compress images before uploading
   - Recommended size: Under 200KB each

2. **Minify Files** (for production):
   - Use online tools to minify CSS and JS
   - Reduces load time

3. **Enable Caching**:
   - Configure through hosting provider
   - Improves repeat visit speed

## 🤝 Support

If you need help:
- Check browser console for errors (F12)
- Validate HTML at [W3C Validator](https://validator.w3.org/)
- Test responsiveness at different screen sizes

## 📄 License

This portfolio template is free to use. Feel free to customize it for your own use!

## 🎯 SEO Checklist

- [x] Descriptive title tag
- [x] Meta description
- [x] Semantic HTML (header, nav, section, footer)
- [x] Alt text for images (when you add them)
- [x] Mobile-friendly design
- [x] Fast loading time
- [ ] Add robots.txt (optional)
- [ ] Add sitemap.xml (optional)
- [ ] Connect Google Search Console (recommended)

## 📧 Contact

**Akash Devendra Gawande**
- Email: akashgawande341@gmail.com
- Phone: +91 8767437169
- LinkedIn: [linkedin.com/in/akash-gawande](https://www.linkedin.com/in/akash-gawande)
- Location: Yavatmal, Maharashtra, India

---

**Built with ❤️ by Akash Gawande**

*Last Updated: 2024*
