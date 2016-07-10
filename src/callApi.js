import $ from 'jquery';

export function fetch(url, data) {
  return Promise.resolve($.get(url, data));
}
