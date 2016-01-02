/*!
 *  Lang.js for Laravel localization in JavaScript.
 *
 *  @version 1.0.2
 *  @license MIT
 *  @site    https://github.com/rmariuzzo/Laravel-JS-Localization
 *  @author  rmariuzzo
 */

'use strict';

(function(root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD support.
        define([], factory);
    } else if (typeof exports === 'object') {
        // NodeJS support.
        module.exports = new(factory())();
    } else {
        // Browser global support.
        root.Lang = new(factory())();
    }

}(this, function() {

    // Default options //

    var defaults = {
        defaultLocale: 'en' /** The default locale if not set. */
    };

    // Constructor //

    var Lang = function(options) {
        options = options || {};
        this.defaultLocale = options.defaultLocale || defaults.defaultLocale;
    };

    // Methods //

    /**
     * Set messages source.
     *
     * @param messages {object} The messages source.
     *
     * @return void
     */
    Lang.prototype.setMessages = function(messages) {
        this.messages = messages;
    };

    /**
     * Returns a translation message.
     *
     * @param key {string} The key of the message.
     * @param replacements {object} The replacements to be done in the message.
     *
     * @return {string} The translation message, if not found the given key.
     */
    Lang.prototype.get = function(key, replacements) {
        if (!this.has(key)) {
            return key;
        }

        var message = this._getMessage(key, replacements);
        if (message === null) {
            return key;
        }

        if (replacements) {
            message = this._applyReplacements(message, replacements);
        }

        return message;
    };

    /**
     * Returns true if the key is defined on the messages source.
     *
     * @param key {string} The key of the message.
     *
     * @return {boolean} true if the given key is defined on the messages source, otherwise false.
     */
    Lang.prototype.has = function(key) {
        if (typeof key !== 'string' || !this.messages) {
            return false;
        }
        return this._getMessage(key) !== null;
    };

    /**
     * Gets the plural or singular form of the message specified based on an integer value.
     *
     * @param key {string} The key of the message.
     * @param count {integer} The number of elements.
     * @param replacements {object} The replacements to be done in the message.
     *
     * @return {string} The translation message according to an integer value.
     */
    Lang.prototype.choice = function(key, count, replacements) {
        // Set default values for parameters replace and locale
        replacements = typeof replacements !== 'undefined' ? replacements : {};
        
        // The count must be replaced if found in the message
        replacements['count'] = count;

        // Message to get the plural or singular
        var message = this.get(key, replacements);

        // Check if message is not null or undefined
        if (message === null || message === undefined) {
            return message;
        }

        // Separate the plural from the singular, if any
        var messageParts = message.split('|');

        // Get the explicit rules, If any
        var explicitRules = [];
        var regex = /{\d+}\s(.+)|\[\d+,\d+\]\s(.+)|\[\d+,Inf\]\s(.+)/;

        for (var i = 0; i < messageParts.length; i++) {
            messageParts[i] = messageParts[i].trim();

            if (regex.test(messageParts[i])) {
                var messageSpaceSplit = messageParts[i].split(/\s/);
                explicitRules.push(messageSpaceSplit.shift());
                messageParts[i] = messageSpaceSplit.join(' ');
            }
        }

        // Check if there's only one message
        if (messageParts.length === 1) {
            // Nothing to do here
            return message;
        }

        // Check the explicit rules
        for (var i = 0; i < explicitRules.length; i++) {
            if (this._testInterval(count, explicitRules[i])) {
                return messageParts[i];
            }
        }

        // Standard rules
        if (count > 1) {
            return messageParts[1];
        } else {
            return messageParts[0];
        }
    };

    /**
     * Set the current locale.
     *
     * @param locale {string} The locale to set.
     *
     * @return void
     */
    Lang.prototype.setLocale = function(locale) {
        this.locale = locale;
    };

    /**
     * Get the current locale.
     *
     * @return {string} The current locale.
     */
    Lang.prototype.getLocale = function() {
        return this.locale || this.defaultLocale;
    };

    /**
     * Parse a message key into components.
     *
     * @param key {string} The message key to parse.
     *
     * @return {object} A key object with source and entries properties.
     */
    Lang.prototype._parseKey = function(key) {
        if (typeof key !== 'string') {
            return null;
        }
        var segments = key.split('.');
        return {
            source: this.getLocale() + '.' + segments[0],
            entries: segments.slice(1)
        };
    };

    /**
     * Returns a translation message. Use `Lang.get()` method instead, this methods assumes the key exists.
     *
     * @param key {string} The key of the message.
     *
     * @return {string} The translation message for the given key.
     */
    Lang.prototype._getMessage = function(key) {

        key = this._parseKey(key);

        // Ensure message source exists.
        if (this.messages[key.source] === undefined) {
            return null;
        }

        // Get message text.
        var message = this.messages[key.source];
        while (key.entries.length && (message = message[key.entries.shift()]));

        if (typeof message !== 'string') {
            return null;
        }

        return message;
    };

    /**
     * Apply replacements to a string message containing placeholders.
     *
     * @param message {string} The text message.
     * @param replacements {object} The replacements to be done in the message.
     *
     * @return {string} The string message with replacements applied.
     */
    Lang.prototype._applyReplacements = function(message, replacements) {
        for (var replace in replacements) {
            message = message.split(':' + replace).join(replacements[replace]);
        }
        return message;
    };

    /**
     * Checks if the given `count` is within the interval defined by the {string} `interval`
     *
     * @param  count {int}  The amount of items.
     * @param  interval {string}    The interval to be compared with the count.
     * @return {boolean}    Returns true if count is within interval; false otherwise.
     */
    Lang.prototype._testInterval = function(count, interval) {
        /**
         * From the Symfony\Component\Translation\Interval Docs
         *
         * Tests if a given number belongs to a given math interval.
         * An interval can represent a finite set of numbers: {1,2,3,4}
         * An interval can represent numbers between two numbers: [1, +Inf] ]-1,2[
         * The left delimiter can be [ (inclusive) or ] (exclusive).
         * The right delimiter can be [ (exclusive) or ] (inclusive).
         * Beside numbers, you can use -Inf and +Inf for the infinite.
         */

        return false;
    };

    return Lang;

}));


