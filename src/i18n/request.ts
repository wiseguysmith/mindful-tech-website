/**
 * i18n Request Configuration
 * 
 * As your CTO mentor, I'm showing you how to set up next-intl for bilingual routing.
 * This configuration handles locale detection and routing for our EN/ES site.
 */

import { getRequestConfig } from 'next-intl/server';
import { config } from '@/lib/config';

const isSupportedLocale = (
  value: string
): value is (typeof config.i18n.locales)[number] => {
  return (config.i18n.locales as readonly string[]).includes(value);
};

export default getRequestConfig(async ({ locale }: { locale?: string }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !isSupportedLocale(locale)) {
    // Default to English if invalid locale
    locale = config.i18n.defaultLocale;
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'America/Costa_Rica', // Costa Rica timezone
    now: new Date(),
    locale, // include locale to satisfy RequestConfig
  };
});
