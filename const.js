export const styles = `
  .widget-root {
    position: fixed;
    z-index: 1000;
  }
  .widget-container * {
    box-sizing: border-box;
  }
  .widget-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 320px;
    position: absolute;
    right: -16px;
    bottom: 72px;
    max-height: calc(100vh - 180px);
    padding: 24px;
    border-radius: 8px;
    border: 1px solid var(--border);
    box-sizing: border-box;
    overflow: auto;
    color: var(--body-text);
    background-color: var(--background);
    box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
    transition: max-height .2s ease;
  }
  .widget-container.hidden {
    max-height: 0px;
  }
  .widget-button {
    appearance: none;
    width: 56px;
    height: 56px;
    position: relative;
    border-radius: 50%;
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: var(--accent);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 8px 16px -2px;
    transition: opacity .2s linear;
  }
  .widget-button:hover {
    opacity: 0.9;
  }
  .widget-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -16px;
    margin-left: -16px;
    cursor: pointer;
    color: var(--text-on-accent);
    transition: transform .3s ease;
  }
  .widget-hidden {
    transform: scale(0);
  }
  .widget-header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .widget-header h3 {
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0;
  }
  .widget-header p {
    line-height: 1.4;
    font-size: 0.875rem;
    font-weight: 500;
    margin: 0;
    opacity: 0.8;
  }
  .widget-form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .widget-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .widget-field.color {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .widget-field label {
    font-size: 0.9375rem;
    font-weight: 500;
  }
  .widget-field.checkbox label {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .widget-field.checkbox input {
    margin: 0;
  }
  .widget-field input,
  .widget-field select {
    color: var(--body-text);
    font-size: 0.9375rem;
    padding: 4px 8px;
    border: 1px solid var(--border);
    background-color: var(--background);
  }
  .widget-field input[type="color"] {
    width: 32px;
    height: 32px;
    appearance: none;
    padding: 0;
    border: none;
    background: none;
  }
  .widget-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .gl-button.small.reset {
    color: var(--accent);
    font-weight: normal;
    background-color: transparent;
    border: 1px solid var(--accent);
  }
  .homepage-field,
  .post-field {
    display: none;
  }
  .home-template .homepage-field {
    display: flex;
  }
  .post-template .post-field {
    display: flex;
  }
  @media only screen and (max-width: 568px) {
    .widget-root {
      bottom: 16px !important;
      right: 16px !important;
    }
    .widget-container {
      width: 280px;
      max-height: calc(100vh - 240px);
      right: 0;
    }
  }
`

