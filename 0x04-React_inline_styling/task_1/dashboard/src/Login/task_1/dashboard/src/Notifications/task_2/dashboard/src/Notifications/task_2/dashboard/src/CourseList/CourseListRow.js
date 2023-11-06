import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultRow: {
    // Define styles for default rows
  },
  headerRow: {
    // Define styles for header rows
  },
  thStyle: {
    // Define styles for th elements
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;
  const thStyle = css(styles.thStyle);

  return (
    <tr className={css(rowStyle)}>
      <th className={thStyle}>{textFirstCell}</th>
      <th className={thStyle}>{textSecondCell}</th>
    </tr>
  );
};

export default CourseListRow;