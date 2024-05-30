// LanguageContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import en from './locals/en.json';
import ml from './locals/ml.json';

const translations = { en, ml };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const getLanguage = async () => {
            const savedLanguage = await AsyncStorage.getItem('language');
            if (savedLanguage) {
                setLanguage(savedLanguage);
            } else {
                const bestLanguage = RNLocalize.findBestAvailableLanguage(['en', 'ml']);
                setLanguage(bestLanguage?.languageTag || 'en');
            }
        };
        getLanguage();
    }, []);

    const changeLanguage = async (newLanguage) => {
        setLanguage(newLanguage);
        await AsyncStorage.setItem('language', newLanguage);
    };

    const t = (key) => translations[language][key] || key;

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
