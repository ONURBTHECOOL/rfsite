$(function () {
    $("#nav-placeholder").load("/nav.html", function () {
        const navbar = $(this).find(".navbar")[0];

        if (!navbar) {
            return;
        }

        let updateFrame = 0;
        let navbarCompacted = false;
        let fullRequiredWidth = 0;

        const updateNavbarLayout = () => {
            const nav = navbar.querySelector(".navbar-nav");
            const brand = navbar.querySelector(".navbar-brand");
            const items = nav ? Array.from(nav.children) : [];
            const moreDropdown = Array.from(navbar.querySelectorAll(".navbar-nav > .dropdown"))
                .find((item) => item.querySelector(".dropdown-toggle")?.textContent.includes("More"));
            const moreMenu = moreDropdown ? moreDropdown.querySelector(".dropdown-menu") : null;
            const wideItems = items.filter((item) => item.classList.contains("navbar-wide-only"));

            const isMobile = window.matchMedia("(max-width: 767px)").matches;
            const availableWidth = navbar.getBoundingClientRect().width;
            const existingCompactItems = moreMenu
                ? moreMenu.querySelectorAll(".navbar-more-only")
                : [];

            existingCompactItems.forEach((item) => item.remove());
            navbar.classList.remove("navbar-compacted");

            const brandWidth = brand ? brand.getBoundingClientRect().width : 0;
            const linksWidth = items.reduce((width, item) => {
                const rect = item.getBoundingClientRect();
                return width + rect.width;
            }, 0);
            fullRequiredWidth = brandWidth + linksWidth + 30;

            if (navbarCompacted) {
                navbarCompacted = isMobile || availableWidth < fullRequiredWidth + 40;
            } else {
                navbarCompacted = isMobile || availableWidth < fullRequiredWidth - 10;
            }

            navbar.classList.toggle("navbar-compacted", navbarCompacted);

            if (navbarCompacted) {
                wideItems.forEach((item) => {
                    const compactItem = document.createElement("li");
                    compactItem.className = "navbar-more-only";
                    compactItem.innerHTML = item.innerHTML;

                    const link = compactItem.querySelector("a");
                    if (link) {
                        link.removeAttribute("onclick");
                        const wideLink = item.querySelector("a");
                        if (wideLink && wideLink.getAttribute("onclick")) {
                            link.setAttribute("onclick", wideLink.getAttribute("onclick"));
                        }
                    }

                    moreMenu.appendChild(compactItem);
                });
            } else {
                existingCompactItems.forEach((item) => item.remove());
            }
        };

        const scheduleNavbarUpdate = () => {
            if (updateFrame) {
                cancelAnimationFrame(updateFrame);
            }

            updateFrame = requestAnimationFrame(() => {
                updateFrame = 0;
                updateNavbarLayout();
            });
        };

        scheduleNavbarUpdate();
        window.addEventListener("resize", scheduleNavbarUpdate);

        if ("ResizeObserver" in window) {
            const resizeObserver = new ResizeObserver(scheduleNavbarUpdate);
            resizeObserver.observe(navbar);
        }
    });
});