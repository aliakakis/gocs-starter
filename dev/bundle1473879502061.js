(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class; /*
                          * Place any init app code and routes code here
                          *
                          */

var _gameobject = require('./dev/gameobject/gameobject');

var _transformation = require('./dev/components/transformation/transformation');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = (_dec = (0, _gameobject.GameObject)({
    id: "1"
}), _dec2 = (0, _transformation.Transform)(), _dec(_class = _dec2(_class = function () {
    function Player(settings) {
        _classCallCheck(this, Player);

        this.playerName = settings.playerName;
    }

    _createClass(Player, [{
        key: 'hitPoints',
        value: function hitPoints() {
            console.log("Hit Points");
        }
    }]);

    return Player;
}()) || _class) || _class);


var player = new Player({
    playerName: "John"
});

player.transform.transformX();

},{"./dev/components/transformation/transformation":2,"./dev/gameobject/gameobject":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 *
 * @param settings
 * @param target
 * @constructor
 */
var Transform = exports.Transform = function Transform(settings) {
    return function (target) {
        target.prototype.transform = {
            transformX: function transformX() {
                console.log("Transform X");
            }
        };
    };
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * GameObject is the main entity for creating in game assets
 * They are composed of components which are being added using decorators
 * @param settings
 * @param target
 * @constructor
 */
var GameObject = exports.GameObject = function GameObject(settings) {
  return function (target) {
    target.prototype.id = settings.id;
  };
};

},{}]},{},[1]);
