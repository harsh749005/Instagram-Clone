// components/PrivateRoute.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        let response = await axios.get("http://localhost:3000/", { withCredentials: true });
        console.log(response);
        setLoading(false);
      } catch (error) {
        navigate("/login");
      }
    };
    checkAuth();
  }, [navigate]);

  return loading ? <p>Loading...</p> : children;
}

PrivateRoute.propTypes = {
    children : PropTypes.any.isRequired
}