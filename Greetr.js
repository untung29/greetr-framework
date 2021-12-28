;(function (global, $) {
  var Greetr = function (firstName, lastName, language) {
    // Create a new object with Greetr.init
    return new Greetr.init(firstName, lastName, language);
  };

  var supportedLangs = ["en", "es"];

  var greetings = {
    en: "Hello",
    es: "Hola",
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };

  var logMessages = {
    en: "Logged in",
    es: "Inicio sesion",
  };

  // To set the methods
  Greetr.prototype = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },

    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    greeting: function () {
      return greetings[this.language] + " " + this.firstName + "!";
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + " " + this.fullName();
    },

    greet: function (formal) {
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }

      return this;
    },

    setLang: function (lang) {
      this.language = lang;
      this.validate();
      return this;
    },

    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw "jQuery not loaded!";
      }

      if (!selector) {
        throw "Missing jQuery selector";
      }

      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      $(selector).html(msg);
      return this;
      // selector.text(this.greet(true));
      // console.log(selector);
    },
  };

  // This function is used to avoid the user needing to type 'new' keyword everytime they use the library.
  Greetr.init = function (firstName, lastName, language) {
    // Get the reference to the current object
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";

    self.validate();
  };

  // Be able to set any props and methods in Greetr.prototype instead of Greetr.init
  Greetr.init.prototype = Greetr.prototype;

  // Set the window object with the alias 'G$' to the Greetr
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
