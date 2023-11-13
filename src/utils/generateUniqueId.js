export default function generateUniqueId() {
  const timestamp = new Date().getTime();
  const random = Math.random().toString(36).substring(2, 16); // Generate a random string

  return `${timestamp}-${random}`;
}
