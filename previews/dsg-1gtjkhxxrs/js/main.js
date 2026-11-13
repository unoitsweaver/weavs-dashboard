(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav-primary");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.querySelector("[data-concept-form]");
  if (!form) return;
  var note = document.getElementById("form-success");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (note) {
      note.hidden = false;
      note.focus();
    }
    var name = (form.querySelector("[name=name]") || {}).value || "";
    var org = (form.querySelector("[name=organisation]") || {}).value || "";
    var email = (form.querySelector("[name=email]") || {}).value || "";
    var phone = (form.querySelector("[name=phone]") || {}).value || "";
    var service = (form.querySelector("[name=service]") || {}).value || "";
    var message = (form.querySelector("[name=message]") || {}).value || "";
    var body = [
      "Name: " + name,
      "Organisation: " + org,
      "Email: " + email,
      "Telephone: " + phone,
      "Service: " + service,
      "",
      message
    ].join("\n");
    var mailto = form.getAttribute("data-mailto");
    var link = document.getElementById("form-mailto");
    if (link && mailto) {
      link.href = mailto + "?subject=" + encodeURIComponent("Website enquiry" + (service ? " — " + service : "")) + "&body=" + encodeURIComponent(body);
    }
  });
})();
