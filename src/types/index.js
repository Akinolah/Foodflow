// Product type as JSDoc
/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {string} imageUrl
 * @property {string} category
 * @property {number} [stock]
 * @property {string} [imageAiHint]
 */

/**
 * @typedef {Product & { quantity: number }} CartItem
 */