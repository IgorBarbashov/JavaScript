"use strict";

var styles = ["Джаз", "Блюз"];
styles[styles.length] = "Рок-н-Ролл";
styles[styles.length-2] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");