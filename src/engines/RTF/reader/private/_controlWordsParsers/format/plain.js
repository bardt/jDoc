jDoc.engines.RTF.prototype._controlWordsParsers.b = function (options) {
    var parseParams = options.parseParams,
        parseResult = options.parseResult,
        el = parseParams.currentTextElement || parseParams.currentTextElementParent;

    this._resetFontProperties(el);

    return {
        parseParams: parseParams,
        parseResult: parseResult
    };
};