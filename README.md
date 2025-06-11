# PetPal - Pet Management System

PetPal is a comprehensive pet management application designed to help pet owners track and manage all aspects of their pets' health, care, and appointments.

![PetPal Dashboard](./dashboard.png)

## 🐾 Features

### User Authentication and Profiles
- **User Registration & Login**: Secure account creation and authentication
- **Profile Management**: Update personal information and preferences
- **Password Reset**: Self-service password recovery

### Pet Management
- **Add & Manage Pets**: Store comprehensive pet information
- **Pet Profiles**: Track species, breed, age, and other details
- **Photo Upload**: Add images to easily identify your pets

### Health Records
- **Vet Visit Tracking**: Record and manage veterinary appointments
- **Medication Management**: Track medications, dosages, and schedules
- **Vaccination Records**: Monitor immunization history and due dates
- **Weight & Growth Tracking**: Chart your pet's development over time

### Appointments
- **Schedule Management**: Create and manage vet appointments
- **Calendar Integration**: View all upcoming events in one place
- **Reminders**: Get alerts for upcoming appointments

### Feeding Schedule
- **Meal Planning**: Create and manage feeding routines
- **Portion Control**: Track food amounts and dietary needs

### Dashboard & Reporting
- **Centralized Dashboard**: Quick overview of all pet information
- **Upcoming Events**: See scheduled appointments and reminders
- **Export Functionality**: Download pet records for offline use or sharing

### Care Provider Management
- **Veterinarian Directory**: Store contact information for all your pet care providers
- **Provider Association**: Link providers to specific pet records

### Settings & Preferences
- **Notification Settings**: Configure how and when you receive alerts
- **Theme Preferences**: Customize the application's appearance

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/petpal.git
cd petpal/client
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Backend Setup
The client application requires a backend API running at `http://localhost:5000`. See the backend repository for setup instructions.

## 🛠️ Technology Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) (React framework)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Authentication**: JWT with HTTP-only cookies

### Development Tools
- **Package Manager**: npm/yarn
- **Linting**: ESLint
- **Build Tool**: Turbopack (Next.js)

## 📁 Project Structure

```
client/
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable UI components
│   ├── contexts/      # React contexts (Auth, etc.)
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API service functions
│   ├── styles/        # Global styles
│   └── utils/         # Utility functions
├── .gitignore
├── eslint.config.mjs  # ESLint configuration
├── jsconfig.json      # JavaScript configuration
├── next.config.mjs    # Next.js configuration
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## 🔒 Authentication

PetPal uses a secure authentication system with:
- JWT tokens stored in HTTP-only cookies
- Protected routes requiring authentication
- Role-based access control (Admin, Veterinarian, Pet Owner)

## 🧩 Key Components

### AuthContext
Provides authentication state and functions throughout the application:
- User information
- Login/logout functionality
- Role-based permission checks

### API Services
Modular service functions for API communication:
- `apiService.js`: Core HTTP request handling
- `petService.js`: Pet-related API endpoints
- `appointmentService.js`: Appointment management
- `healthRecordService.js`: Health record operations
- `authService.js`: Authentication endpoints

### Protected Routes
Components that restrict access to authenticated users only, redirecting unauthenticated users to the login page.

### Error Boundaries
Components that catch JavaScript errors and display fallback UI to prevent the entire application from crashing.

## Testing

Run the test suite with:
```bash
npm test
# or
yarn test
```

## Deployment

The application can be built for production using:
```bash
npm run build
# or
yarn build
```

Then start the production server:
```bash
npm start
# or
yarn start
```

For optimal deployment, we recommend using [Vercel](https://vercel.com), which is designed for Next.js applications.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE.md) file for details.
