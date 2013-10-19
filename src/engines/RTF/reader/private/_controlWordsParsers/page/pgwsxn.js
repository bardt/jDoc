jDoc.engines.RTF.prototype._controlWordsParsers.pgwsxn = function (options) {
    var parseParams = options.parseParams,
        parseResult = options.parseResult,
        param = options.param,
        i;

    if (!parseParams.pageData.dimensionCSSRules.width) {
        parseParams.pageData.dimensionCSSRules.width = {
            value: param / 20,
            units: "pt"
        };
        for (i = parseResult.pages.length - 1; i >= 0; i--) {
            parseResult.pages[i].dimensionCSSRules.width = parseParams.pageData.dimensionCSSRules.width;
        }
    }

    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};