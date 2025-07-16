import axios from 'axios';

const API = 'http://localhost:5000/api/bugs';

export const fetchBugs = () => axios.get(API);
export const createBug = (data) => axios.post(API, data);
export const updateBug = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteBug = (id) => axios.delete(`${API}/${id}`);
