const baseRoute = 'http://localhost:5678/api';

// GET
const fetchData = async (route, category) => {
  const res = await fetch(`${baseRoute}${route}`);
  let data = await res.json();

  console.log('data:',data);
  if (category) data = data.filter(item => item.category.name === category);

  console.log(`GET: ${res.statusText}`);
  return data;
};

// POST
const sendData = async (route, data) => {
  let res = await fetch(`${baseRoute}${route}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data)
  });
  let result = await res.json();

  console.log(`POST: ${res.status} ${res.statusText}`);
  return result;
}

export { fetchData, sendData };