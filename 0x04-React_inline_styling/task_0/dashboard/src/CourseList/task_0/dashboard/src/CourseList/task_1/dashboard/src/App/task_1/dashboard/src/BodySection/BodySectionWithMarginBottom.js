import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  marginBottomStyle: {
    // Define margin styles
  },
});

const BodySectionWithMarginBottom = ({ children }) => {
  return <div className={css(styles.marginBottomStyle)}>{children}</div>;
};

export default BodySectionWithMarginBottom;