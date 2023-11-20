import { getAllNotificationsByUser } from '../schema/notifications';

const notificationsData = [
];

describe('getAllNotificationsByUser', () => {
  test('returns notifications for a specific user', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const expectedNotifications = [
      {
        id: '5debd764a7c57c7839d722e9',
        author: {
          id: '5debd764a7c57c7839d722e8',
          name: 'John Doe',
        },
        content: 'Some notification content',
      },
    ];

    const result = getAllNotificationsByUser(userId);

    expect(result).toEqual(expect.arrayContaining(expectedNotifications));
  });
});