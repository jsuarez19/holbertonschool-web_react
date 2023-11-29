import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  let tr = undefined;

  if (isHeader === true) {
    if (textSecondCell === null) {
      tr = <th colSpan='2'>{textFirstCell}</th>; // Only one cell
    } else { // Two cells
      tr = (
        <React.Fragment>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </React.Fragment>
      );
    }
  }
  if (isHeader === false) {
    tr = (
      <React.Fragment>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </React.Fragment>
    );
  }

  return <tr>{tr}</tr>;
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

export default CourseListRow;
