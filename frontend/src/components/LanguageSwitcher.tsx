import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="ms-3">
      {i18n.language === 'sv' ? (
        <button onClick={() => i18n.changeLanguage('en')} className="btn btn-sm btn-outline-dark">
          EN
        </button>
      ) : (
        <button onClick={() => i18n.changeLanguage('sv')} className="btn btn-sm btn-outline-dark">
          SV
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
