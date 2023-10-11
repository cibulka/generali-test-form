import { Lang } from './constants/i18n';
import { Form } from './sections/form/Form';

import './styles/reset.css';
import './styles/global.css';

import { AppContextWrap } from './App.context';

function App(props: { lang: Lang }) {
  return (
    <AppContextWrap lang={props.lang}>
      <Form />
    </AppContextWrap>
  );
}

export default App;
