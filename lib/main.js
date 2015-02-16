// Stack Whistle
// Copyright (C) 2015  Linostar
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>. 

var buttons = require('sdk/ui/button/action');
var panels = require("sdk/panel");
//var data = require("sdk/self").data;

var button = buttons.ActionButton({
    id: "stack-whistle-panel",
    label: "Stack Whistle",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png",
    },
    onClick: openPanel
});

var panel = panels.Panel({
    contentURL: "./panel.xhtml",
/*    contentScriptFile: [
        "./SE.js",
        "./jquery-2.1.1.min.js",
        "./panel.js"
    ]*/
});

function openPanel(state) {
    panel.show({
        position: button
    });
}
