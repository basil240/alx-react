import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  logoStyle: {
  },
  headerStyle: {
  },
});

const Header = () => {
  return (
    <div className={css(styles.headerStyle)}>
      <img className={css(styles.logoStyle)} src="logo.png" alt="Logo" />
    </div>
  );
};

export default Header;