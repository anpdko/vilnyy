import React from 'react'
import s from './Translation.module.scss'
import useLocalStorage from '../../hooks/useLocalStorage';
import i18n from '../../translation/i18n'

interface ITranslation {
    className?: string
}

const Translation = ({ className }: ITranslation) => {
    const [language, setLanguage] = useLocalStorage('language', 'en');

    const handleLenguageChange = () => {
        if (language === 'en') {
            i18n.changeLanguage('uk');
            setLanguage('uk');
        } else if (language === 'uk') {
            i18n.changeLanguage('en');
            setLanguage('en');
        }
    };

    const classLang = (langProp: string): string => {
        return language === langProp ? "active" : ""
    }

    return (
        <div onClick={handleLenguageChange} className={`${s.translation} ${className}`}>
            <div className={s.lengs}>
                <span className={s[classLang("uk")]} onClick={() => handleLenguageChange()}>укр</span>/
                <span className={s[classLang("en")]} onClick={() => handleLenguageChange()}>eng</span>
            </div>
        </div>
    );
};
export default Translation