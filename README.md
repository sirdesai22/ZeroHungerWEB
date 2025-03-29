# 🍽️ Zero Hunger

A Next.js application that connects restaurants with NGOs to reduce food wastage and help those in need. Restaurants can list surplus food, and NGOs can purchase it at 20% cost to distribute to the needy. The platform includes gamification elements to encourage contributions and improve social impact.

## 🌍 Problem We Are Solving

Every day, restaurants have surplus food that often goes to waste. At the same time, many NGOs are working to provide food to the underprivileged. Our platform bridges this gap by:

- Allowing **restaurants** to post surplus food available at the end of the day.
- Enabling **NGOs** to browse and purchase the food at **20% of the cost**.
- Reducing food wastage while ensuring food reaches those who need it most.
- Implementing **gamification** to encourage participation.

## 🚀 Features

- 🏢 **Restaurant Listings**: Restaurants can post surplus food details.
- 🏥 **NGO Access**: NGOs can browse and purchase food at a discounted rate.
- 🎮 **Gamification & Leaderboard**: Users are ranked based on contributions.
- 📢 **Shareable Status**: NGOs and restaurants can showcase their impact.
- 🔐 **Secure Authentication**: User accounts with role-based access.
- 🌐 **Responsive UI**: Works on all devices with a seamless experience.

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL, Supabase
- **Authentication**: Supabase OAuth
- **Gamification**: Custom ranking algorithm

## 🏗️ Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/sirdesai22/ZeroHungerWEB
   ```
2. Navigate to the project directory:
   ```sh
   cd ZeroHungerWEB
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables in a `.env.local` file:
   ```sh
   DATABASE_URL=your_database_url
   NEXTAUTH_SECRET=your_secret
   ```
5. Run the development server:
   ```sh
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) to see the app in action.

## 🎯 How It Works

1. **Restaurants**: Post available surplus food with quantity and price.
2. **NGOs**: Browse listings, purchase food at 20% cost, and distribute it.
3. **Leaderboard**: Earn points for contributions and rise in rankings.
4. **Sharing**: Users can share their impact on social media.

## 🤝 Contributing

We welcome contributions! If you have suggestions or improvements:

- Fork the repository
- Create a new branch
- Make changes and submit a pull request

---

**Let's fight food wastage together and make a difference! 🍽️❤️**
