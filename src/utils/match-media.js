/**
 * Partial source from library angular-match-media.
 *
 * @see https://github.com/jacopotarantino/angular-match-media/blob/master/match-media.js
 * @type {{lg: string, md: string, sm: string, xs: string}}
 */

const defaultRules = {
  lg: '(min-width: 1200px)',
  md: '(min-width: 992px) and (max-width: 1199px)',
  sm: '(min-width: 768px) and (max-width: 991px)',
  xs: '(max-width: 767px)',
};

const assureList = (list) => {

  if (typeof list !== 'string' && Object.prototype.toString.call(list) !== '[object Array]') {
    throw new Error('screenSize requires array or comma-separated list');
  }

  return typeof list === 'string' ? list.split(/\s*,\s*/) : list;
};

const getCurrentMatch = () => {
  const rules = defaultRules;

  for (var property in rules) {
    if (rules.hasOwnProperty(property)) {
      if (window.matchMedia(rules[property]).matches) {
        return property;
      }
    }
  }
};

/**
 * Determine the screen size: `is('xs, md')`
 * @param list
 * @returns {boolean}
 */
export const is = (list) => {
  list = assureList(list);
  return list.indexOf(getCurrentMatch()) !== -1;
};