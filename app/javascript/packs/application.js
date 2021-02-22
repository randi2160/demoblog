// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//import "@fortawesome/fontawesome-free/js/all";
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
//import "bootstrap"
import "../stylesheets/material-dashboard.min.css?v=2.2.2"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
console.log('Hello from application.js')


document.addEventListener("turbolinks:load", function() {
  $(function() {
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
  })
})

var jQuery = require('jquery')
console.log('Hello from jquery.js')
var moment = require('moment')
console.log('Hello from moments.js')
var jvectorma = require('jqvmap')
console.log('Hello from jqvmap')
// include jQuery in global and window scope (so you can access it globally)
// in your web browser, when you type $('.div'), it is actually refering to global.$('.div')
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;

// include moment in global and window scope (so you can access it globally)
global.moment = moment;
window.moment = moment;
// CSS
//import '../stylesheets/application.scss'
// JS
require("bootstrap")
console.log('Hello frombootstrap')
require("bootstrap-material-design")
console.log('Hello fromboo material design')
require("chartkick")
require("chart.js")
require("chartist")
import "core/bootstrap-material-design.min.js"
console.log('Hello core/bootstrap-material-design.min.js')
import "plugins/moment.min.js"
console.log('plugins/moment.min.js')

import "plugins/nouislider.min.js"
import "packs/material-dashboard.min.js"
// Images
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)