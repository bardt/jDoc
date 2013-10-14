/**
 * @description Reset paragraph properties to default
 * @param el
 * @private
 */
jDoc.Engines.RTF.prototype._resetParagraphProperties = function (el) {
    el.css = {};
    el.dimensionCSSRules = {};

    return el;
};