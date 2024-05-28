import { styles, fonts, WIDGET_ICON, CLOSE_ICON } from './const.js'

class ThemeWidget {
  constructor(position = 'bottom-right') {
    this.position = this.getPosition(position)
    this.open = false
    this.initialize()
    this.injectStyles('widget-styles', styles)
  }

  position = ''
  open = false
  widgetContainer = null
  widgetResetButton = null
  accentColorControl = null
  glowColorOneControl = null
  glowColorTwoControl = null
  titleFontControl = null
  bodyFontControl = null
  postBodyFontControl = null
  heroTitleControl = null
  heroImageControl = null
  originalHeroTitleContent = ''
  heroTaglineControl = null
  originalHeroTaglineContent = ''
  disableGlowControl = null
  footnoteTextControl = null
  originalFootnoteContent = ''

  getPosition(position) {
    const [vertical, horizontal] = position.split('-')
    return {
      [vertical]: '32px',
      [horizontal]: '32px',
    }
  }

  initialize() {
    const container = document.createElement('div')
    container.classList.add('widget-root')
    Object.keys(this.position).forEach((key) => {
      container.style[key] = this.position[key]
    })
    document.body.appendChild(container)

    const buttonContainer = document.createElement('button')
    buttonContainer.setAttribute('aria-label', 'Toggle theme options')
    buttonContainer.classList.add('widget-button')

    const widgetIconElement = document.createElement('span')
    widgetIconElement.innerHTML = WIDGET_ICON
    widgetIconElement.classList.add('widget-icon')
    this.widgetIcon = widgetIconElement

    const closeIconElement = document.createElement('span')
    closeIconElement.innerHTML = CLOSE_ICON
    closeIconElement.classList.add('widget-icon', 'widget-hidden')
    this.closeIcon = closeIconElement

    buttonContainer.appendChild(this.widgetIcon)
    buttonContainer.appendChild(this.closeIcon)
    buttonContainer.addEventListener('click', this.toggleOpen.bind(this))

    this.widgetContainer = document.createElement('div')
    this.widgetContainer.classList.add('widget-container', 'widget-hidden')

    this.createWidgetContent()

    container.appendChild(this.widgetContainer)
    container.appendChild(buttonContainer)

    this.setControlElements()
    this.setInitialValues()
    this.addEventListeners()
  }

  createWidgetContent() {
    this.widgetContainer.innerHTML = `
      <header class="widget-header">
        <h3>Theme Options</h3>
      </header>
      <form class="widget-form">
        <div class="widget-field color">
          <label for="accent-color">Accent color</label>
          <input type="color" id="accent-color" value="#000000" />
        </div>
        <div class="widget-field color">
          <label for="glow-color-1">Glow color 1</label>
          <input type="color" id="glow-color-1" value="#FF64C1" />
        </div>
        <div class="widget-field color">
          <label for="glow-color-2">Glow color 2</label>
          <input type="color" id="glow-color-2" value="#FF9447" />
        </div>
        <div class="widget-field">
          <label for="title-font">Title font</label>
          <select id="title-font">
            ${Object.keys(fonts).map((font) => `<option value="${font}">${font}</option>`).join('')}
          </select>
        </div>
        <div class="widget-field">
          <label for="body-font">Body font</label>
          <select id="body-font">
            ${Object.keys(fonts).map((font) => `<option value="${font}">${font}</option>`).join('')}
          </select>
        </div>
        <div class="widget-field">
          <label for="post-body-font">Post body font</label>
          <select id="post-body-font">
            ${Object.keys(fonts).map((font) => `<option value="${font}">${font}</option>`).join('')}
          </select>
        </div>
        <div class="widget-field homepage-field">
          <label for="hero-title-text">Hero title</label>
          <input type="text" value="" id="hero-title-text">
        </div>
        <div class="widget-field homepage-field">
          <label for="hero-tagline-text">Hero description</label>
          <input type="text" value="" id="hero-tagline-text">
        </div>
        <div class="widget-field homepage-field">
          <label for="hero-image">Hero image</label>
          <input type="file" id="hero-image" accept=".jpg, .jpeg, .png, .webp">
        </div>
        <div class="widget-field checkbox">
          <label for="disable-glow">
            <input type="checkbox" id="disable-glow">
            Disable glow
          </label>
        </div>
        <div class="widget-field">
          <label for="footnote-text">Footnote custom text</label>
          <input type="text" value="" id="footnote-text">
        </div>
      </form>
      <div class="widget-footer">
        <button id="widget-reset-button" class="gl-button small reset">Reset all</button>
        <a href="https://eddiesigner.gumroad.com/l/glow?ref=glow.eduardogomez.io" class="gl-button small" target="_blank" rel="noopener">Buy Glow</a>
      </div>
    `
  }

  injectStyles(id, stylesContent) {
    if (document.getElementById(id)) {
      return
    }
    const styleTag = document.createElement('style')
    styleTag.id = id
    styleTag.innerHTML = stylesContent.replace(/^\s+|\n/gm, '')
    document.head.appendChild(styleTag)
  }

  updateStyles(id, stylesContent) {
    const styleTag = document.getElementById(id)
    styleTag.innerHTML = stylesContent.replace(/^\s+|\n/gm, '')
  }

  getCssVariableValue(variable) {
    return getComputedStyle(document.documentElement).getPropertyValue(variable)
  }

