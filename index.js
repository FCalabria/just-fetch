async function _doCall(url, fetchOptions) {
  try {
    const result = await fetch(url, fetchOptions);
    if (result.ok) {
      const response = await result.json();
      return Promise.resolve(response);
    } else {
      return Promise.reject(result);
    }
  } catch (error) {
    return error;
  }
}
export default {
  get: (url, options = {}) => _doCall(url, options),
  head: (url, options = {}) => _doCall(url, { method: 'HEAD', ...options }),
  post: (url, data, options = {}) => _doCall(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    ...options
  }),
  put: (url, data, options = {}) => _doCall(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    ...options
  }),
  delete: (url, options = {}) => _doCall(url, { method: 'DELETE', ...options }),
  options: (url, options = {}) => _doCall(url, { method: 'OPTIONS', ...options }),
}
