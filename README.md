This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Email Configuration

This project includes a booking API that sends email notifications. To set up email functionality:

1. Copy `.env.local` and update the email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

2. For Gmail, you'll need to:
   - Enable 2-factor authentication
   - Generate an App Password (not your regular password)
   - Use the App Password in EMAIL_PASS

3. For other email providers, update the transporter configuration in `/app/api/booking/route.ts`

## Features

- Responsive car wash website with light theme
- Service booking system with email notifications
- Gallery page for showcasing work
- Navigation bar and footer components

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
