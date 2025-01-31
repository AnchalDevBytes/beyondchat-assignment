# BeyondChats AI Chatbot UI

A modern, user-friendly platform for businesses to set up and integrate AI-powered chatbots into their websites.

Note: This is an assignment project given by BeyondChats from Internshala. For now, it is completely static with mocked data and built based on imagination as per the description. The application is fully responsive, and I will gradually implement functionality.

## Features & Workflow

### 1. Onboarding
![Login](/public/login.png)
![Login](/public/otpVerify.png)

   - Users enter their full name, email address and password or Option to "Continue with Google" for faster signup
   - A 6-digit verification code is sent to the user's email and user must enter the code to verify their email for genuine registrations

### 2. Organization Setup
![Organization Setup](/public/setupOrg.png)

After successful registration, users set up their organization:

   - Company name, Website URL, Detailed company description
   - Automatic meta-description fetching from the provided URL or Manual write the description.
   - The platform analyzes your website to train the chatbot.

### 3. Website Scanning
![Website Scanning](/public/scanning.png)

   - Automatically discovers all pages on your website
   - Shows real-time scanning status for each page:
   - Scraped: Successfully analyzed
   - Pending: Currently being scanned
   - Detected: Page found but not yet processed
   - Click on any page to view scraped content chunks, each chunk represents training data for the chatbot.
   - Continue setup while scanning runs in background
   - Wait for completion before proceeding
   - View detailed scanning statistics

### 4. Chatbot Integration
![Chatbot Integration](/public/chatbotIntegration.png)

The final phase offers multiple integration options:

   - Preview button opens your website with chatbot
   - Feedback bar for reporting issues
   - Real-world testing environment

![Chatbot Integration](/public/integrationType.png)

   - Direct Code Integration:
     ```html
     <script>
       window.CHATBOT_CONFIG = {
         apiKey: 'your-api-key',
         organizationId: 'your-org-id'
       };
     </script>
     <script src="https://cdn.example.com/chatbot.js"></script>
     ```
   - Developer Email Instructions:
     - Send integration guide to your development team
     - Step-by-step implementation instructions
     - Technical documentation included

![Chatbot Integration](/public/success.png)

   - Test integration status
   - Success confirmation with confetti animation
   - Access to admin panel and chatbot interface
   - Social media sharing options

   - "Explore Admin Panel" for configuration
   - "Start Talking to Your Chatbot" for testing
   - Share success on social media platforms

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with React 18
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for modern, responsive design
- **Icons**: [React Icon](https://react-icons.github.io/react-icons/) for beautiful, customizable icons
- **TypeScript**: For type-safe code and better developer experience
- **Deployment**: [Vercel](https://beyondchat-assignment-orpin.vercel.app/)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnchalDevBytes/beyondchat-assignment.git
   cd beyondchat-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

The application is optimized for deployment on [Vercel](https://beyondchat-assignment-orpin.vercel.app/)
