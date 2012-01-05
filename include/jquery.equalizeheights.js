/*globals jQuery*/
/**
 * @copyright Copyright (c) 2012, Dan Bettles 
 * @author Dan Bettles <dan@archaichorizon.com>
 */

jQuery.extend(true, {

    fn: {

        /**
         * @param {Object} [options]
         * @return jQuery
         */
        equalizeHeights: function (options) {
            var actualOptions = options || {},
                targetOuterHeight = 0;

            this.each(function () {
                var currOuterHeight = jQuery(this).outerHeight(true);

                if (currOuterHeight > targetOuterHeight) {
                    targetOuterHeight = currOuterHeight;
                }
            });

            if ((typeof actualOptions.minHeight !== 'undefined') && (targetOuterHeight < actualOptions.minHeight)) {
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
        }
    }
});