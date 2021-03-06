/** @lends jDoc.engines.ODF.prototype
 *
 * @param node
 * @return {Object}
 * @private
 */
jDoc.engines.ODF.prototype._parseTextDocumentParagraphStyles = function (node) {
    var nodes = jDoc.DOM.children(node),
        length = nodes.length,
        j,
        result = {
            paragraph: {
                css: {},
                dimensionCSSRules: {},
                options: {}
            },
            paragraphContent: {
                css: {},
                dimensionCSSRules: {},
                options: {}
            }
        },
        align,
        localName,
        size = {};

    for (j = 0; j < length; j++) {
        localName = nodes[j].localName;

        if (localName === "paragraph-properties") {
            if (nodes[j].attributes['fo:background-color'] && nodes[j].attributes['fo:background-color'].value) {
                result.paragraph.css.backgroundColor =
                    this._normalizeColorValue(nodes[j].attributes['fo:background-color'].value);
            }
            if (nodes[j].attributes['style:writing-mode'] && nodes[j].attributes['style:writing-mode'].value) {
                result.paragraph.css.direction =
                    (/rl/ig).test(nodes[j].attributes['style:writing-mode'].value) ? "rtl" : "ltr";
            }
            if (nodes[j].attributes['fo:text-align'] && nodes[j].attributes['fo:text-align'].value) {
                align = (/center|left|right/i).exec(nodes[j].attributes['fo:text-align'].value);

                if (align && align[0]) {
                    result.paragraph.css.textAlign = align[0];
                }
            }
            if (nodes[j].attributes['fo:margin'] && nodes[j].attributes['fo:margin'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin'].value);

                if (size.units) {
                    result.paragraph.dimensionCSSRules.margin = size;
                }
            }
            if (nodes[j].attributes['fo:margin-top'] && nodes[j].attributes['fo:margin-top'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-top'].value);

                if (size.units) {
                    result.paragraph.dimensionCSSRules.marginTop = size;
                }
            }
            if (nodes[j].attributes['fo:margin-bottom'] && nodes[j].attributes['fo:margin-bottom'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-bottom'].value);
                if (size.units) {
                    result.paragraph.dimensionCSSRules.marginBottom = size;
                }
            }
            if (nodes[j].attributes['fo:margin-left'] && nodes[j].attributes['fo:margin-left'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-left'].value);
                if (size.units) {
                    result.paragraph.dimensionCSSRules.marginLeft = size;
                }
            }
            if (nodes[j].attributes['fo:margin-right'] && nodes[j].attributes['fo:margin-right'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-right'].value);
                if (size.units) {
                    result.paragraph.dimensionCSSRules.marginLeft = size;
                }
            }
            if (nodes[j].attributes['fo:margin'] && nodes[j].attributes['fo:margin'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin'].value);
                if (size.units) {
                    result.paragraph.dimensionCSSRules.margin = size;
                }
            }
            if (nodes[j].attributes['fo:margin-top'] && nodes[j].attributes['fo:margin-top'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-top'].value);
                if (size.units) {
                    result.paragraph.dimensionCSSRules.marginTop = size;
                }
            }
            if (nodes[j].attributes['fo:margin-bottom'] && nodes[j].attributes['fo:margin-bottom'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-bottom'].value);
                if (size.units) {
                    result.paragraph.dimensionCSSRules.marginBottom = size;
                }
            }
            if (nodes[j].attributes['fo:margin-left'] && nodes[j].attributes['fo:margin-left'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-left'].value);
                if (size.units) {
                    result.paragraph.dimensionCSSRules.marginLeft = size;
                }
            }
            if (nodes[j].attributes['fo:margin-right'] && nodes[j].attributes['fo:margin-right'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-right'].value);
                if (size.units) {
                    result.paragraph.dimensionCSSRules.marginRight = size;
                }
            }
            if (nodes[j].attributes['fo:padding'] && nodes[j].attributes['fo:padding'].value) {
                size = this._getSize(nodes[j].attributes['fo:padding'].value);
                if (size.units) {
                    result.paragraph.dimensionCSSRules.padding = size;
                }
            }
            if (nodes[j].attributes['fo:padding-top'] && nodes[j].attributes['fo:padding-top'].value) {
                size = this._getSize(nodes[j].attributes['fo:padding-top'].value);
                if (size.units) {
                    result.paragraph.dimensionCSSRules.paddingTop = size;
                }
            }
            if (nodes[j].attributes['fo:padding-bottom'] && nodes[j].attributes['fo:padding-bottom'].value) {
                size = this._getSize(nodes[j].attributes['fo:padding-bottom'].value);
                if (size.units) {
                    result.paragraph.dimensionCSSRules.paddingBottom = size;
                }
            }
            if (nodes[j].attributes['fo:padding-left'] && nodes[j].attributes['fo:padding-left'].value) {
                size = this._getSize(nodes[j].attributes['fo:padding-left'].value);
                if (size.units) {
                    result.paragraph.dimensionCSSRules.paddingLeft = size;
                }
            }
            if (nodes[j].attributes['fo:padding-right'] && nodes[j].attributes['fo:padding-right'].value) {
                size = this._getSize(nodes[j].attributes['fo:padding-right'].value);
                if (size.units) {
                    result.paragraph.dimensionCSSRules.paddingRight = size;
                }
            }
        } else if (localName === "text-properties") {
            if (nodes[j].attributes['fo:color'] && nodes[j].attributes['fo:color'].value) {
                result.paragraphContent.css.color =
                    this._normalizeColorValue(nodes[j].attributes['fo:color'].value);
            }
            if (nodes[j].attributes['fo:font-style'] && nodes[j].attributes['fo:font-style'].value) {
                result.paragraphContent.css.fontStyle =
                    (/italic/ig).test(nodes[j].attributes['fo:font-style'].value) ? "italic" : "normal";
            }
            if (nodes[j].attributes['fo:font-weight'] && nodes[j].attributes['fo:font-weight'].value) {
                result.paragraphContent.css.fontWeight =
                    (/bold/ig).test(nodes[j].attributes['fo:font-weight'].value) ? "bold" : "normal";
            }
            if (
                nodes[j].attributes['style:text-underline-style'] &&
                    nodes[j].attributes['style:text-underline-style'].value
            ) {
                result.paragraphContent.css.textDecoration =
                    (/none/ig).test(nodes[j].attributes['style:text-underline-style'].value) ? "none" : "underline";
            }
            if (nodes[j].attributes['style:font-name'] && nodes[j].attributes['style:font-name'].value) {
                result.paragraphContent.css.fontFamily = nodes[j].attributes['style:font-name'].value;
            }
            if (nodes[j].attributes['fo:font-size'] && nodes[j].attributes['fo:font-size'].value) {
                size = this._getSize(nodes[j].attributes['fo:font-size'].value);
                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.fontSize = size;
                }
            }
            if (nodes[j].attributes['fo:margin'] && nodes[j].attributes['fo:margin'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin'].value);
                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.margin = size;
                }
            }
            if (nodes[j].attributes['fo:margin-top'] && nodes[j].attributes['fo:margin-top'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-top'].value);
                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.marginTop = size;
                }
            }
            if (nodes[j].attributes['fo:margin-bottom'] && nodes[j].attributes['fo:margin-bottom'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-bottom'].value);
                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.marginBottom = size;
                }
            }
            if (nodes[j].attributes['fo:margin-left'] && nodes[j].attributes['fo:margin-left'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-left'].value);
                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.marginLeft = size;
                }
            }
            if (nodes[j].attributes['fo:margin-right'] && nodes[j].attributes['fo:margin-right'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-right'].value);
                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.marginLeft = size;
                }
            }
            if (nodes[j].attributes['fo:margin'] && nodes[j].attributes['fo:margin'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin'].value);
                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.margin = size;
                }
            }
            if (nodes[j].attributes['fo:margin-top'] && nodes[j].attributes['fo:margin-top'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-top'].value);
                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.marginTop = size;
                }
            }
            if (nodes[j].attributes['fo:margin-bottom'] && nodes[j].attributes['fo:margin-bottom'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-bottom'].value);
                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.marginBottom = size;
                }
            }
            if (nodes[j].attributes['fo:margin-left'] && nodes[j].attributes['fo:margin-left'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-left'].value);
                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.marginLeft = size;
                }
            }
            if (nodes[j].attributes['fo:margin-right'] && nodes[j].attributes['fo:margin-right'].value) {
                size = this._getSize(nodes[j].attributes['fo:margin-right'].value);
                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.marginRight = size;
                }
            }
            if (nodes[j].attributes['fo:padding'] && nodes[j].attributes['fo:padding'].value) {
                size = this._getSize(nodes[j].attributes['fo:padding'].value);

                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.padding = size;
                }
            }
            if (nodes[j].attributes['fo:padding-top'] && nodes[j].attributes['fo:padding-top'].value) {
                size = this._getSize(nodes[j].attributes['fo:padding-top'].value);

                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.paddingTop = size;
                }
            }
            if (nodes[j].attributes['fo:padding-bottom'] && nodes[j].attributes['fo:padding-bottom'].value) {
                size = this._getSize(nodes[j].attributes['fo:padding-bottom'].value);
                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.paddingBottom = size;
                }
            }
            if (nodes[j].attributes['fo:padding-left'] && nodes[j].attributes['fo:padding-left'].value) {
                size = this._getSize(nodes[j].attributes['fo:padding-left'].value);

                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.paddingLeft = size;
                }
            }
            if (nodes[j].attributes['fo:padding-right'] && nodes[j].attributes['fo:padding-right'].value) {
                size = this._getSize(nodes[j].attributes['fo:padding-right'].value);

                if (size.units) {
                    result.paragraphContent.dimensionCSSRules.paddingRight = size;
                }
            }
            if (nodes[j].attributes['fo:language'] && nodes[j].attributes['fo:language'].value) {
                result.paragraphContent.options.language = nodes[j].attributes['fo:language'].value;
            }
        }
    }

    return result;
};