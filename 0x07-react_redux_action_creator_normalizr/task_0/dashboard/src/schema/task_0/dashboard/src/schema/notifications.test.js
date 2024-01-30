// src/schema/notifications.test.js
import { getAllNotificationsByUser } from './notifications';

const testUserId = '5debd764a7c57c7839d722e9';

test('getAllNotificationsByUser should return correct data', () => {
  const result = getAllNotificationsByUser(testUserId);
  
  // Add your expected data here based on your notifications.json structure
  const expectedData = [
    // ... your expected data here ...
  ];

  expect(result).toEqual(expectedData);
});