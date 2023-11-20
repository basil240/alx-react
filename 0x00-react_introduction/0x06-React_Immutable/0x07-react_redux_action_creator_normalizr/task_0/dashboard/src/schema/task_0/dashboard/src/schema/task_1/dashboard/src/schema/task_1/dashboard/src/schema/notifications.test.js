import { normalizeNotificationsData } from './notifications';

describe('normalizeNotificationsData', () => {
  const data = [
    {
      id: '5debd7642e815cd350407777',
      author: {
        id: '5debd764a7c57c7839d722e9',
        name: 'John Doe',
      },
      context: {
        guid: 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41',
        content: 'Some message content',
      },
    },
  ];

  const normalizedData = normalizeNotificationsData(data);

  test('has correct result array', () => {
    expect(normalizedData.result).toEqual(expect.arrayContaining(['5debd7642e815cd350407777']));
  });

  test('has correct users entity', () => {
    const userId = '5debd764a7c57c7839d722e9';
    expect(normalizedData.entities.users[userId].name).toEqual('John Doe');
  });

  test('has correct messages entity', () => {
    const messageGuid = 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41';
    expect(normalizedData.entities.messages[messageGuid].content).toEqual('Some message content');
  });

  test('has correct notifications entity', () => {
    const notificationId = '5debd7642e815cd350407777';
    expect(normalizedData.entities.notifications[notificationId].author).toEqual('5debd764a7c57c7839d722e9');
  });
});