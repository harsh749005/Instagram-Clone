import { useState } from 'react';
import axios from 'axios';
import instaLogo from '../../assets/images/logo/instagram.png';
import facebookLogo from '../../assets/images/logo/facebook.png'
function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    username: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{

      console.log('Sign up attempted with:', formData);
      let response = await axios.post("http://localhost:3000/signup",formData)
      if(response.data.status){
        console.log(response.data.message);
      }
      else{
        console.log(response.data.message);
      }
      
    }catch(error){
      console.log("Signup failed:",error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[350px] space-y-4">
        {/* Sign Up Form Card */}
        <div className="bg-black border border-gray-700 p-8 rounded">
          {/* Instagram Logo */}
          <h1 className="text-center mb-8">
            <img
              src={instaLogo}
              alt="Instagram"
              className="h-12 mx-auto"
            />
          </h1>

          <h2 className="text-center text-gray-400 font-semibold text-lg mb-6">
            Sign up to see photos and videos from your friends.
          </h2>

          <button
            type="button"
            className="w-full bg-[#0095F6] text-white py-1.5 rounded font-semibold flex items-center justify-center gap-2 mb-4"
          >
            <img 
              src={facebookLogo}
              alt="Facebook Icon" 
              className="w-4 h-4"
            />
            Log in with Facebook
          </button>

          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-500 text-sm font-semibold">OR</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="text"
              placeholder="Email"
              className="w-full px-2 py-1.5 bg-black border border-gray-700 rounded text-sm text-white"
              value={formData.email}
              onChange={(e) => setFormData({...formData,email:e.target.value})}
            />
            
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-2 py-1.5 bg-black border border-gray-700 rounded text-sm text-white"
             value={formData.fullName}
             onChange={(e) => setFormData({...formData,fullName:e.target.value})}
            />

            <input
              type="text"
              placeholder="Username"
              className="w-full px-2 py-1.5 bg-black border border-gray-700 rounded text-sm text-white"
              value={formData.username}
              onChange={(e) => setFormData({...formData,username:e.target.value})}
            />
            
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-2 py-1.5 bg-black border border-gray-700 rounded text-sm text-white pr-16"
                value={formData.password}
                onChange={(e)=>setFormData({...formData,password:e.target.value})}
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

            <p className="text-xs text-gray-400 text-center mt-4">
              People who use our service may have uploaded your contact information to Instagram.{' '}
              <a href="#" className="text-[#0095F6]">Learn More</a>
            </p>

            <p className="text-xs text-gray-400 text-center mt-4">
              By signing up, you agree to our{' '}
              <a href="#" className="text-[#0095F6]">Terms</a>,{' '}
              <a href="#" className="text-[#0095F6]">Privacy Policy</a> and{' '}
              <a href="#" className="text-[#0095F6]">Cookies Policy</a>.
            </p>

            <button
              type="submit"
              className="w-full bg-[#0095F6] text-white py-1.5 rounded font-semibold mt-4"
            >
              Sign up
            </button>
          </form>
        </div>

        {/* Login Link Card */}
        <div className="bg-black border border-gray-700 p-4 text-center">
          <p className="text-white">
            Have an account?{' '}
            <a href="#" className="text-[#0095F6] font-semibold">
              Log in
            </a>
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