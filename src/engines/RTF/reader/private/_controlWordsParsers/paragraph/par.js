jDoc.engines.RTF.prototype._controlWordsParsers.par = function (options) {
    var parseParams = options.parseParams,
        paragraphHeight,
        parseResult = options.parseResult;

    if (parseParams.currentTextElementParent) {

    }

    parseParams.currentElementIndex++;

    /**
     * inherit previous paragraph
     * @type {*}
     */

    parseParams.currentTextElementParent = jDoc.deepMerge({}, parseParams.paragraphData, {
        elements: []
    });

    parseResult.pages[parseParams.currentPageIndex].elements[parseParams.currentElementIndex] =
        parseParams.currentTextElementParent;

    parseParams.currentTextElement = {
        options: {},
        css: {},
        dimensionCSSRules: {},
        properties: {
            textContent: ""
        }
    };

    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};