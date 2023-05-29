const baseRoute = 'http://localhost:5678/api';
const localStorageApp = JSON.parse(localStorage.getItem('ArchiWebos'));


// GET
const fetchData = async (route, category) => {
  const res = await fetch(`${baseRoute}${route}`);
  let data = await res.json();

  console.log('data:',data);
  if (category) data = data.filter(item => item.category.name === category);

  res.status === 200
    ? console.log(`GET: ${res.status} ${res.statusText}`)
    : console.error(`GET ERROR: ${res.status} ${res.statusText}`);

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

  (res.status === 200 || res.status === 201)
    ? console.log(`POST: ${res.status} ${res.statusText}`)
    : console.error(`POST ERROR: ${res.status} ${res.statusText}`);

  return result;
}

const sendNewData = async (route, data) => {
  let res = await fetch(`${baseRoute}${route}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${localStorageApp}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(data)
  });
  let result = await res.json();

  (res.status === 200 || res.status === 201)
    ? console.log(`POST: ${res.status} ${res.statusText}`)
    : console.error(`POST ERROR: ${res.status} ${res.statusText}`);

  return result;
}


// DELETE
const deleteData = async (route, data) => {
  let res = await fetch(`${baseRoute}${route}${data}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${localStorageApp}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    //body: JSON.stringify(data)
    body: JSON.stringify({id: data}),
  });
  const isJson = res.headers.get('content-type')?.includes('application/json');
  let result = isJson && await res.json();

  res.status === 200 || res.status === 204
    ? console.log(`DELETE: ${res.status} ${res.statusText}`)
    : console.error(`DELETE ERROR: ${res.status} ${res.statusText}`);
  
  return result;
};


export { fetchData, sendData, sendNewData, deleteData };