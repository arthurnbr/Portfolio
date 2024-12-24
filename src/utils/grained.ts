/*!
 * Grained.js (TypeScript version)
 * Author : Sarath Saleem (adapté en TS par <votre-nom>)
 * MIT license: http://opensource.org/licenses/MIT
 * GitHub : https://github.com/sarathsaleem/grained
 * v0.0.1
 */

export interface GrainedOptions {
    animate: boolean;
    patternWidth: number;
    patternHeight: number;
    grainOpacity: number;
    grainDensity: number;
    grainWidth: number;
    grainHeight: number;
    grainChaos: number;
    grainSpeed: number;
  }
  
  const defaultOptions: GrainedOptions = {
    animate: true,
    patternWidth: 100,
    patternHeight: 100,
    grainOpacity: 0.1,
    grainDensity: 1,
    grainWidth: 1,
    grainHeight: 1,
    grainChaos: 0.5,
    grainSpeed: 20,
  };
  
  function addCSSRule(
    sheet: CSSStyleSheet,
    selector: string,
    rules: string,
    index = 0
  ): void {
    const rule = selector ? `${selector}{${rules}}` : rules;
    if ("insertRule" in sheet) {
      sheet.insertRule(rule, index);
    } else if ("addRule" in sheet) {
      // @ts-expect-error: addRule n’est plus standard mais présent sur certains navigateurs
      sheet.addRule(selector, rules, index);
    }
  }
  
  /**
   * Applique un effet de grain sur un élément donné.
   *
   * @param ele - Soit l'ID d'un élément (ex: '#myId'), soit directement l'élément HTML
   * @param opt - Options partiellement personnalisées (facultatif)
   */
  export function grained(
    ele: string | HTMLElement,
    opt: Partial<GrainedOptions> = {}
  ): void {
    let element: HTMLElement | null;
    let elementId: string | null = null;
  
    // Récupération de l'élément à partir de son id (#example) ou directement depuis l'objet
    if (typeof ele === "string") {
      const id = ele.replace("#", ""); // on enlève le '#' si présent
      element = document.getElementById(id);
    } else {
      element = ele;
    }
  
    if (!element) {
      console.error(`Grained: impossible de trouver l'élément avec '${ele}'.`);
      return;
    } else {
      elementId = element.id;
      if (!elementId) {
        console.error(`Grained: l'élément fourni n'a pas d'id (obligatoire).`);
        return;
      }
    }
  
    // Configuration du style de l'élément parent
    if (element.style.position !== "absolute") {
      element.style.position = "relative";
    }
    element.style.overflow = "hidden";
  
    // Fusion des options
    const options: GrainedOptions = { ...defaultOptions, ...opt };
  
    // Génération du "bruit" (grain) dans un canvas
    const generateNoise = (): string => {
      const canvas = document.createElement("canvas") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error("Grained: impossible d'obtenir le contexte 2D du canvas.");
        return "";
      }
      canvas.width = options.patternWidth;
      canvas.height = options.patternHeight;
  
      for (let w = 0; w < options.patternWidth; w += options.grainDensity) {
        for (let h = 0; h < options.patternHeight; h += options.grainDensity) {
          const rgb = (Math.random() * 256) | 0;
          ctx.fillStyle = `rgba(${rgb}, ${rgb}, ${rgb}, ${options.grainOpacity})`;
          ctx.fillRect(w, h, options.grainWidth, options.grainHeight);
        }
      }
      return canvas.toDataURL("image/png");
    };
  
    const noise = generateNoise();
  
    // Préparation de l’animation "keyframes"
    const prefixes = ["", "-moz-", "-o-animation-", "-webkit-", "-ms-"];
    let animation = "";
    const keyFrames = [
      "0%:-10%,10%",
      "10%:-25%,0%",
      "20%:-30%,10%",
      "30%:-30%,30%",
      "40%:-20%,20%",
      "50%:-15%,10%",
      "60%:-20%,20%",
      "70%:-5%,20%",
      "80%:-25%,5%",
      "90%:-30%,25%",
      "100%:-10%,10%",
    ];
  
    for (let p = 0; p < prefixes.length; p++) {
      animation += `@${prefixes[p]}keyframes grained{`;
      for (let k = 0; k < keyFrames.length; k++) {
        const [percent, transform] = keyFrames[k].split(":");
        animation += `${percent}{${prefixes[p]}transform:translate(${transform});}`;
      }
      animation += "}";
    }
  
    // Suppression de l'ancien style d'animation si présent
    const oldAnimationStyle = document.getElementById("grained-animation");
    if (oldAnimationStyle && oldAnimationStyle.parentNode) {
      oldAnimationStyle.parentNode.removeChild(oldAnimationStyle);
    }
  
    // Insertion du nouveau style d'animation dans la page
    let styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.id = "grained-animation";
    styleEl.innerHTML = animation;
    document.body.appendChild(styleEl);
  
    // Suppression de l'ancien style spécifique à l'élément si présent
    const oldElementStyle = document.getElementById(`grained-animation-${elementId}`);
    if (oldElementStyle && oldElementStyle.parentNode) {
      oldElementStyle.parentNode.removeChild(oldElementStyle);
    }
  
    // Insertion de la règle CSS pour l'élément
    styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.id = `grained-animation-${elementId}`;
    document.body.appendChild(styleEl);
  
    let rule = `background-image: url(${noise});`;
    rule += `position: absolute; content: ""; height: 300%; width: 300%; left: -100%; top: -100%;`;
  
    if (options.animate) {
      for (let p = 0; p < prefixes.length; p++) {
        rule += `${prefixes[p]}animation-name:grained;`;
        rule += `${prefixes[p]}animation-iteration-count: infinite;`;
        rule += `${prefixes[p]}animation-duration: ${options.grainChaos}s;`;
        rule += `${prefixes[p]}animation-timing-function: steps(${options.grainSpeed}, end);`;
      }
    }
  
    const selectorElement = `#${elementId}::before`;
    addCSSRule(styleEl.sheet as CSSStyleSheet, selectorElement, rule);
  }
  
  export default grained;
  