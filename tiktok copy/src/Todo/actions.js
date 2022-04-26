import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constants";

// 3.Actions

// @param: job
export const setJob = (payload) => ({
   type: SET_JOB,
   payload
})

// @param: job
export const addJob = (payload) => ({
   type: ADD_JOB,
   payload
})

// @param: index
export const deleteJob = (payload) => ({
   type: DELETE_JOB,
   payload
})