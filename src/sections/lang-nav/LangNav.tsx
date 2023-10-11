import { Link } from 'react-router-dom';

import { useAppContext } from '../../App.context';
import { useLangOptions } from '../../utils/useLangOptions';

import { StyledLangNav } from './LangNav.styled';

export function LangNav() {
  const { lang } = useAppContext();
  const langOptions = useLangOptions(lang);
  return (
    <StyledLangNav>
      <ul>
        {langOptions.map((opt) => {
          const isCurrent = opt.value === lang;
          return (
            <li key={opt.value}>
              {isCurrent ? (
                <strong>{opt.label}</strong>
              ) : (
                <Link to={`/${opt.value}`}>{opt.label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </StyledLangNav>
  );
}
