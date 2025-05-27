import { useState } from 'react';
import instaLogo from '../../assets/images/logo/instagram.png';
import facebookLogo from '../../assets/images/logo/facebook.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import useUser from "../../context/useUser";
function App() {
  const {setUser} = useUser();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login attempted with:', formData);
    const response = await axios.post("http://localhost:3000/login",formData,{withCredentials:true});
    if(response.status === 200){
      setUser(response.data.user.username);
      // console.log(response.data.user.username);
      navigate("/");
    }
    else{
      console.log("Incorrect Email or password");
    }

  };


  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[350px] space-y-4">
        {/* Login Form Card */}
        <div className="bg-black border border-gray-700 p-8 rounded">
          {/* Instagram Logo */}
          <h1 className="text-center mb-8">
            <img
                src={instaLogo}
alt="Instagram"
              className="h-12 mx-auto"
            />
          </h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Phone number, username, or email"
                className="w-full px-2 py-1.5 bg-black border border-gray-700 rounded text-sm text-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-2 py-1.5 bg-black border border-gray-700 rounded text-sm text-white pr-16"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              {formData.password && (
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-semibold text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#0095F6] text-white py-1.5 rounded font-semibold"
            >
              Log in
            </button>

            <div className="flex items-center gap-4 my-4">
              <div className="flex-1 h-px bg-gray-700"></div>
              <span className="text-gray-500 text-sm font-semibold">OR</span>
              <div className="flex-1 h-px bg-gray-700"></div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 text-[#385185] font-semibold"
            >
              <img 
                src={facebookLogo}
alt="Facebook Icon" 
                className="w-4 h-4"
              />
              Log in with Facebook
            </button>

            <div className="text-center mt-4">
              <a href="#" className="text-xs text-[#385185]">
                Forgot password?
              </a>
            </div>
          </form>
        </div>

        {/* Sign Up Card */}
        <div className="bg-black border border-gray-700 p-4 text-center">
          <p className="text-white">
            Dont have an account?{' '}
            <Link  to="/signup" className="text-[#0095F6] font-semibold">
              Sign up
            </Link>
          </p>
        </div>

        {/* Get the app */}
        <div className="text-center space-y-4">
          <p className="text-white">Get the app.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-32">
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                alt="Get it on Google Play"
                className="w-full"
              />
            </a>
            <a href="#" className="w-32">
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                alt="Get it from Microsoft"
                className="w-full"
              />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center text-xs text-gray-500 space-y-4">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a href="#">Meta</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">Help</a>
            <a href="#">API</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Locations</a>
            <a href="#">Instagram Lite</a>
            <a href="#">Threads</a>
            <a href="#">Contact Uploading & Non-Users</a>
            <a href="#">Meta Verified</a>
          </div>
          <div>
            <select className="bg-transparent text-gray-500">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
            <span className="ml-4">© 2024 Instagram from Meta</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;