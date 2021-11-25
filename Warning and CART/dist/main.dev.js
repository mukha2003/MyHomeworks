"use strict";

var panel = {
  type: 'info',
  text: '',
  autoclose: false,
  success: function success(text) {
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.type = 'success';
    this.text = text;
    this.autoclose = autoclose;
    this.showPanel();
  },
  info: function info(text) {
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.type = 'info';
    this.text = text;
    this.autoclose = autoclose;
    this.showPanel();
  },
  warning: function warning(text) {
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.type = 'warning';
    this.text = text;
    this.autoclose = autoclose;
    this.showPanel();
  },
  danger: function danger(text) {
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.type = 'danger';
    this.text = text;
    this.autoclose = autoclose;
    this.showPanel();
  },
  showPanel: function showPanel() {
    var _this = this;

    var html = "\n        <div class=\"".concat(this.type, "\" id=\"panel\">\n            <p>").concat(this.text, "</p>\n            ").concat(this.autoclose === false ? "<button type=\"button\" onclick=\"panel.closePanel()\">&times</button>" : '', "\n        </div>");

    if (document.getElementById("panel") !== null) {
      this.closePanel();
    }

    document.querySelector("body").insertAdjacentHTML('afterbegin', html);

    if (this.autoclose) {
      setTimeout(function () {
        _this.closePanel();
      }, 3000);
    }
  },
  closePanel: function closePanel() {
    document.getElementById("panel").remove();
  }
};
panel.success('Success text here', true); // panel.info('Info text here', true);
// panel.warning('Info text here', true);
// panel.danger('Info text here', true);