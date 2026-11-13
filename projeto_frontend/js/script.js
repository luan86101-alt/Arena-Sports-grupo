/* ==========================================================================
   ARENA SPORTS — script.js
   JavaScript usado SOMENTE onde o HTML/CSS sozinho não resolve.
   1) Menu responsivo ........ abre/fecha a navegação em telas pequenas.
   2) Formulários ............ mostra feedback de envio (projeto Front-End:
                               NADA é enviado nem armazenado em servidor).
   3) Contador de caracteres . acompanha o limite (maxlength) das mensagens.
   4) Filtro da galeria ...... mostra/oculta figuras por categoria.
   ========================================================================== */
(function () {
  "use strict";

  // Marca que o JS está ativo (o CSS só esconde o menu no mobile quando há JS).
  document.documentElement.classList.add("js");

  // 1) Menu responsivo ------------------------------------------------------
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu-principal");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
  }

  // 2) Formulários ----------------------------------------------------------
  // Se o formulário for válido, evita o recarregamento, exibe a confirmação e
  // limpa os campos. Se for inválido, o navegador mostra as mensagens nativas
  // do HTML5 e a classe "was-validated" destaca os campos com problema.
  document.querySelectorAll("form[data-form]").forEach(function (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (event) {
      form.classList.add("was-validated");
      if (!form.checkValidity()) { return; }
      event.preventDefault();
      if (status) {
        status.textContent = form.getAttribute("data-success");
        status.hidden = false;
        status.focus();
      }
      form.reset();
      form.classList.remove("was-validated");
      form.querySelectorAll("[data-counter]").forEach(updateCounter);
    });
    form.addEventListener("reset", function () {
      form.classList.remove("was-validated");
      if (status) { status.hidden = true; }
      window.setTimeout(function () {
        form.querySelectorAll("[data-counter]").forEach(updateCounter);
      }, 0);
    });
  });

  // 3) Contador de caracteres -----------------------------------------------
  function updateCounter(field) {
    var out = document.getElementById(field.getAttribute("data-counter"));
    if (out) { out.textContent = field.value.length + " / " + field.maxLength + " caracteres"; }
  }
  document.querySelectorAll("[data-counter]").forEach(function (field) {
    field.addEventListener("input", function () { updateCounter(field); });
    updateCounter(field);
  });

  // 4) Filtro da galeria ----------------------------------------------------
  var chips = document.querySelectorAll(".chip[data-filter]");
  var items = document.querySelectorAll("[data-category]");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var filter = chip.getAttribute("data-filter");
      chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
      items.forEach(function (item) {
        item.hidden = !(filter === "todos" || item.getAttribute("data-category") === filter);
      });
    });
  });
})();
