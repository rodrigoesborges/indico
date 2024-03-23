// This file is part of Indico.
// Copyright (C) 2002 - 2024 CERN
//
// Indico is free software; you can redistribute it and/or
// modify it under the terms of the MIT License; see the
// LICENSE file for more details.

import _ from 'lodash';
import ReactDOM from 'react-dom';

export function toClasses(...params) {
  const obj = params.length === 1 ? params[0] : params;
  if (Array.isArray(obj)) {
    return obj.join(' ').trim();
  } else if (typeof obj === 'string') {
    return obj;
  }
  return Object.entries(obj)
    .map(([k, v]) => (v ? ` ${k}` : ''))
    .join('')
    .trim();
}

/*
 * This mounts a React component (usually a modal) in a temporary location.
 * It takes a function which will be called with `resolve, reject` and render
 * the actual component.
 */
export function injectModal(renderFunc, position = undefined) {
  const container = document.createElement('div');
  document.body.appendChild(container);

  if (position) {
    const {left, top} = position;
    container.style.position = 'absolute';
    container.style.left = `${left}px`;
    container.style.top = `${top}px`;
    container.style.zIndex = '1001';
  }

  const cleanup = () =>
    _.defer(() => {
      ReactDOM.unmountComponentAtNode(container);
      document.body.removeChild(container);
    });

  return new Promise((resolve, reject) => {
    ReactDOM.render(renderFunc(resolve, reject), container);
  }).finally(cleanup);
}
