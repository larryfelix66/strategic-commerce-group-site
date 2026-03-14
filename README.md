# Strategic Commerce Group Website

Deploy-ready React/Vite website package for strategiccommercegroup.com.

## Run locally

1. Install Node.js 18+.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

## Build for production

```bash
npm install
npm run build
```

The production build will be created in the `dist` folder.

## Deploy on Vercel

1. Create a GitHub repository.
2. Upload all files from this folder.
3. Import the repo into Vercel.
4. Deploy.
5. In Vercel, add your custom domain: `strategiccommercegroup.com`.
6. In GoDaddy DNS, point:
   - `A` record for `@` to `76.76.21.21`
   - `CNAME` for `www` to `cname.vercel-dns.com`

## Notes

- The wholesale portal and supplier forms are visual sections only right now.
- Catalog request is marked as coming soon.
- Replace placeholder brand entries with official logos over time.
