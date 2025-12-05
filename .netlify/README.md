# Netlify Deployment

This directory contains Netlify-specific configuration files.

## Deployment Instructions

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect the settings from `netlify.toml`

3. **Build Settings** (should be auto-detected):
   - Build command: `npm run build`
   - Publish directory: `build/client`
   - Node version: `18`

4. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   # Initialize (first time only)
   netlify init
   
   # Deploy to production
   netlify deploy --prod
   ```

### Option 3: Deploy via Drag & Drop

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `build/client` folder

## Configuration Files

- `netlify.toml` - Main Netlify configuration
- `netlify/functions/server.ts` - Serverless function for SSR (optional)

## Deployment Modes

### SPA Mode (Default - Recommended for Netlify)

The current configuration uses SPA mode, which works best with Netlify's static hosting. All routes redirect to `index.html` for client-side routing.

### SSR Mode (Optional)

If you need SSR support:

1. Uncomment the SSR redirect in `netlify.toml`:
   ```toml
   [[redirects]]
     from = "/*"
     to = "/.netlify/functions/server"
     status = 200
   ```

2. Comment out the SPA redirect:
   ```toml
   # [[redirects]]
   #   from = "/*"
   #   to = "/index.html"
   #   status = 200
   ```

3. Ensure `netlify/functions/server.ts` is properly configured

**Note**: SSR on Netlify requires Netlify Functions and may have cold start delays. SPA mode is recommended for better performance.

## Environment Variables

If you need environment variables:

1. Go to Site settings → Environment variables
2. Add your variables
3. They will be available in your functions and build process

## Troubleshooting

### Build Fails

- Check Node version (should be 18+)
- Ensure all dependencies are in `package.json`
- Check build logs in Netlify dashboard

### SSR Not Working

- Verify `netlify/functions/server.ts` exists
- Check that redirects in `netlify.toml` are correct
- Ensure build output includes server files

### Static Assets Not Loading

- Verify `publish` directory is set to `build/client`
- Check redirect rules for assets
- Ensure assets are in the correct location

## Support

For more information, see:
- [Netlify Documentation](https://docs.netlify.com/)
- [React Router Documentation](https://reactrouter.com/)

