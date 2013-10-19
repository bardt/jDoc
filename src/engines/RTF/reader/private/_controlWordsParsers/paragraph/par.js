jDoc.engines.RTF.prototype._controlWordsParsers.par = function (options) {
    var parseParams = options.parseParams,
        parseResult = options.parseResult;

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

    parseParams.currentTextElement = null;

    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};