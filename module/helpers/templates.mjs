/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/bladeoftheironthrone/templates/actor/parts/actor-skills.html",
    "systems/bladeoftheironthrone/templates/actor/parts/actor-items.html",
    "systems/bladeoftheironthrone/templates/actor/parts/actor-spells.html",
    "systems/bladeoftheironthrone/templates/actor/parts/actor-effects.html",
    "systems/bladeoftheironthrone/templates/actor/parts/actor-attributes.html",
  ]);
};
