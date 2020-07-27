window.onload = function () {
    var sjs = SimpleJekyllSearch({
        searchInput: document.getElementById('searchbar'),
        resultsContainer: document.getElementById('search-results'),
        json: '/search.json',
        searchResultTemplate: '<a href="{url}" target="_blank">{title}</a>',
        noResultsText: ''
    });

    /* hack ios safari unfocus */
    if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent))
        document.body.firstElementChild.tabIndex = 1;

    var $searchbar = document.getElementById("searchbar");
    var $postLabel = document.getElementById("posts-label");
    var $searchResults = document.querySelector(".search-results");

    $searchbar.addEventListener("click", function (e) {
        $searchResults.style.display = null;
        e.stopPropagation();
    }, false);

    $searchbar.addEventListener("mouseleave", function () {
        document.body.onclick = searchCollapse;
    });

    var searchCollapse = function (e) {
        $searchResults.style.display = "none";
        document.body.onclick = null;
    };
}
