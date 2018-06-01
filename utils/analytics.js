import galite from 'ga-lite';

export const initGA = () => {
  galite('create', 'UA-47913999-14', 'auto');
}

export const logPageView = () => {
  galite('set', 'page', window.location.pathname);
  galite('send', 'pageview', window.location.pathname);
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    galite('send', 'event', category, action);
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    galite('send', 'exception', {
      exDescription: description,
      exFatal: fatal
    });
  }
}
