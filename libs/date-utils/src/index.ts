type SupportedLanguages = 'en' | 'de';

export function dateTimeToMarkdown(date: Date, locale: SupportedLanguages) {
  const dateTimeStr = date.toLocaleString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
  });

  return `**${dateTimeStr}**`;
}
