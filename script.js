// Mobile menu toggle
document.querySelectorAll('.menu-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var header = btn.closest('header');
    header.classList.toggle('menu-open');
    var expanded = header.classList.contains('menu-open');
    btn.setAttribute('aria-expanded', expanded);
  });
});

// Desktop "Categories" dropdown
document.querySelectorAll('.dropdown-toggle').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var dropdown = btn.closest('.dropdown');
    var wasOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.dropdown.open').forEach(function (d) { d.classList.remove('open'); });
    if (!wasOpen) dropdown.classList.add('open');
  });
});

// Close dropdown when clicking outside it
document.addEventListener('click', function () {
  document.querySelectorAll('.dropdown.open').forEach(function (d) { d.classList.remove('open'); });
});
