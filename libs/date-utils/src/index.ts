import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { de, enUS } from 'date-fns/locale';

type SupportedLanguages = 'en' | 'de';
type LocaleType = typeof de | typeof enUS;

export function dateTimeToMarkdown(date: Date, locale: SupportedLanguages) {
  let timeZone = 'Etc/UTC';
  let dateLocale: LocaleType = de;
  let pattern = 'eeee, MMMM d, h:mm a';

  if (locale === 'de') {
    timeZone = 'Europe/Berlin';
    pattern = 'eeee, dd. MMMM, HH:mm';
  } else if (locale === 'en') {
    timeZone = 'America/New_York';
    dateLocale = enUS;
  }

  const zonedDate = utcToZonedTime(date, timeZone);
  const dateTimeStr = format(zonedDate, pattern, { locale: dateLocale });

  return `**${dateTimeStr}**`;
}
