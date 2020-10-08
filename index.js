function updateUrlQueryParameter(url, key, value) {
    const re = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
    const separator = url.indexOf('?') !== -1 ? '&' : '?';

    if (url.match(re)) {
        return url.replace(re, `$1${key}=${value}$2`);
    }
    return `${url + separator + key}=${value}`;
}

function getUrlQueryParameterValue(key) {
    const query = window.location.search.substring(1);
    const pairs = query.split('&');

    for (let i = 0; i < pairs.length; i += 1) {
        const pair = pairs[i].split('=');
        if (pair[0] === key) {
        return pair[1];
        }
    }
    return false;
}

module.exports.getUrlQueryParameterValue = getUrlQueryParameterValue();
module.exports.updateUrlQueryParameter = updateUrlQueryParameter();
