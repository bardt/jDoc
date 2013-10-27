jDoc.engines.RTF.prototype._controlWordsParsers.page = function (options) {
    var parseParams = options.parseParams,
        page,
        parseResult = options.parseResult;

    parseResult.table = this._destroyTable(parseParams);
    parseParams.currentTextElementParent = jDoc.clone(parseParams.paragraphData);
    parseParams.currentTextElement = {
        options: {},
        css: {},
        dimensionCSSRules: {},
        properties: {
            textContent: ""
        }
    };
    parseParams.currentPageIndex++;
    parseParams.currentElementIndex = 0;
    parseParams.pageContentHeight = 0;

    page = jDoc.clone(parseParams.pageData);
    parseResult.pages[parseParams.currentPageIndex] = page;
    page.elements[parseParams.currentElementIndex] = parseParams.currentTextElementParent;

    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};