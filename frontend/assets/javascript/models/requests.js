const baseRoute = 'http://localhost:5678/api';
const localStorageApp = JSON.parse(localStorage.getItem('ArchiWebos'));


// ////////
// G E T //
// ////////
const fetchData = async (route, category) => {
  const res = await fetch(`${baseRoute}${route}`);
  let data = await res.json();

  if (category) data = data.filter(item => item.category.name === category);

  res.status === 200
    ? console.log(`GET: ${res.status} ${res.statusText}`)
    : console.error(`GET ERROR: ${res.status} ${res.statusText}`);

  return data;
};


// //////////
// P O S T //
// //////////
const sendData = async (route, data) => {
  let res = await fetch(`${baseRoute}${route}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data)
  });
  let result = await res.json();

  res.status === 200 || res.status === 201
    ? console.log(`POST: ${res.status} ${res.statusText}`)
    : console.error(`POST ERROR: ${res.status} ${res.statusText}`);

  return result;
}

// ////////////////////////////////////////
// P O S T -> Ajout d'une nouvelle image //
// ////////////////////////////////////////
const sendNewData = async (route, data) => {
  const formData  = new FormData();
  formData.append('title', data.title);
  formData.append('image', data.imageFile, data.imageFile.name);
  formData.append('category', data.categoryId);

  let res = await fetch(`${baseRoute}${route}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorageApp}`,
    },
    body: formData
  });
  let result = await res.json();

  res.status === 200 || res.status === 201
    ? console.log(`POST: ${res.status} ${res.statusText}`)
    : console.error(`POST ERROR: ${res.status} ${res.statusText}`);

  return result;
}

// //////////////
// D E L E T E //
// //////////////
const deleteData = async (route, data) => {
  let res = await fetch(`${baseRoute}${route}${data}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${localStorageApp}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
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