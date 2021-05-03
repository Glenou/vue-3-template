export default function generateId(): string {
  return `${Date.now() * Math.random()}`;
}
