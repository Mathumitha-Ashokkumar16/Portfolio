# Customization Guide

This guide will help you personalize your portfolio website.

## 📸 Adding Your Profile Photo

1. **Prepare your photo:**
   - Use a professional headshot or portrait
   - Recommended size: 500x500px or larger (square format works best)
   - Supported formats: JPG, PNG, WebP

2. **Add the photo to your project:**
   - Save your photo as `profile.jpg` or `profile.png`
   - Place it in the `public` folder

3. **Update the About component:**
   - Open `src/components/About.jsx`
   - Find the placeholder div (around line 60)
   - Replace the placeholder with:
   ```jsx
   <img 
     src="/profile.jpg" 
     alt="Mathumitha A"
     className="w-full h-full object-cover"
   />
   ```

## 📄 Adding Your Resume

1. **Prepare your resume:**
   - Save your resume as a PDF file
   - Name it `resume.pdf`

2. **Add to project:**
   - Place `resume.pdf` in the `public` folder
   - The "View Resume" button will automatically work

## 🎨 Customizing Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Change these values for different purple shades
    500: '#a855f7',
    600: '#9333ea',
  },
  accent: {
    // Change these values for different pink shades
    500: '#ec4899',
    600: '#db2777',
  }
}
```

## ✏️ Updating Content

### Personal Information
- **Hero Section**: Edit `src/components/Hero.jsx`
  - Update roles in the TypeAnimation sequence
  - Modify the subtitle

### About Section
- **Bio**: Edit `src/components/About.jsx`
  - Update the paragraphs with your story
  - Modify the stats (Projects, Certifications, etc.)

### Skills
- **Add/Remove Skills**: Edit `src/components/Skills.jsx`
  - Add new skills to the `skillCategories` array
  - Import new icons from `react-icons`

### Projects
- **Add Projects**: Edit `src/components/Projects.jsx`
  - Add new project objects to the `projects` array
  - Update GitHub links
  - Add live demo links

### Certifications
- **Add Achievements**: Edit `src/components/Certifications.jsx`
  - Add new items to the `achievements` array
  - Update dates and descriptions

### Contact Information
- **Update Links**: Edit `src/components/Contact.jsx`
  - Update email, GitHub, LinkedIn URLs
  - Modify contact form behavior

## 🌐 Deployment

### Deploy to Netlify
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings are already configured in `netlify.toml`
6. Click "Deploy site"

### Deploy to Vercel
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

## 🔧 Advanced Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

### Modifying Animations
- All animations use Framer Motion
- Edit `variants` objects in each component
- Adjust `duration`, `delay`, and `ease` values

### Changing Fonts
1. Update Google Fonts link in `index.html`
2. Modify font families in `tailwind.config.js`

## 📱 Testing

- **Desktop**: Test on Chrome, Firefox, Safari
- **Mobile**: Test responsive design on different screen sizes
- **Dark Mode**: Toggle and test both themes
- **Forms**: Test contact form submission
- **Links**: Verify all external links work

## 🐛 Common Issues

### Images not loading
- Ensure images are in the `public` folder
- Use `/image-name.jpg` (with leading slash)

### Animations not working
- Check browser console for errors
- Ensure Framer Motion is installed

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check for syntax errors in modified files

## 💡 Tips

- Keep your content concise and impactful
- Use high-quality images
- Test on multiple devices
- Update projects regularly
- Keep contact information current

---

Need help? Check the main README.md or create an issue on GitHub!
