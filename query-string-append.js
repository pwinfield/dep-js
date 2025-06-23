window.onload = () => {
  const link = document.getElementById('67d21fe151ed7');

  if (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link navigation

      const url = new URL(link.href);

      const queryString = window.location.search;
      if (queryString) {
        const currentParams = new URLSearchParams(queryString);
        currentParams.forEach((value, key) => {
          url.searchParams.set(key, value); // Merge or override query params
        });
      }

      console.log('Redirecting to:', url.toString());
      window.location.href = url.toString(); // Manually navigate
    });
  } else {
    console.warn('Link not found');
  }
}