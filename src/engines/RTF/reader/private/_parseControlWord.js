/**
 *
 * @param text {String}
 * @param index {Number}
 * @param parseParams {*}
 * @param parseResult {*}
 * @returns {Number}
 * @private
 */
jDoc.engines.RTF.prototype._parseControlWord = function (text, index, parseParams, parseResult) {
    var match,
        clearedControlWord,
        controlWordParseResult,
        param,
        continueSearchControlWord = true,
        controlWord = "",
        controlWordParserData = "";

    while (text[index] !== ' ' && text[index] !== '\\' && text[index] !== '{' && text[index] !== '}') {
        if (controlWord !== "" && (text[index] === '\r' || text[index] === '\n')) {
            continueSearchControlWord = false;
        }
        if (continueSearchControlWord) {
            controlWord += text[index];
        }
        if (text[index] === '*') {
            parseParams.ignoreGroups.push(parseParams.braceCounter);
        }
        index += 1;
    }
    index += text[index] === ' ' ? 1 : 0;

    if (controlWord[0] === "'") {
        /**
         * +1 - exclude ' symbol
         * @type {number}
         */
        match = controlWord.search(/'[a-z0-9]+$/gi) + 1;

        if (match) {
            param = controlWord.substr(match);
            controlWord = controlWord.substr(0, match);
            clearedControlWord = controlWord;
        }
    } else {
        match = controlWord.search(/-?\d+$/gi);

        if (match !== -1) {
            param = parseInt(controlWord.substr(match), 10);
            controlWord = controlWord.substr(0, match);
        }

        clearedControlWord = controlWord.replace(/[;]/, '');
    }

    if (this._ignoreControlWordGroups[clearedControlWord]) {
        parseParams.ignoreGroups.push(parseParams.braceCounter);
    } else if (clearedControlWord && !parseParams.ignoreGroups.length) {
        if (this._controlWordsParsers[clearedControlWord]) {
            controlWordParserData = {
                clearedControlWord: clearedControlWord,
                controlWord: controlWord,
                parseResult: parseResult,
                parseParams: parseParams,
                param: param
            };
            controlWordParseResult = this._controlWordsParsers[clearedControlWord].call(this, controlWordParserData);
            parseResult = controlWordParseResult.parseResult;
            parseParams = controlWordParseResult.parseParams;
            controlWordParserData = null;
            controlWordParseResult = null;
        } else {
            parseParams.unParsedControlWords[controlWord] = true;
        }
    }

    return index;
};