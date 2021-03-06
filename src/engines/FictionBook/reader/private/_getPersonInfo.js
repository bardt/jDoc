/**
 *
 * @param xml
 * @return {Object}
 * @private
 */
jDoc.engines.FictionBook.prototype._getPersonInfo = function (xml) {
    var i,
        nodes = jDoc.DOM.children(xml),
        len = nodes.length,
        info = {};

    for (i = len - 1; i >= 0; i--) {
        /**
         * firstName, middleName, lastName
         * @type {string}
         */
        if (nodes[i].localName) {
            info[nodes[i].localName.replace(/-\w+$/, '') + "Name"] = nodes[i].textContent || "";
        }
    }

    return info;
};