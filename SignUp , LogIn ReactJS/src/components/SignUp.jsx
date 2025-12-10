import { useState } from "react";

function SignUp() {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();


     if (!Username || !email || !password || !confirmPassword) {
      setMessage("All fields are required.");
      return;
    }

    const hasUppercase = /[A-Z]/.test(password);
    
     if (password.length < 7 || !hasUppercase) {
      setMessage("Password must be at least 7 characters and contain at least ONE uppercase letter.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    // --- Get existing users from LocalStorage ---
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // --- Check if email already exists ---
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      setMessage("User already exists with this email. Please log in.");
      return;
    }
    // Create new user object 
    const newUser = {  Username,  email,  password, confirmPassword, };

    // Save user to LocalStorage 
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setMessage("Sign Up Successful! You can now log in.");

    // Clear input fields 
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }
  return (
    <>
 <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">

  <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-700 space-y-6">
    <h2 className="text-4xl font-extrabold text-white text-center mb-4 tracking-tight">  Create Your Account</h2>

    <p className="text-center text-gray-400 mb-8">  Start your journey with us today!</p>

    <input   type="text"   name="username"  value={Username}   placeholder="Username"   onChange={(e) => setUsername(e.target.value)}   className="w-full px-5 py-3 border border-gray-600 bg-gray-700 rounded-xl placeholder-gray-400 text-white focus:ring-4 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150" />

    <input   type="email"   name="email"  value={email}   placeholder="Email Address"   onChange={(e) => setEmail(e.target.value)}   className="w-full px-5 py-3 border border-gray-600 bg-gray-700 rounded-xl placeholder-gray-400 text-white focus:ring-4 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150" />

    <input   type="password"   name="password"  value={password}   placeholder="Password"   onChange={(e) => setPassword(e.target.value)}   className="w-full px-5 py-3 border border-gray-600 bg-gray-700 rounded-xl placeholder-gray-400text-white focus:ring-4 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150" />

    <input   type="password"   name="confirmPassword"  value={confirmPassword}   placeholder="Confirm Password"   onChange={(e) => setConfirmPassword(e.target.value)}   className="w-full px-5 py-3 border border-gray-600 bg-gray-700 rounded-xl placeholder-gray-400  text-white focus:ring-4 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150" />
    
    <p className="text-sm text-red-400 mt-2">{message}</p>


    <button   type="submit"   className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5">  Sign Up Now</button>
  </form>
</div>   
    </>
  );
}

export default SignUp;
