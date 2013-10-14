jDoc.engines.RTF.prototype._controlWordsParsers.sl = function (options) {
    var parseParams = options.parseParams,
        parseResult = options.parseResult,
        param = Math.abs((options.param && options.param !== -1) || 0),
        el = parseParams.currentTextElement || parseParams.currentTextElementParent;

    if (param > 0) {
        el.dimensionCSSRules.lineHeight = {
            value: param / 20,
            units: "pt"
        };
    }

    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};