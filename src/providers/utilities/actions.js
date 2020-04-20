import * as actionTypes from './actionTypes';

export const startFetchResource = id => ({type: actionTypes.startFetchResource, id});

export const doneFetchResource = (id, payload) => ({type: actionTypes.doneFetchResource, id, payload});

export const failFetchResource = (id, error) => ({type: actionTypes.failFetchResource, id, error});

export const startFetch = () => ({type: actionTypes.startFetch});

export const doneFetch = payload => ({type: actionTypes.doneFetch, payload});

export const failFetch = () => ({type: actionTypes.failFetch});
