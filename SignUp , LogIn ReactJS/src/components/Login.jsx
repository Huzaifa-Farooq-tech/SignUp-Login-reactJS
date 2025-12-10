import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users"));

    const storedUser = storedUsers.find((u)=>u.email === email)

    if (!storedUser) {
      setMessage("No user found. Please sign up first.");
      return;
  }
  
 
    if (email === storedUser.email && password === storedUser.password) {
      setMessage(`Welcome back, ${storedUser.Username}!`);

        // Clear input fields
      setEmail("");
      setPassword("");
      return;
    }
   
  // If we reach here, credentials are wrong
  setMessage("Incorrect email or password.");
  }

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">

      <form onSubmit={handleLogin} className="w-full max-w-md bg-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-700 space-y-6">

        <h2 className="text-4xl font-extrabold text-white text-center mb-4 tracking-tight">Login Your Account</h2>
        <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="w-full px-5 py-3 border border-gray-600 bg-gray-700 rounded-xl placeholder-gray-400 text-white focus:ring-4 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"/>
        <br />

        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="w-full px-5 py-3 border border-gray-600 bg-gray-700 rounded-xl placeholder-gray-400 text-white focus:ring-4 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"/>
        <br />

        <p  className="text-sm text-red-400 mt-2">{message}</p>

        <button className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5">Login</button>
      </form>
    </div>
    </>
  );
}

export default Login;
