jDoc.Engines.RTF.prototype.controlWordsParsers.brdrw = function (options) {
    var parseParams = options.parseParams,
        parseResult = options.parseResult,
        param = options.param,
        el = parseParams.currentTextElement || parseParams.currentTextElementParent;

    el.dimensionCSSRules.borderWidth = {
        value: param / 20,
        units: "pt"
    };

    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};