export default (data, id) => data.map((prop, index) => prop._id === id && prop._id).indexOf(id);