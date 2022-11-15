(() => {
  if (!window.$docsify) {
    throw new Error("Docsify must be loaded before installing this plugin.");
  }

  window.$docsify.plugins.push(hook => {
    hook.mounted(() => {
      function getTheme() {
        return localStorage.getItem("theme") || "auto";
      }

      function isDark() {
        if (theme === "auto") {
          return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return theme === "dark";
      }

      function setTheme(newTheme) {
        const noTransitions = Object.assign(document.createElement("style"), {
          textContent: "* { transition: none !important; }"
        });

        theme = newTheme;
        localStorage.setItem("theme", theme);

        // Update the UI
        [...menu.querySelectorAll("em9-menu-item")].map(item => (item.checked = item.getAttribute("value") === theme));
        menuIcon.name = isDark() ? "bulk-moon" : "bulk-sun-1";

        // Toggle the dark mode class without transitions
        document.body.appendChild(noTransitions);
        requestAnimationFrame(() => {
          document.documentElement.classList.toggle("em9-theme-dark", isDark());
          requestAnimationFrame(() => document.body.removeChild(noTransitions));
        });
      }

      let theme = getTheme();

      // Generate the theme picker dropdown
      const dropdown = document.createElement("em9-dropdown");
      dropdown.classList.add("theme-picker");
      dropdown.innerHTML = `
        <em9-button size="small"  slot="trigger" onlyicon caret variant="secondary gray">
          <em9-icon style="font-size: var(--em9-font-size-x-large)" name="bulk-sun-1" label="Select Theme"></em9-icon>
        </em9-button>
        <em9-menu>
          <em9-menu-label>Toggle <kbd>\\</kbd></em9-menu-label>
          <em9-menu-item value="light">Light</em9-menu-item>
          <em9-menu-item value="dark">Dark</em9-menu-item>
          <em9-divider></em9-divider>
          <em9-menu-item value="auto">Auto</em9-menu-item>
        </em9-menu>
      `;
      document.querySelector(".sidebar-toggle").insertAdjacentElement("afterend", dropdown);

      // Listen for selections
      const menu = dropdown.querySelector("em9-menu");
      const menuIcon = dropdown.querySelector("em9-icon");
      menu.addEventListener("em9-select", event => setTheme(event.detail.item.value));

      // Update the theme when the preference changes
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => setTheme(theme));

      // Toggle themes when pressing backslash
      document.addEventListener("keydown", event => {
        if (
          event.key === "\\" &&
          !event.composedPath().some(el => ["input", "textarea"].includes(el?.tagName?.toLowerCase()))
        ) {
          event.preventDefault();

          setTheme(isDark() ? "light" : "dark");
        }
        updateColors();
      });

      // update all colors
      function updateColors() {
      }

      // Init axe core

      // Set the initial theme and sync the UI
      setTheme(theme);
    });
  });

  // colors swatches
  window.$docsify.plugins.push((hook) => {
    hook.doneEach(() => {

      const swatches = document.querySelectorAll(".color-palette__swatch");
      swatches.forEach((swatch) => {
        const color = window.getComputedStyle(swatch, null).getPropertyValue('background-color', 'color');
        const hex = window.rgbHex(color);
        swatch.parentElement.setAttribute("data-color", hex);
        swatch.parentElement.appendChild(document.createElement("span")).innerHTML = hex;
        swatch.parentElement.lastChild.classList.add("hex");

        // get the hex value from background linear-gradient color
        if (swatch.parentElement.getAttribute("data-color").includes("linear-gradient")) {
          const rgb = swatch.parentElement.getAttribute("data-color").match(/rgb\(([^)]+)\)/)[1];
          const gradient = window.rgbHex(`rgb(${rgb})`);
          swatch.parentElement.setAttribute("data-color", gradient);
          swatch.parentElement.appendChild(document.createElement("span")).innerHTML = gradient;
          swatch.parentElement.lastChild.classList.add("hex");
        }


        swatch.parentElement.addEventListener("click", () => {
          const input = document.createElement("input");
          document.body.appendChild(input);
          input.value = hex;
          input.select();
          document.execCommand("copy");
          document.body.removeChild(input);
        });
      });
    });
  });
})();
