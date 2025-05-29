import { createContext, useState} from 'react';
import PropTypes from 'prop-types';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isLogoutModalOpen, setIsLogoutModalOpen }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
