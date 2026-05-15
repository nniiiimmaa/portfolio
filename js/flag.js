      const langPicker = document.getElementById("lang-picker");
      const selectedFlag = document.getElementById("selected-flag");

      // map language -> flag image
      const flags = {
        en: "./assets/svg/usa.svg",
        fa: "./assets/svg/ir.svg",
        pt: "./assets/svg/br.svg",
        tr: "./assets/svg/tr.svg",
        ar: "./assets/svg/ua.svg",
        de: "./assets/svg/de.svg",
        es: "./assets/svg/es.svg",
      };

      function updateFlag() {
        const lang = langPicker.value;
        selectedFlag.src = flags[lang];
        selectedFlag.alt = `${lang} flag`;
      }

      // initial flag
      updateFlag();

      // update when changed
      langPicker.addEventListener("change", updateFlag);