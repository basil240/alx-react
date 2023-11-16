import React from 'react';
import CourseListRow from './CourseListRow';

const CourseList = () => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
        <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} />
      </tbody>
    </table>
  );
};

export default CourseList;

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
  };

  NotificationItem.propTypes = {
    id: PropTypes.number.isRequired,
    html: PropTypes.shape({ __html: PropTypes.string }).isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
  };

  const CourseList = ({ listCourses }) => {
    return (
      <table id="CourseList">
        <thead>
          {/* ... */}
        </thead>
        <tbody>
          {listCourses.length > 0 ? (
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))
          ) : (
            <CourseListRow textFirstCell="No course available yet" isHeader={false} />
          )}
        </tbody>
      </table>
    );
  };
  
  CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
  };
  
  CourseList.defaultProps = {
    listCourses: [],
  };
  
  describe('With CourseList containing elements', () => {
    const listCourses = [
      // Add course objects here
    ];
  
    it('renders correctly', () => {
      const wrapper = shallow(<CourseList listCourses={listCourses} />);
      expect(wrapper.exists()).toBe(true);
    });
  });
  
  it('displays "No course available yet" when listCourses is empty', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.text()).toContain('No course available yet');
  });
  
  
  
  
  