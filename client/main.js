/*global Weapon*/
'use strict';

$(document).ready(init);

function init() {
  playTheme();
  createWeapons();
  paintWeapons();
  createFighters();
  paintFighters();
  chooseWeapon();
  $('#weapons').on('click', '.weapon', clickWeapon);
}

var weapons = [];
var fighters = [];
var equipped = [];

function clickWeapon() {
  var name = $(this).find('.name').text();
  var weapon = _.find(weapons, function(weapon) {return weapon.name === name});
  console.log(name, weapon);
}

function chooseWeapon() {
  var fighter = _.sample(fighters);
  var $fighter = $('.fighter:contains("' + fighter.name + '")');
  $fighter.addClass('choose');
}

function playTheme() {
  $('audio').attr('src', '/audio/theme.mp3');
  $('audio')[0].play();
}

function createWeapons() {
  var w1 = new Weapon('Hair Spray', 'http://pics2.ds-static.com/prodimg/14717/300.jpg');
  var w2 = new Weapon('Burner', 'http://www.cachebeauty.com/images/create/ceramic_marcel.jpg');
  var w3 = new Weapon('Comber', 'http://www.denmanbrush.com/acatalog/ProEdge_blk_display.jpg');

  weapons.push(w1, w2, w3);
}

function createFighters() {
  var f1 = new Fighter('Billy', 'http://www.eonline.com/eol_images/Entire_Site/2014929/rs_634x1024-141029200737-634.Miley-Cyrus-amfAR-Inspiration-Gala.2.ms.102914.jpg');
  var f2 = new Fighter('Bob', 'http://www.billboard.com/files/styles/promo_310/public/media/katy-perry-cover-02-billboard-650.jpg');
  var f3 = new Fighter('Boobs', 'http://specials-images.forbesimg.com/imageserve/5d48a99313b246e4346376727152e716/280x425.jpg');

  fighters.push(f1, f2, f3);
}

function paintWeapons() {
  weapons.forEach(function(weapon) {
    var $outer = $('<div>');
    $outer.addClass('weapon');

    var $img = $('<div>');
    $img.css('background-image', 'url(" ' + weapon.image + ' ")');

    var $info = $('<div>');
    var $name = $('<div>');
    $name.addClass('name');
    $name.text(weapon.name);

    var $damage = $('<div>');
    $damage.text(weapon.damage);

    $outer.append($img, $info);
    $info.append($name, $damage);
    $('#weapons').append($outer)
  });
}

function paintFighters() {
  fighters.forEach(function(fighter) {
    var $outer = $('<div>');
    $outer.addClass('fighter');

    var $img = $('<div>');
    $img.css('background-image', 'url(" ' + fighter.image + ' ")');

    var $info = $('<div>');
    var $name = $('<div>');
    $name.text(fighter.name);

    var $armor = $('<div>');
    $armor.text('a: ' + fighter.armor);

    var $health = $('<div>');
    $health.text('h: ' + fighter.health);

    var $strength = $('<div>');
    $strength.text('s: ' + fighter.strength);

    $outer.append($img, $info);
    $info.append($name, $armor, $health, $strength);
    $('#fighters').append($outer)
  });
}
