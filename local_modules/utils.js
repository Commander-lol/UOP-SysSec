/*jslint node:true */
"use strict";

module.exports = {
    get sources() {
        return {
            title: "",
            srcs: {
                styles: [
                    "http://fonts.googleapis.com/icon?family=Material+Icons",
                    "css/materialize.css",
                    "css/main.css"
                    
                ],
                scripts: [
                    "https://code.jquery.com/jquery-2.1.1.min.js",
                    "js/materialize.js",
                    "js/main.js"
                ]
            }
        };
    },
    get errMap() {
        return {
            404: "err/404"
        }
    },
    merge: function(a, b) {
        for(var prop in b) {
            if(b.hasOwnProperty(prop)) {
                a[prop] = b[prop];
            }
        }
        return a;
    }
};