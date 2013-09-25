/**
 *
 * @param style
 * @returns {*}
 * @private
 */
jDoc.Engines.OXML.prototype._getCSSRulesFromPreferencedStyle = function (style) {
    return {
        elementCSSRules: {
            css: style.lineStyle.css || {},
            dimensionCSSRules: style.lineStyle.dimensionCSSRules || {}
        },
        childrenCSSRules: {
            css: style.contentProperties.css || {},
            dimensionCSSRules: style.contentProperties.dimensionCSSRules || {}
        }
    };
};