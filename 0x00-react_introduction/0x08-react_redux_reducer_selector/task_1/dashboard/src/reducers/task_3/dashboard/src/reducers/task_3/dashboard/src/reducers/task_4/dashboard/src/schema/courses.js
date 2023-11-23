import { schema } from 'normalizr';

// Define the course schema
export const courseSchema = new schema.Entity('courses');

// Define the courses schema
export const coursesSchema = new schema.Array(courseSchema);

// Normalize the data
export const coursesNormalizer = data => normalize(data, coursesSchema);