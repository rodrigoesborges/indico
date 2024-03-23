// This file is part of Indico.
// Copyright (C) 2002 - 2024 CERN
//
// Indico is free software; you can redistribute it and/or
// modify it under the terms of the MIT License; see the
// LICENSE file for more details.

export const SET_FILTER_PARAMETER = 'filters/SET_PARAMETER';
export const SET_FILTERS = 'filters/SET';

export function setFilterParameter(namespace, param, data) {
  return {type: SET_FILTER_PARAMETER, namespace, param, data};
}

export function setFilters(namespace, params, merge = true) {
  return {type: SET_FILTERS, namespace, params, merge};
}
