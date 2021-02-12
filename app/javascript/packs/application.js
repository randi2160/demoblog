// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
//import "../stylesheets/application.scss"
Rails.start()
Turbolinks.start()
ActiveStorage.start()
console.log('Hello from application.js')

require("bootstrap")

document.addEventListener("turbolinks:load", function() {
  $(function() {
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
  })
})


// CSS
//import '../stylesheets/application.scss'
// JS

import 'jquery'
import 'core/jquery.min'
//import 'packs/material-dashboards.js'
import 'core/bootstrap-material-design.min'
import 'packs/material-dashboards'
require("jquery")
require("core/jquery.min")
require("packs/material-dashboards")
require("core/bootstrap-material-design.min")
require("plugins/arrive.min")
require("plugins/bootstrap-datetimepicker.min")
require("plugins/bootstrap-notify")


// Images
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)