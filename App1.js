import React, { createContext, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './SignIn';
import Home from './Home';
import Profile from './Profile';

// Tạo AuthContext để quản lý trạng thái đăng nhập
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Màn hình ForgotPassword (để trống)
const ForgotPassword = () => {
  return null; // Để trống theo yêu cầu
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explorer" component={Home} />
      <Tab.Screen name="Account" component={Profile} />
    </Tab.Navigator>
  );
};

const App1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          {isLoggedIn ? (
            <Stack.Screen
              name="Main"
              component={MainTabs}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App1;