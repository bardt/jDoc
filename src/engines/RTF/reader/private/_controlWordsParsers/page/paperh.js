jDoc.engines.RTF.prototype._controlWordsParsers.paperh = function (options) {
    var parseParams = options.parseParams,
        parseResult = options.parseResult,
        param = options.param,
        i;

    parseParams.pageData.dimensionCSSRules.height = {
        value: param / 20,
        units: "pt"
    };
    for (i = parseResult.pages.length - 1; i >= 0; i--) {
        parseResult.pages[i].dimensionCSSRules.height = parseParams.pageData.dimensionCSSRules.height;
    }
    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};