/* ============================================================
   SHIV CATERERS v2 — customize.js
   Updated class names for v2 redesign
   ============================================================ */
(function () {
  'use strict';

  var catContainer   = document.getElementById('categoriesContainer');
  var form           = document.getElementById('customizeForm');
  var submitBtn      = document.getElementById('submitBtn');
  var errorBanner    = document.getElementById('errorBanner');
  var sumTotalCount  = document.getElementById('sumTotalCount');
  var sumMenuList    = document.getElementById('sumMenuList');
  var sumEventInfo   = document.getElementById('sumEventInfo');
  var successOverlay = document.getElementById('successOverlay');
  var progressBar    = document.getElementById('progressBar');

  if (!catContainer || typeof SHIV_MENU === 'undefined') return;

  var selected = {};

  /* ── Build accordions ── */
  function buildCategories() {
    var html = '';
    SHIV_MENU.forEach(function (cat) {
      selected[cat.id] = new Set();
      html +=
        '<div class="cat-block" id="catBlock-' + cat.id + '" data-cat="' + cat.id + '">' +
          '<button type="button" class="cat-header" aria-expanded="false" aria-controls="catBody-' + cat.id + '">' +
            '<div class="cat-hicon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg></div>' +
            '<span class="cat-name">' + esc(cat.name) + '</span>' +
            '<span class="cat-count-badge" id="catTotal-' + cat.id + '">' + cat.items.length + ' dishes</span>' +
            '<span class="cat-sel-badge" id="catSel-' + cat.id + '">0 selected</span>' +
            '<svg class="cat-chevron" viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg>' +
          '</button>' +
          '<div class="cat-body" id="catBody-' + cat.id + '">' +
            '<div class="cat-body-inner">' +
              '<div class="cat-actions">' +
                '<button type="button" class="cat-act" data-action="all" data-cat="' + cat.id + '">Select All</button>' +
                '<button type="button" class="cat-act" data-action="clear" data-cat="' + cat.id + '">Clear</button>' +
              '</div>' +
              '<div class="cb-grid" id="cbGrid-' + cat.id + '">' + buildItems(cat) + '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    });
    catContainer.innerHTML = html;
    attachEvents();
  }

  function buildItems(cat) {
    return cat.items.map(function (item) {
      var safeId = 'cb-' + cat.id + '-' + item.replace(/[^a-zA-Z0-9]/g, '-');
      var display = item.replace(' ★', '');
      return (
        '<label class="cb-item" data-cat="' + cat.id + '" data-item="' + esc(item) + '">' +
          '<input type="checkbox" id="' + safeId + '" value="' + esc(item) + '" data-cat="' + cat.id + '" />' +
          '<span class="cb-mark"></span>' +
          esc(display) +
        '</label>'
      );
    }).join('');
  }

  function attachEvents() {
    /* Accordion headers */
    catContainer.querySelectorAll('.cat-header').forEach(function (btn) {
      btn.addEventListener('click', function () { toggleCat(this.closest('.cat-block')); });
    });

    catContainer.querySelectorAll('.cb-item input[type="checkbox"]').forEach(function (cb) {
      cb.addEventListener('change', function () { onCheck(this); });
    });

    /* Select All / Clear */
    catContainer.querySelectorAll('.cat-act').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var catId  = this.dataset.cat;
        var action = this.dataset.action;
        var grid   = document.getElementById('cbGrid-' + catId);
        if (!grid) return;
        grid.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
          var should = (action === 'all');
          if (cb.checked !== should) { cb.checked = should; onCheck(cb, true); }
        });
        updateBadge(catId);
        updateSummary();
      });
    });
  }

  function toggleCat(block) {
    var wasOpen = block.classList.contains('open');
    catContainer.querySelectorAll('.cat-block.open').forEach(function (b) {
      b.classList.remove('open');
      b.querySelector('.cat-header').setAttribute('aria-expanded', 'false');
    });
    if (!wasOpen) {
      block.classList.add('open');
      block.querySelector('.cat-header').setAttribute('aria-expanded', 'true');
    }
  }

  function onCheck(cb, silent) {
    var catId = cb.dataset.cat;
    var item  = cb.value;
    var label = cb.closest('.cb-item');
    if (cb.checked) { selected[catId].add(item); if (label) label.classList.add('checked'); }
    else            { selected[catId].delete(item); if (label) label.classList.remove('checked'); }
    if (!silent) { updateBadge(catId); updateSummary(); }
  }

  function updateBadge(catId) {
    var count = selected[catId] ? selected[catId].size : 0;
    var badge = document.getElementById('catSel-' + catId);
    if (badge) {
      badge.textContent = count + ' selected';
      badge.classList.toggle('has-sel', count > 0);
    }
  }

  /* ── Summary ── */
  function updateSummary() {
    var total = 0;
    SHIV_MENU.forEach(function (cat) { if (selected[cat.id]) total += selected[cat.id].size; });
    if (sumTotalCount) sumTotalCount.textContent = total;

    if (sumMenuList) {
      var hasAny = false;
      var html = '';
      SHIV_MENU.forEach(function (cat) {
        if (!selected[cat.id] || selected[cat.id].size === 0) return;
        hasAny = true;
        html += '<div class="sum-cat-block"><div class="sum-cat-name">' + esc(cat.name) + '</div>';
        selected[cat.id].forEach(function (item) {
          html += '<span class="sum-dish-tag">' + esc(item.replace(' ★', '')) + '</span>';
        });
        html += '</div>';
      });
      sumMenuList.innerHTML = hasAny
        ? html
        : '<div class="sum-empty">No dishes selected yet.<br>Expand a category above to begin.</div>';
    }
    updateEventInfo();
  }

  function updateEventInfo() {
    if (!sumEventInfo) return;
    var name   = (document.getElementById('fullName')    || {}).value || '';
    var etype  = (document.getElementById('eventType')   || {}).value || '';
    var guests = (document.getElementById('guestCount')  || {}).value || '';
    var date   = (document.getElementById('eventDate')   || {}).value || '';
    if (name || etype || guests) {
      var html = '';
      if (name)   html += '<div class="sum-event-row"><strong>Name:</strong> ' + esc(name) + '</div>';
      if (etype)  html += '<div class="sum-event-row"><strong>Event:</strong> ' + esc(etype) + '</div>';
      if (guests) html += '<div class="sum-event-row"><strong>Guests:</strong> ' + esc(guests) + '</div>';
      if (date)   html += '<div class="sum-event-row"><strong>Date:</strong> ' + esc(date) + '</div>';
      sumEventInfo.innerHTML = html;
      sumEventInfo.classList.add('visible');
    } else {
      sumEventInfo.classList.remove('visible');
    }
  }

  ['fullName','eventType','guestCount','eventDate'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', updateEventInfo);
  });

  /* ── Validation ── */
  function validate() {
    var ok = true; var errors = [];

    var name    = document.getElementById('fullName');
    var fgName  = document.getElementById('fg-name');
    if (fgName && name) {
      if (!name.value.trim() || name.value.trim().length < 2) { fgName.classList.add('has-error'); ok = false; errors.push('Please enter your full name.'); }
      else fgName.classList.remove('has-error');
    }
    var phone   = document.getElementById('phoneNumber');
    var fgPhone = document.getElementById('fg-phone');
    if (fgPhone && phone) {
      if (!/^\d{10}$/.test(phone.value.replace(/\s/g,''))) { fgPhone.classList.add('has-error'); ok = false; errors.push('Please enter a valid 10-digit mobile number.'); }
      else fgPhone.classList.remove('has-error');
    }
    var guests  = document.getElementById('guestCount');
    var fgG     = document.getElementById('fg-guests');
    if (fgG && guests) {
      if (!guests.value || parseInt(guests.value) < 1) { fgG.classList.add('has-error'); ok = false; errors.push('Please enter the expected number of guests.'); }
      else fgG.classList.remove('has-error');
    }
    var etype   = document.getElementById('eventType');
    var fgE     = document.getElementById('fg-etype');
    if (fgE && etype) {
      if (!etype.value) { fgE.classList.add('has-error'); ok = false; errors.push('Please select your event type.'); }
      else fgE.classList.remove('has-error');
    }
    var total = 0;
    SHIV_MENU.forEach(function (cat) { if (selected[cat.id]) total += selected[cat.id].size; });
    if (total === 0) { ok = false; errors.push('Please select at least one dish.'); }

    if (errorBanner) {
      if (errors.length) {
        errorBanner.textContent = errors[0];
        errorBanner.style.display = 'block';
      } else {
        errorBanner.style.display = 'none';
      }
    }
    return ok;
  }

  ['fullName','phoneNumber','guestCount','eventType'].forEach(function (id) {
  var el = document.getElementById(id);

  if (el) {

    /* Clear errors while typing */
    el.addEventListener('input', function () {
      var fg = this.closest('.form-group');

      if (fg) {
        fg.classList.remove('has-error');
      }

      if (errorBanner) {
        errorBanner.style.display = 'none';
      }
    });

    /* Validate only after leaving field */
    el.addEventListener('blur', function () {
      validate();
    });

  }
});

  /* ── Build WhatsApp message ── */
  function buildMessage() {
    var name    = (document.getElementById('fullName')      || {}).value || '';
    var phone   = (document.getElementById('phoneNumber')   || {}).value || '';
    var guests  = (document.getElementById('guestCount')    || {}).value || '';
    var etype   = (document.getElementById('eventType')     || {}).value || '';
    var loc     = (document.getElementById('eventLocation') || {}).value || '';
    var date    = (document.getElementById('eventDate')     || {}).value || '';
    var special = (document.getElementById('specialReq')    || {}).value || '';
    var lines = [
      '*Custom Menu Request — Shiv Caterers*',
      '──────────────────────────',
      '*Name:* ' + name,
      '*Mobile:* ' + phone,
      '*Event:* ' + etype,
      '*Guests:* ' + guests,
    ];
    if (date)  lines.push('*Date:* ' + date);
    if (loc)   lines.push('*Location:* ' + loc);
    lines.push('');
    lines.push('*SELECTED MENU ITEMS:*');
    lines.push('──────────────────────────');
    var count = 0;
    SHIV_MENU.forEach(function (cat) {
      if (!selected[cat.id] || selected[cat.id].size === 0) return;
      lines.push('');
      lines.push('*' + cat.name + ':*');
      selected[cat.id].forEach(function (item) { lines.push('  • ' + item.replace(' ★', '')); count++; });
    });
    lines.push('');
    lines.push('──────────────────────────');
    lines.push('*Total Dishes:* ' + count);
    if (special) lines.push('*Special Requirements:* ' + special);
    lines.push('');
    lines.push('_Please share pricing and confirm availability. Thank you!_');
    lines.push('_Sent via shivcaterers.in Customize Menu_');
    return lines.join('\n');
  }

  /* ── Form submit ── */
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate()) {

  if (errorBanner) {
    errorBanner.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  return;
}
      var waURL = 'https://wa.me/919130192121?text=' + encodeURIComponent(buildMessage());
      if (submitBtn) { submitBtn.textContent = 'Opening WhatsApp…'; submitBtn.disabled = true; }
      window.open(waURL, '_blank', 'noopener,noreferrer');
      setTimeout(function () {
        showSuccess();
        if (submitBtn) { submitBtn.innerHTML = 'Menu Sent on WhatsApp'; submitBtn.disabled = false; }
      }, 900);
    });
  }

  function showSuccess() {
    if (!successOverlay) return;
    successOverlay.classList.add('is-visible');
    if (progressBar) setTimeout(function () { progressBar.style.width = '100%'; }, 100);
    setTimeout(function () {
      successOverlay.classList.remove('is-visible');
      if (progressBar) progressBar.style.width = '0';
    }, 2600);
    successOverlay.addEventListener('click', function (e) {
      if (e.target === successOverlay) successOverlay.classList.remove('is-visible');
    }, { once: true });
  }

  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  buildCategories();
  updateSummary();
})();
