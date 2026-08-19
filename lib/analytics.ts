export const Analytics = {
  trackEvent: (eventName: string, properties?: object) => {
    console.log(`[Analytics] Track: ${eventName}`, properties);
  },
  trackPageView: (url: string) => {
    console.log(`[Analytics] Page View: ${url}`);
  }
};
