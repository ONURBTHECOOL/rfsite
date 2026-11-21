const searchInput = document.getElementById("site-search");
const searchForm = document.querySelector(".site-search");
const searchResults = document.querySelectorAll(".search-result");
const noResults = document.querySelector(".no-results");

function filterResults() {
    const query = searchInput.value.trim().toLowerCase();
    let matches = 0;

    searchResults.forEach((link) => {
        if (!query) {
            link.hidden = true;
            return;
        }

        const searchableText = `${link.textContent} ${link.dataset.search}`.toLowerCase();
        const isMatch = searchableText.includes(query);
        link.hidden = !isMatch;
        if (isMatch) matches++;
    });

    noResults.hidden = !query || matches !== 0;
}

searchInput.value = "";
window.history.replaceState({}, "", window.location.pathname);

searchInput.addEventListener("input", filterResults);
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    const nextUrl = new URL(window.location.href);
    if (query) {
        nextUrl.searchParams.set("q", query);
    } else {
        nextUrl.searchParams.delete("q");
    }
    window.history.replaceState({}, "", nextUrl);
    filterResults();
});

window.addEventListener("pageshow", () => {
    searchInput.value = "";
    window.history.replaceState({}, "", window.location.pathname);
    filterResults();
});

filterResults();