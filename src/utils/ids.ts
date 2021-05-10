export default function generateId(): number {
  return Math.round(Date.now() * Math.random());
}
