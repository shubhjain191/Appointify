# Appointify 🩺

A full-stack MERN application that streamlines doctor appointment scheduling for patients, enables doctors to manage their schedules and earnings, and empowers administrators to oversee the entire system. Includes secure online payment integration for seamless transactions.

---
![image](https://github.com/user-attachments/assets/4309f3f1-ba4c-4a63-9211-5cad5cd3c924)
![image](https://github.com/user-attachments/assets/d45eb1cc-e589-4af0-8040-ba18b32e3d34)
![image](https://github.com/user-attachments/assets/bd5feaa4-453c-499f-9ee4-e80fb9434e7a)
![image](https://github.com/user-attachments/assets/0c96c66f-7fce-4453-bfc5-9c790030a871)





## ✨ Features

- **Patient Login:**  
  - Create an account and log in.  
  - Book, view, and cancel appointments.  
  - Update profile information.  
  - Pay appointment fees online.  

- **Doctor Login:**  
  - Log in to manage appointments.  
  - Mark appointments as completed or cancel them.  
  - Track earnings and update profile details.  

- **Admin Login:**  
  - Manage doctor profiles, including adding new doctors.  
  - View all appointments and oversee system operations.  

- **Online Payment Gateway:**  
  - Integration with Razorpay for secure payments.  

- **Speciality Filtering:**  
  - Patients can filter doctors by their specialty.  

- **Responsive Design:**  
  - Optimized for desktops, tablets, and mobile devices.  

---

## 🚀 Technologies Used

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Payment Gateways:** Razorpay, Stripe  
- **Image Storage:** Cloudinary  
- **Authentication:** JWT (JSON Web Token)  
- **State Management:** Context API  

---

## 🔧 Installation

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/appointify.git
cd appointify
```

### 2. Install dependencies:

**Frontend (Patient-Facing App):**
```bash
cd frontend
npm install
```

**Admin Panel:**
```bash
cd ../admin
npm install
```

**Backend:**
```bash
cd ../backend
npm install
```

### 3. Set up environment variables:

Create `.env` files in `frontend`, `admin`, and `backend` directories and add the following:

#### **Frontend/.env:**
```plaintext
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=YOUR_RAZORPAY_KEY_ID
```

#### **Admin/.env:**
```plaintext
VITE_BACKEND_URL=http://localhost:4000
```

#### **Backend/.env:**
```plaintext
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
CLOUDINARY_NAME=YOUR_CLOUDINARY_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_SECRET_KEY=YOUR_CLOUDINARY_SECRET_KEY
JWT_SECRET=YOUR_JWT_SECRET
RAZORPAY_KEY_ID=YOUR_RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET=YOUR_RAZORPAY_KEY_SECRET
CURRENCY=INR
ADMIN_EMAIL=YOUR_ADMIN_EMAIL
ADMIN_PASSWORD=YOUR_ADMIN_PASSWORD
PORT=4000
```

### 4. Run the application:

**Frontend (Patient-Facing App):**
```bash
cd frontend
npm run dev
```

**Admin Panel:**
```bash
cd ../admin
npm run dev
```

**Backend:**
```bash
cd ../backend
npm run server
```

Access the application:
- **Frontend:** [http://localhost:3000](http://localhost:3000)  
- **Admin Panel:** [http://localhost:3001](http://localhost:3001)  
- **Backend API:** [http://localhost:4000](http://localhost:4000)  

---

## 📂 Project Structure

```plaintext
appointify/
├── frontend/         # Patient-facing React app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── ...
│   └── ...
├── admin/            # Admin panel React app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── ...
│   └── ...
└── backend/          # Node.js/Express backend
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── ...
```

---

## Development Process

### 1. **Frontend Development (React):**
The user interface was built using React components, including navigation, header, speciality menus, doctor listings, appointment booking forms, profile management, and appointment history. Tailwind CSS was used for styling and responsiveness.

### 2. **Backend Development (Node.js/Express):**
The backend API was developed using Express.js and Node.js.  Routes were created for user authentication, doctor management, appointment booking, and payment processing.

### 3. **Database Integration (MongoDB):**
MongoDB was used to store user data, doctor profiles, and appointment details. Mongoose was used for schema definition and database interaction.

### 4. **Image Management (Cloudinary):**
Cloudinary was integrated for storing and serving images.

### 5. **Payment Gateway Integration:**
   - Implemented Razorpay for secure online transactions.

### 6. **Authentication (JWT):**
JWT was implemented for secure user authentication and authorization.  Middleware was used to protect API routes.

---

## 🙌 Contributing

We welcome contributions to enhance **Appointify**! If you have ideas or improvements, feel free to open an issue or submit a pull request.

---
