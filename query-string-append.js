const mainContainer = document.getElementById('main');

if (mainContainer) {
  const observer = new MutationObserver((mutationsList, observer) => {
    const link = mainContainer.querySelector('a[href*="https://www.cloudbees.com/contact-us"]');
    if (link) {
      observer.disconnect();
      console.log('Ceros Experience loaded!');
      queryStringAppendFunction(link);
    }
  });

  observer.observe(mainContainer, { childList: true, subtree: true });
}

function queryStringAppendFunction(link) {
  console.log('Link found:', link);

  link.addEventListener('click', function (event) {
    event.preventDefault();

    const url = new URL(link.href);
    const queryString = window.location.search;

    if (queryString) {
      const currentParams = new URLSearchParams(queryString);
      currentParams.forEach((value, key) => {
        url.searchParams.set(key, value);
      });
    }

    console.log('Redirecting to:', url.toString());
    window.location.href = url.toString();
  });
}
