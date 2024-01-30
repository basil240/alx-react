// src/schema/notifications.js
import * as notificationsData from '../notifications.json';

export const getAllNotificationsByUser = (userId) => {
  return notificationsData.filter(notification => notification.author.id === userId);
};