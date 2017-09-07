System.register("resource-1", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Resource1;
    return {
        setters: [],
        execute: function () {
            Resource1 = (function () {
                function Resource1() {
                }
                return Resource1;
            }());
            exports_1("Resource1", Resource1);
        }
    };
});
System.register("index", ["resource-1"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_2(exports);
    }
    return {
        setters: [
            function (resource_1_1_1) {
                exportStar_1(resource_1_1_1);
            }
        ],
        execute: function () {
        }
    };
});