(function(root) {
    Lang.setMessages({"vi.common":{"dashboard":"Dashboard","product":"S\u1ea3n ph\u1ea9m","show-product":"Danh s\u00e1ch s\u1ea3n ph\u1ea9m","stock":"Qu\u1ea3n l\u00fd kho","stock_sale":"Xu\u1ea5t nh\u1eadp h\u00e0ng","stock_internal":"Xu\u1ea5t nh\u1eadp n\u1ed9i b\u1ed9","stock_categoy":"Danh m\u1ee5c s\u1ea3n ph\u1ea9m","stock_audit":"Ki\u1ec3m k\u00ea","stock_show_product":"Danh s\u00e1ch s\u1ea3n ph\u1ea9m","sale":"Qu\u1ea3n l\u00fd b\u00e1n h\u00e0ng","sale_invoice":"\u0110\u01a1n h\u00e0ng","sale_total_revenue":"Doanh s\u1ed1","marketing":"Qu\u1ea3n l\u00fd Marketing","marketing_sale":"B\u00e1n h\u00e0ng","marketing_online":"Online","account":"K\u1ebf to\u00e1n","account_in_out":"Thu Chi","account_budget":"Ng\u00e2n s\u00e1ch","account_result":"K\u1ebft qu\u1ea3 kinh doanh","hr":"Nh\u00e2n s\u1ef1","hr_diagram":"S\u01a1 \u0111\u1ed3 t\u1ed5 ch\u1ee9c","hr_employee":"Qu\u1ea3n l\u00fd nh\u00e2n vi\u00ean","hr_training":"Qu\u1ea3n l\u00fd \u0111\u00e0o t\u1ea1o","test":"Test","test_upload_file":"Upload","test_material_ui":"Material UI"},"vi.product":{"list":"Danh s\u00e1ch s\u1ea3n ph\u1ea9m","add":"Th\u00eam s\u1ea3n ph\u1ea9m","name":"T\u00ean s\u1ea3n ph\u1ea9m","brand":"Nh\u00e3n hi\u1ec7u","unit":"\u0110\u01a1n v\u1ecb t\u00ednh","image":"H\u00ecnh \u0111\u1ea1i di\u1ec7n","description":"M\u00f4 t\u1ea3","sku":"M\u00e3 s\u1ea3n ph\u1ea9m","series":"S\u1ed1 series"},"en.common":{"stock":"Stock"},"en.auth":{"failed":"These credentials do not match our records.","throttle":"Too many login attempts. Please try again in :seconds seconds."},"en.pagination":{"previous":"&laquo; Previous","next":"Next &raquo;"},"en.validation":{"accepted":"The :attribute must be accepted.","active_url":"The :attribute is not a valid URL.","after":"The :attribute must be a date after :date.","alpha":"The :attribute may only contain letters.","alpha_dash":"The :attribute may only contain letters, numbers, and dashes.","alpha_num":"The :attribute may only contain letters and numbers.","array":"The :attribute must be an array.","before":"The :attribute must be a date before :date.","between":{"numeric":"The :attribute must be between :min and :max.","file":"The :attribute must be between :min and :max kilobytes.","string":"The :attribute must be between :min and :max characters.","array":"The :attribute must have between :min and :max items."},"boolean":"The :attribute field must be true or false.","confirmed":"The :attribute confirmation does not match.","date":"The :attribute is not a valid date.","date_format":"The :attribute does not match the format :format.","different":"The :attribute and :other must be different.","digits":"The :attribute must be :digits digits.","digits_between":"The :attribute must be between :min and :max digits.","email":"The :attribute must be a valid email address.","exists":"The selected :attribute is invalid.","filled":"The :attribute field is required.","image":"The :attribute must be an image.","in":"The selected :attribute is invalid.","integer":"The :attribute must be an integer.","ip":"The :attribute must be a valid IP address.","json":"The :attribute must be a valid JSON string.","max":{"numeric":"The :attribute may not be greater than :max.","file":"The :attribute may not be greater than :max kilobytes.","string":"The :attribute may not be greater than :max characters.","array":"The :attribute may not have more than :max items."},"mimes":"The :attribute must be a file of type: :values.","min":{"numeric":"The :attribute must be at least :min.","file":"The :attribute must be at least :min kilobytes.","string":"The :attribute must be at least :min characters.","array":"The :attribute must have at least :min items."},"not_in":"The selected :attribute is invalid.","numeric":"The :attribute must be a number.","regex":"The :attribute format is invalid.","required":"The :attribute field is required.","required_if":"The :attribute field is required when :other is :value.","required_unless":"The :attribute field is required unless :other is in :values.","required_with":"The :attribute field is required when :values is present.","required_with_all":"The :attribute field is required when :values is present.","required_without":"The :attribute field is required when :values is not present.","required_without_all":"The :attribute field is required when none of :values are present.","same":"The :attribute and :other must match.","size":{"numeric":"The :attribute must be :size.","file":"The :attribute must be :size kilobytes.","string":"The :attribute must be :size characters.","array":"The :attribute must contain :size items."},"string":"The :attribute must be a string.","timezone":"The :attribute must be a valid zone.","unique":"The :attribute has already been taken.","url":"The :attribute format is invalid.","custom":{"attribute-name":{"rule-name":"custom-message"}},"attributes":[]},"en.passwords":{"password":"Passwords must be at least six characters and match the confirmation.","reset":"Your password has been reset!","sent":"We have e-mailed your password reset link!","token":"This password reset token is invalid.","user":"We can't find a user with that e-mail address."}});
})(window);
