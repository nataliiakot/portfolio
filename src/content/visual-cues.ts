export const projectEmoji: Record<string, string> = { cleanly: '🫧', 'hr-boost': '👥', fleeto: '🚚', 'nova-bank': '💳', 'fitness-app': '💪' };
export const expertiseEmoji = ['🎨', '🔎', '🧩', '✨', '🤝'];
export function headingEmoji(text: string): string {
  if (/problem|challenge/i.test(text)) return '🎯';
  if (/role|scope/i.test(text)) return '👩‍💻';
  if (/research|insight/i.test(text)) return '🔎';
  if (/outcome|takeaway|reflection/i.test(text)) return '📈';
  if (/future/i.test(text)) return '🌱';
  if (/system|scale|structure|organize/i.test(text)) return '🧩';
  if (/conversation|guidance/i.test(text)) return '💬';
  if (/access|security|approval/i.test(text)) return '🔐';
  return '💡';
}
