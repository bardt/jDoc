/**
 *
 * @param options
 * @private
 */
jDoc.engines.WCBFF.prototype._getLong = function (options) {
    this._getSomeBytes({
        data: options.data,
        from: options.from,
        count: 4,
        fileBinaryReadData: options.fileBinaryReadData,
        success: options.success
    });
};