  setCssVariableValue(variable, value) {
    document.documentElement.style.setProperty(variable, value)
  }

  toggleOpen() {
    this.open = !this.open
    this.widgetContainer.classList.toggle('widget-hidden')
    this.widgetIcon.classList.toggle('widget-hidden')
    this.closeIcon.classList.toggle('widget-hidden')
  }

  setControlElements() {
    this.accentColorControl = document.getElementById('accent-color')
    this.glowColorOneControl = document.getElementById('glow-color-1')
    this.glowColorTwoControl = document.getElementById('glow-color-2')
    this.titleFontControl = document.getElementById('title-font')
    this.bodyFontControl = document.getElementById('body-font')
    this.postBodyFontControl = document.getElementById('post-body-font')
    this.heroTitleControl = document.getElementById('hero-title-text')
    this.originalHeroTitleContent = document.querySelector('.gl-home-header__title') ? document.querySelector('.gl-home-header__title').innerHTML : ''
    this.heroTaglineControl = document.getElementById('hero-tagline-text')
    this.originalHeroTaglineContent = document.querySelector('.gl-home-header__description') ? document.querySelector('.gl-home-header__description').innerHTML : ''
    this.heroImageControl = document.getElementById('hero-image')
    this.disableGlowControl = document.getElementById('disable-glow')
    this.footnoteTextControl = document.getElementById('footnote-text')
    this.originalFootnoteContent = document.querySelector('.gl-footer__footnote') ? document.querySelector('.gl-footer__footnote').innerHTML : ''
    this.widgetResetButton = document.getElementById('widget-reset-button')
  }

  setInitialValues() {
    this.accentColorControl.value = this.getCssVariableValue('--accent')
    this.titleFontControl.value = 'Inter'
    this.bodyFontControl.value = 'Geist'
    this.postBodyFontControl.value = 'Source Serif'
    this.injectStyles('title-font-styles', '')
    this.injectStyles('body-font-styles', '')
    this.injectStyles('post-body-font-styles', '')
  }

  addEventListeners() {
    this.accentColorControl.addEventListener('input', this.changeAccentColor.bind(this))
    this.glowColorOneControl.addEventListener('input', this.changeGlowColorOne.bind(this))
    this.glowColorTwoControl.addEventListener('input', this.changeGlowColorTwo.bind(this))
    this.titleFontControl.addEventListener('change', this.changeTitleFont.bind(this))
    this.bodyFontControl.addEventListener('change', this.changeBodyFont.bind(this))
    this.postBodyFontControl.addEventListener('change', this.changePostBodyFont.bind(this))
    this.heroTitleControl.addEventListener('input', this.changeHeroTitle.bind(this))
    this.heroTaglineControl.addEventListener('input', this.changeHeroTagline.bind(this))
    this.heroImageControl.addEventListener('change', this.changeHeroImage.bind(this))
    this.disableGlowControl.addEventListener('change', this.toggleGlow.bind(this))
    this.footnoteTextControl.addEventListener('input', this.changeFootnoteText.bind(this))
    this.widgetResetButton.addEventListener('click', this.resetAll.bind(this))
  }

  changeAccentColor(event) {
    this.setCssVariableValue('--accent', event.target.value)
  }

  changeGlowColorOne(event) {
    this.setCssVariableValue('--glow-1', event.target.value)
  }

  changeGlowColorTwo(event) {
    this.setCssVariableValue('--glow-2', event.target.value)
  }

  changeTitleFont(event) {
    this.injectStyles(event.target.value, fonts[event.target.value].fontFaceStyles)
    this.updateStyles('title-font-styles', fonts[event.target.value].titleFontStyles)
  }

  changeBodyFont(event) {
    this.injectStyles(event.target.value, fonts[event.target.value].fontFaceStyles)
    this.updateStyles('body-font-styles', fonts[event.target.value].bodyFontStyles)
  }

  changePostBodyFont(event) {
    this.injectStyles(event.target.value, fonts[event.target.value].fontFaceStyles)
    this.updateStyles('post-body-font-styles', fonts[event.target.value].postBodyFontStyles)
  }

  changeHeroTitle(event) {
    const heroTitle = document.querySelector('.gl-home-header__title')
    heroTitle.innerHTML = event.target.value ? event.target.value : this.originalHeroTitleContent
  }

  changeHeroTagline(event) {
    const heroTagline = document.querySelector('.gl-home-header__description')
    heroTagline.innerHTML = event.target.value ? event.target.value : this.originalHeroTaglineContent
  }

  changeHeroImage(event) {
    const heroImage = document.querySelector('.gl-home-header__image')
    const file = event.target.files[0]
    if (!file) {
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => {
      heroImage.src = e.target.result
      heroImage.srcset = ''
    }
    reader.readAsDataURL(file)
  }

  toggleGlow(event) {
    const value = event.target.checked ? 'none' : 'block'
    this.setCssVariableValue('--show-glow', value)
  }

  changeFootnoteText(event) {
    const footnote = document.querySelector('.gl-footer__footnote')
    footnote.innerHTML = event.target.value ? event.target.value : this.originalFootnoteContent
  }

  resetAll() {
    window.location.reload()
  }
}

function initializeWidget() {
  return new ThemeWidget()
}

initializeWidget()
