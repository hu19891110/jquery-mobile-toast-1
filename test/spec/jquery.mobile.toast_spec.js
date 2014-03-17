/* global $, describe, it, expect, afterEach */
describe("jquery.mobile.toast", function() {
    it("version should be 0.0.5", function() {
        expect($.mobile.toast.version).toEqual("0.0.5");
    });
    describe("defaults", function() {
        it("option 'message' should be an empty string by default", function() {
            expect($.mobile.toast.prototype.options.message).toEqual("");
        });
        it("option 'duration' should be 1500 by default", function() {
            expect($.mobile.toast.prototype.options.duration).toEqual(1500);
        });
        it("option 'classOnOpen' should be an empty string by default", function() {
            expect($.mobile.toast.prototype.options.classOnOpen).toEqual("");
        });
        it("option 'classOnClose' should be an empty string by default", function() {
            expect($.mobile.toast.prototype.options.classOnClose).toEqual("");
        });
    });

    describe("overwritten defaults", function(){
        afterEach(function() {
            $.mobile.toast.prototype.options = {
                "message": "",
                "duration": 1500,
                "classOnOpen": "",
                "classOnClose": ""
            };
        });

        it("option 'message' should be 'Live long and prosper'", function() {
            $.mobile.toast.prototype.options.message = "Live long and prosper";
            expect($.mobile.toast.prototype.options.message).toEqual("Live long and prosper");
        });
        it("option 'duration' should be 2000", function() {
            $.mobile.toast.prototype.options.duration = 2000;
            expect($.mobile.toast.prototype.options.duration).toEqual(2000);
        });
        it("option 'classOnOpen' should be 'open'", function() {
            $.mobile.toast.prototype.options.classOnOpen = "open";
            expect($.mobile.toast.prototype.options.classOnOpen).toEqual("open");
        });
        it("option 'classOnClose' should be 'close'", function() {
            $.mobile.toast.prototype.options.classOnClose = "close";
            expect($.mobile.toast.prototype.options.classOnClose).toEqual("close");
        });
    });
});