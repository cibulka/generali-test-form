// import the original type declarations
import 'i18next';
// import all namespaces (for the default language, only)
import common from '../../i18n/cs/common.json';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    resources: {
      common: typeof common;
    };
    // other
  }
}
