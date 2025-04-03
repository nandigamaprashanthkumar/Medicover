import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const Profile = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <Button title="Open Menu" onPress={toggleMenu} />
      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu}>
        <Text style={styles.menuItem}>Home</Text>
        <Text style={styles.menuItem}>My Profile</Text>
        <Text style={styles.menuItem}>Notifications</Text>
        <Text style={styles.menuItem}>If you are Doctor</Text>
        <Text style={styles.menuItem}>Settings</Text>
        <Text style={styles.menuItem}>Logout</Text>
      </HamburgerMenu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 18,
    color: 'white',
    marginVertical: 15,
  },
});

export default Profile;