const config = {
  siteName: "BMH",
  lang: "en",
  apiURL: process.env.NEXT_PUBLIC_BACKEND_API_URL ?? "",
  dateFormat: "YYYY-MM-DD",
  dateFormatReadable: "MMM D, YYYY",
  dateTimeFormatReadable: "MMM D YYYY, HH:mm",
  dateTimeFormatReadableAmPm: "MMM D YYYY, HH:mm A",
  timeFormat: "HH:mm",
  themeColorCode: "#20519E",
  DEFAULT_LOCALE: "en-EN",
  DEFAULT_CURRENCY: "SEK",
};

export default config;
