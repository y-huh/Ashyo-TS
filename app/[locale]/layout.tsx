import {NextIntlClientProvider,hasLocale} from "next-intl";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import "./globals.css"
import Header from "@/modules/Header";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <title>Ashyo - Exam</title>
        <link rel="shortcut icon" href="./logo.svg" type="image/x-icon" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale}>
          <Header/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
