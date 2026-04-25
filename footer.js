document.addEventListener('DOMContentLoaded', function () {
    const footerHTML = `
    <hr>
    <footer>
      <i>The RF Logo, Rotating Fish, And RF Are trademarks Of The The Rotating Fish Group.</i>
      <i><a href="/copywrite.txt" alt="copyright" title="copyright">Copyright © 2026 Rotating Fish.</a> All rights reserved.</i>
      <a href="https://github.com/ONURBTHECOOL/rfsite" title="GitHub">
        <p class="link-button">View Source on GitHub</p>
      </a>
    </footer>
  `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
