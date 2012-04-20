/*globals jQuery*/
/**
 * jquery-equalizeheights
 * 
 * @copyright Copyright (c) 2012, Dan Bettles 
 * @author Dan Bettles <dan@archaichorizon.com>
 */

/**
 * @param {Object} [options]
 * @return jQuery
 */
jQuery.fn.equalizeHeights = function (options) {
    var actualOptions = jQuery.extend({
            minHeight: 0,
            resetHeightsBeforeEqualizing: true
        }, options || {}),
        targetOuterHeight = 0;

    this.each(function () {
        var oThisEl = jQuery(this),
            currOuterHeight = 0;

        //We reset the height of elements before equalizing to ensure that if we're equalizing when the window is
        //resized, that we don't end-up with unnecessarily tall containers when we expand the window after collapsing
        //it.
        if (actualOptions.resetHeightsBeforeEqualizing) {
            oThisEl.css('height', 'auto');
        }

        currOuterHeight = oThisEl.outerHeight(true);

        if (currOuterHeight > targetOuterHeight) {
            targetOuterHeight = currOuterHeight;
        }
    });

    if (targetOuterHeight < actualOptions.minHeight) {
        targetOuterHeight = actualOptions.minHeight;
    }

    this.each(function () {
        var oThisEl = jQuery(this),
            currOuterHeight = jQuery(this).outerHeight(true);

        if (currOuterHeight === targetOuterHeight) {
            return true;
        }

        oThisEl.height(targetOuterHeight - (currOuterHeight - oThisEl.height()));
        return true;
    });

    return this;
};