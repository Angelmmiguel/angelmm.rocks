import App from 'next/app';
import Router from 'next/router';

Router.events.on('routeChangeComplete', path => {
  window.fathom('trackPageview', { path });
})

export default App;
