# 👋 Hello, Petr Cibulka here!

This is my test assignment for Generali Česká pojišťovna. [Read the brief](https://github.com/cibulka/generali-test-form/tree/main/public/generali-brief.pdf).

# Install & Run

Project is made with `create-react-app`, as instructed. To run it locally:

```
npm install
npm start
```

# Features

<details>
    <summary>Internationalization (i18n)</summary>
    <br />

Form contains language switcher, so it made sense to create localized version for each of the options. Each version is available on its respective link: `/cs`, `/en` and `/sk`. The base link is automatically redirected to the default language (which is Czech).

The routing is handled by [react-router-dom](https://reactrouter.com/en/main).

For the actual translation of the keys I use [react-i18next](https://react.i18next.com/), which is a fully type-safe solution. The dictionaries for the translations are placed in the `/i18N` folder as JSON files (which ensures the compatibility with external tools such as [Locize.com](https://locize.com)).

</details>

<details>
    <summary>Form validation</summary>
    <br />

Validation of the form is handled by the [yup](https://github.com/jquense/yup) library that offers easy extension API and powerful TypeScript support.

</details>

<details>
    <summary>Phone number</summary>
    <br />

Phone numbers are always a tricky thing to handle. 😊 Different phone-codes, different lengths, some people are used to adding non-numeric characters to them (such as pluses, brackets, etc.) and more.

This is the compromise I've chosen: - The phone pattern is chosen by the language of the UI (both phone code and the length) - User input is masked to conventional formatting of the phone numbers (with phone code, plus and brackets) to remove ambiguity - Phone mask allows numeric characters only - Phone code is appended to the final value

There are certain shortcomings with this solution: - User can not have different phone-codes than their chosen language version; For example users with Czech UI can not have British phone-code - User can use cell phone only (both Slovakia and UK have different lengths of landlines depending on the region)

... but I hope that for the purpose of the excercise this is enough. 😊

</details>

<details>
    <summary>MUI customization</summary>
    <br />

The brief slightly adjusted the default color palette of MUI, namely:

- Color of the submit button
- Color of selected menu options

The brief does not show all the possible states of the UI, so I've decided to adjust the MUI theme as I saw fit.

</details>

# 👨‍💻 More about me

Visit my site on [www.cibulka.codes](https://www.cibulka.codes) or [download my resumé](https://www.cibulka.codes/en/cv.pdf). Thank you!
