// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (C) 2026 Rotating Fish Corporation

document.addEventListener('DOMContentLoaded', function () {
    const footerHTML = `
    <hr>
    <footer>
      <i>The RF Logo, Rotating Fish, and RF are trademarks of the Rotating Fish Group.</i><br>
      <i>This website and its source code are licensed under the GNU General Public License v3 (GPL-3.0-or-later). <a href="/LICENSE" title="License">See /LICENSE</a></i>
      <a href="https://github.com/ONURBTHECOOL/rfsite" title="GitHub">
        <p class="link-button">View Source on GitHub</p>
      </a>
    </footer>
  `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
