#jquery-equalizeheights#

jquery-equalizeheights makes all selected elements the same height as the tallest element in the set.  The
`equalizeHeights()` method optionally accepts a minimum pixel height so you can ensure all elements are always _at
least_ as tall as you require.

![](https://github.com/archaichorizon/jquery-equalizeheights/raw/master/screenshot_1.png)

##Usage##

Simply select the elements you want to make the same height and call `equalizeHeights()`.  For example:

    jQuery('#row_1 > .column').equalizeHeights();

or:

    jQuery('#row_1 > .column').equalizeHeights({ minHeight: 300 });

Browse to `test/index.html` for working examples.