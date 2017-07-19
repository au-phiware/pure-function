export default (value) => (
  value !== null && value !== undefined && String(value).trim().length > 0
);
