/* Shared analytics for every page. Loaded with: <script src="/js/analytics.js" defer></script>
   Edit only this file to change the ID or add tracking; all pages pick it up. */
(function () {
  var ID = 'G-ZQR5RJJRTN'; /* replace with your Google Analytics measurement ID */

  /* Skip placeholder ID and local testing so your own visits are not counted */
  if (/X{4,}/.test(ID)) return;
  var h = location.hostname;
  if (h === 'localhost' || h === '127.0.0.1' || h === '' ) return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', ID);
})();