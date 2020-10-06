// BaseUrl settings
if (localStorage.getItem('baseUrl') === null) {
    localStorage.setItem("baseUrl", "http://localhost:8102/");
}

let baseUrl = localStorage.getItem("baseUrl");

function setBaseUrl(u) {
    if (!u.endsWith("/")) u += "/";
    baseUrl = u;
    localStorage.setItem("baseUrl", u);
}

function wsUrl() {
    return baseUrl.replace("http", "ws") + "ws";
}

function dimensionUrl() {
    return baseUrl + "dimension";
}
