System.register("resource-2", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Resource2;
    return {
        setters: [],
        execute: function () {
            Resource2 = (function () {
                function Resource2() {
                }
                return Resource2;
            }());
            exports_1("Resource2", Resource2);
        }
    };
});
System.register("index", ["resource-2"], function (exports_2, context_2) {
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
            function (resource_2_1_1) {
                exportStar_1(resource_2_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("@bundles/workaround", ["index"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_3(exports);
    }
    return {
        setters: [
            function (index_1_1) {
                exportStar_2(index_1_1);
            }
        ],
        execute: function () {
        }
    };
});