export const fonts = {
  'Albert Sans': {
    fontFaceStyles: `@font-face {
      font-family: "Albert Sans";
      src: url("/assets/fonts/AlbertSans-VariableFont_wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Albert Sans";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Albert Sans";
      --font-factor: 1.1;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Albert Sans";
      --post-font-factor: 1.1;
    }`
  },
  'Alegreya': {
    fontFaceStyles: `@font-face {
      font-family: "Alegreya";
      src: url("/assets/fonts/Alegreya-VariableFont_wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Alegreya";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Alegreya";
      --font-factor: 1.2;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Alegreya";
      --post-font-factor: 1.2;
    }`
  },
  'Archivo': {
    fontFaceStyles: `@font-face {
      font-family: "Archivo Variable";
      src: url("/assets/fonts/Archivo-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Archivo Variable";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Archivo Variable";
      --font-factor: 1.1;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Archivo Variable";
      --post-font-factor: 1.1;
    }`
  },
  'Be Vietnam Pro': {
    fontFaceStyles: `@font-face {
      font-family: "BeVietnamPro-Variable";
      src: url("/assets/fonts/BeVietnamPro-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "BeVietnamPro-Variable";
    }`,
    bodyFontStyles: `:root {
      --body-font: "BeVietnamPro-Variable";
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "BeVietnamPro-Variable";
    }`
  },
  'Bespoke Slab': {
    fontFaceStyles: `@font-face {
      font-family: "Bespoke Slab Variable";
      src: url("/assets/fonts/BespokeSlab-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Bespoke Slab Variable";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Bespoke Slab Variable";
      --font-factor: 1.1;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Bespoke Slab Variable";
      --post-font-factor: 1.1;
    }`
  },
  'Bricolage Grotesque': {
    fontFaceStyles: `@font-face {
      font-family: "Bricolage Grotesque";
      src: url("/assets/fonts/BricolageGrotesque[opsz,wdth,wght].woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Bricolage Grotesque";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Bricolage Grotesque";
      --font-factor: 1.1;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Bricolage Grotesque";
      --post-font-factor: 1.1;
    }`
  },
  'DM Sans': {
    fontFaceStyles: `@font-face {
      font-family: "DM Sans";
      src: url("/assets/fonts/DMSans-VariableFont_opsz,wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "DM Sans";
    }`,
    bodyFontStyles: `:root {
      --body-font: "DM Sans";
      --font-factor: 1.1;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "DM Sans";
      --post-font-factor: 1.1;
    }`
  },
  'Domine': {
    fontFaceStyles: `@font-face {
      font-family: "Domine";
      src: url("/assets/fonts/Domine-VariableFont_wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Domine";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Domine";
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Domine";
    }`
  },
  'Epilogue': {
    fontFaceStyles: `@font-face {
      font-family: "Epilogue";
      src: url("/assets/fonts/Epilogue-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Epilogue";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Epilogue";
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Epilogue";
    }`
  },
  'Fira Sans': {
    fontFaceStyles: `@font-face {
      font-family: "Fira Sans Variable";
      src: url("/assets/fonts/FiraSans-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Fira Sans Variable";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Fira Sans Variable";
      --font-factor: 1.05;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Fira Sans Variable";
      --post-font-factor: 1.05;
    }`
  },
  'Fraunces': {
    fontFaceStyles: `@font-face {
      font-family: "Fraunces";
      src: url("/assets/fonts/Fraunces[SOFT,WONK,opsz,wght].woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Fraunces";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Fraunces";
      --font-factor: 1.1;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Fraunces";
      --post-font-factor: 1.1;
    }`
  },
  'Geist': {
    fontFaceStyles: `@font-face {
      font-family: "Geist Variable";
      src: url("/assets/fonts/GeistVariableVF.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Geist Variable";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Geist Variable";
      --font-factor: 1.1;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Geist Variable";
      --post-font-factor: 1.1;
    }`
  },
  'General Sans': {
    fontFaceStyles: `@font-face {
      font-family: "GeneralSans-Variable";
      src: url("/assets/fonts/GeneralSans-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "GeneralSans-Variable";
    }`,
    bodyFontStyles: `:root {
      --body-font: "GeneralSans-Variable";
      --font-factor: 1.1;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "GeneralSans-Variable";
      --post-font-factor: 1.1;
    }`
  },
  'Hind': {
    fontFaceStyles: `@font-face {
      font-family: "Hind Variable";
      src: url("/assets/fonts/Hind-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Hind Variable";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Hind Variable";
      --font-factor: 1.15;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Hind Variable";
      --post-font-factor: 1.15;
    }`
  },
  'Hubot Sans': {
    fontFaceStyles: `@font-face {
      font-family: "Hubot-Sans";
      src: url("/assets/fonts/Hubot-Sans.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Hubot-Sans";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Hubot-Sans";
      --font-factor: 1.05;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Hubot-Sans";
      --post-font-factor: 1.05;
    }`
  },
  'Inter': {
    fontFaceStyles: `@font-face {
      font-family: "Inter Variable";
      src: url("/assets/fonts/InterVariable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Inter Variable";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Inter Variable";
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Inter Variable";
    }`
  },
  'Literata': {
    fontFaceStyles: `@font-face {
      font-family: "Literata Variable";
      src: url("/assets/fonts/Literata-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Literata Variable";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Literata Variable";
      --font-factor: 1.05;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Literata Variable";
      --post-font-factor: 1.05;
    }`
  },
  'Lora': {
    fontFaceStyles: `@font-face {
      font-family: "Lora";
      src: url("/assets/fonts/Lora-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Lora";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Lora";
      --font-factor: 1.05;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Lora";
      --post-font-factor: 1.05;
    }`
  },
  'Mona Sans': {
    fontFaceStyles: `@font-face {
      font-family: "Mona Sans";
      src: url("/assets/fonts/Mona-Sans.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Mona Sans";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Mona Sans";
      --font-factor: 1.05;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Mona Sans";
      --post-font-factor: 1.05;
    }`
  },
  'Newsreader': {
    fontFaceStyles: `@font-face {
      font-family: "Newsreader";
      src: url("/assets/fonts/Newsreader-VariableFont_opsz,wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Newsreader";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Newsreader";
      --font-factor: 1.2;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Newsreader";
      --post-font-factor: 1.2;
    }`
  },
  'Noto Serif': {
    fontFaceStyles: `@font-face {
      font-family: "NotoSerif-VariableFont";
      src: url("/assets/fonts/NotoSerif-VariableFont_wdth,wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "NotoSerif-VariableFont";
    }`,
    bodyFontStyles: `:root {
      --body-font: "NotoSerif-VariableFont";
      --font-factor: 1.05;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "NotoSerif-VariableFont";
      --post-font-factor: 1.05;
    }`
  },
  'Onest': {
    fontFaceStyles: `@font-face {
      font-family: "Onest";
      src: url("/assets/fonts/Onest-VariableFont_wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Onest";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Onest";
      --font-factor: 1.05;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Onest";
      --post-font-factor: 1.05;
    }`
  },
  'Piazzolla': {
    fontFaceStyles: `@font-face {
      font-family: "Piazzolla";
      src: url("/assets/fonts/Piazzolla[opsz,wght].woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Piazzolla";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Piazzolla";
      --font-factor: 1.15;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Piazzolla";
      --post-font-factor: 1.15;
    }`
  },
  'Plus Jakarta Sans': {
    fontFaceStyles: `@font-face {
      font-family: "Plus Jakarta Sans";
      src: url("/assets/fonts/PlusJakartaSans-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Plus Jakarta Sans";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Plus Jakarta Sans";
      --font-factor: 1.05;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Plus Jakarta Sans";
      --post-font-factor: 1.05;
    }`
  },
  'Poppins': {
    fontFaceStyles: `@font-face {
      font-family: "Poppins Devanagari";
      src: url("/assets/fonts/Poppins-VariableFont_wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Poppins Devanagari";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Poppins Devanagari";
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Poppins Devanagari";
    }`
  },
  'Roboto': {
    fontFaceStyles: `@font-face {
      font-family: "Roboto Flex";
      src: url("/assets/fonts/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Roboto Flex";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Roboto Flex";
      --font-factor: 1.1;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Roboto Flex";
      --post-font-factor: 1.1;
    }`
  },
  'Roboto Slab': {
    fontFaceStyles: `@font-face {
      font-family: "Roboto Slab";
      src: url("/assets/fonts/RobotoSlab-VariableFont_wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Roboto Slab";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Roboto Slab";
      --font-factor: 1.05;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Roboto Slab";
      --post-font-factor: 1.05;
    }`
  },
  'Rowan': {
    fontFaceStyles: `@font-face {
      font-family: "Rowan Variable";
      src: url("/assets/fonts/Rowan-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Rowan Variable";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Rowan Variable";
      --font-factor: 1.1;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Rowan Variable";
      --post-font-factor: 1.1;
    }`
  },
  'Rubik': {
    fontFaceStyles: `@font-face {
      font-family: "Rubik";
      src: url("/assets/fonts/Rubik-VariableFont_wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Rubik";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Rubik";
      --font-factor: 1.05;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Rubik";
      --post-font-factor: 1.05;
    }`
  },
  'Satoshi': {
    fontFaceStyles: `@font-face {
      font-family: "Satoshi Variable";
      src: url("/assets/fonts/Satoshi-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Satoshi Variable";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Satoshi Variable";
      --font-factor: 1.1;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Satoshi Variable";
      --post-font-factor: 1.1;
    }`
  },
  'Sora': {
    fontFaceStyles: `@font-face {
      font-family: "Sora Variable";
      src: url("/assets/fonts/Sora-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Sora Variable";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Sora Variable";
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Sora Variable";
    }`
  },
  'Source Sans': {
    fontFaceStyles: `@font-face {
      font-family: "Source Sans 3";
      src: url("/assets/fonts/SourceSans3-VariableFont_wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Source Sans 3";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Source Sans 3";
      --font-factor: 1.15;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Source Sans 3";
      --post-font-factor: 1.15;
    }`
  },
  'Source Serif': {
    fontFaceStyles: `@font-face {
      font-family: "Source Serif 4";
      src: url("/assets/fonts/SourceSerif4-VariableFont_opsz,wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Source Serif 4";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Source Serif 4";
      --font-factor: 1.15;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Source Serif 4";
      --post-font-factor: 1.15;
    }`
  },
  'Spline Sans': {
    fontFaceStyles: `@font-face {
      font-family: "Spline Sans";
      src: url("/assets/fonts/SplineSans-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Spline Sans";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Spline Sans";
      --font-factor: 1.075;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Spline Sans";
      --post-font-factor: 1.075;
    }`
  },
  'Urbanist': {
    fontFaceStyles: `@font-face {
      font-family: "Urbanist";
      src: url("/assets/fonts/Urbanist[wght].woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Urbanist";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Urbanist";
      --font-factor: 1.1;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Urbanist";
      --post-font-factor: 1.1;
    }`
  },
  'Vollkorn': {
    fontFaceStyles: `@font-face {
      font-family: "Vollkorn";
      src: url("/assets/fonts/Vollkorn-VariableFont_wght.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Vollkorn";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Vollkorn";
      --font-factor: 1.15;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Vollkorn";
      --post-font-factor: 1.15;
    }`
  },
  'Zodiak': {
    fontFaceStyles: `@font-face {
      font-family: "Zodiak Variable";
      src: url("/assets/fonts/Zodiak-Variable.woff2") format('woff2');
      font-weight: 200 700;
      font-display: swap;
      font-style: normal;
    }`,
    titleFontStyles: `:root {
      --title-font: "Zodiak Variable";
    }`,
    bodyFontStyles: `:root {
      --body-font: "Zodiak Variable";
      --font-factor: 1.05;
    }`,
    postBodyFontStyles: `:root {
      --post-body-font: "Zodiak Variable";
      --post-font-factor: 1.05;
    }`
  },
}

export const WIDGET_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
`

export const CLOSE_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
`
