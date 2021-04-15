const basePath = '/api/data/';

export const getServerData = async function (type) {
  const res = await fetch(`${basePath}${type}`);
  const data = await res.json();
  return data;
};

export const addData = async function (path, data) {
  const res = await fetch(`${basePath}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json;
};
