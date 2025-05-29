import { useNavigate } from 'react-router-dom';
import useUser from '../../context/useUser';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const LogoutModal = () => {
  const { isLogoutModalOpen, setIsLogoutModalOpen } = useUser();
  const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
  
  if (!isLogoutModalOpen) return null;
  
   
      if (isLogoutModalOpen) {
        removeCookie('token', { path: '/' });
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      }
    // Only runs when modal opens
  

  return (
    <div className="absolute top-0 left-0 inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-zinc-800 text-white p-6 rounded-xl w-full max-w-sm text-center">
        <h2 className="text-xl font-semibold mb-2">Logging Out</h2>
        <p className="mb-4 text-sm text-gray-300">You need to log back in.</p>
        <button
          onClick={() => {
            setIsLogoutModalOpen(false);
            navigate("/login");
            // optional: redirect to /login
          }}
          className="bg-white text-black font-medium px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
