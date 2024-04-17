import { createSlice } from '@reduxjs/toolkit';
import themeConfig from '@/theme.config';

const initialState = {
    // isDarkMode: false,
    sidebar: false,
    theme: themeConfig.theme,
    menu: themeConfig.menu,
    layout: themeConfig.layout,
    animation: themeConfig.animation,
    navbar: themeConfig.navbar,
    locale: themeConfig.locale,
    languageList: [
        { code: 'zh', name: 'Chinese' },
        { code: 'da', name: 'Danish' },
        { code: 'en', name: 'English' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'el', name: 'Greek' },
        { code: 'hu', name: 'Hungarian' },
        { code: 'it', name: 'Italian' },
        { code: 'ja', name: 'Japanese' },
        { code: 'pl', name: 'Polish' },
        { code: 'pt', name: 'Portuguese' },
        { code: 'ru', name: 'Russian' },
        { code: 'es', name: 'Spanish' },
        { code: 'sv', name: 'Swedish' },
        { code: 'tr', name: 'Turkish' },
        { code: 'ae', name: 'Arabic' },
    ],
};

const themeConfigSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        toggleMenu(state, { payload }) {
            payload = payload || state.menu; // vertical, collapsible-vertical, horizontal
            localStorage.setItem('menu', payload);
            state.menu = payload;
        },
        toggleLayout(state, { payload }) {
            payload = payload || state.layout; // full, boxed-layout
            localStorage.setItem('layout', payload);
            state.layout = payload;
        },
        toggleAnimation(state, { payload }) {
            payload = payload || state.animation; // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
            payload = payload?.trim();
            localStorage.setItem('animation', payload);
            state.animation = payload;
        },
        toggleNavbar(state, { payload }) {
            payload = payload || state.navbar; // navbar-sticky, navbar-floating, navbar-static
            localStorage.setItem('navbar', payload);
            state.navbar = payload;
        },
        toggleSidebar(state) {
            state.sidebar = !state.sidebar;
        },
        resetToggleSidebar(state) {
            state.sidebar = false;
        },
    },
});

export const { toggleMenu, toggleLayout, toggleAnimation, toggleNavbar, toggleSidebar, resetToggleSidebar } = themeConfigSlice.actions;

export default themeConfigSlice.reducer;
