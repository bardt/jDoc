/**
 *
 * @param element
 * @param options
 * @returns {number}
 * @private
 */
jDoc.engines.RTF.prototype._getElementHeight = function (element, options) {
    options = options || {};

    var height = (element.dimensionCSSRules.height && element.dimensionCSSRules.height.value) || 0,
        i,
        elementsHeight = 0,
        lineHeight = (element.dimensionCSSRules.lineHeight && element.dimensionCSSRules.lineHeight.value) || 0,
        width = options.width || 0,
        maxFontSize = this._getMaxFontSize(element),
        len;

    if (lineHeight > height) {
        height = lineHeight;
    }

    height += (element.dimensionCSSRules.marginTop && element.dimensionCSSRules.marginTop.value) || 0;
    height += (element.dimensionCSSRules.marginBottom && element.dimensionCSSRules.marginBottom.value) || 0;
    height += (element.dimensionCSSRules.paddingTop && element.dimensionCSSRules.paddingTop.value) || 0;
    height += (element.dimensionCSSRules.paddingBottom && element.dimensionCSSRules.paddingBottom.value) || 0;

    if (width) {
        width -= (element.dimensionCSSRules.paddingLeft && element.dimensionCSSRules.paddingLeft.value) || 0;
        width -= (element.dimensionCSSRules.paddingRight && element.dimensionCSSRules.paddingRight.value) || 0;
        width -= (element.dimensionCSSRules.marginLeft && element.dimensionCSSRules.marginLeft.value) || 0;
        width -= (element.dimensionCSSRules.marginRight && element.dimensionCSSRules.marginRight.value) || 0;
    }

    if (element.options.isParagraph) {
        len = (element.elements && element.elements.length) || 0;

        for (i = len - 1; i >= 0; i--) {
            elementsHeight += this._spotElementHeight({
                el: {
                    textContent: element.elements[i].properties.textContent
                },
                lineHeight: (
                    element.elements[i].dimensionCSSRules.lineHeight && element.elements[i].dimensionCSSRules.lineHeight.value
                ) || lineHeight,
                width: width,
                parentFontSize: maxFontSize,
                fontSize: element.elements[i].dimensionCSSRules.fontSize ? element.elements[i].dimensionCSSRules.fontSize.value : 0
            });
        }

        if (elementsHeight > height) {
            height = elementsHeight;
        }
    }

    return height;
};