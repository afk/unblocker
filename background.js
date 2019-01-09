chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        let url = new URL(details.url)
        if (url.hostname == "wikipedia.org") {
            url.hostname = "en.wikipedia.org" // WikiZero gives error when there is no language
        }

        url.hostname = url.hostname.replace("wikipedia.org", "0wikipedia.org")
                                   .replace("imgur.com", "imgurp.com")
        // Alternatives for imgurp.com: 0imgur.com, filmot.org

        return {redirectUrl: url.toString()}
    },
    {
        urls: [
            "*://*.wikipedia.org/*",
            "*://*.imgur.com/*"
        ]
    },
    ["blocking"]
)