const baseRoute = 'http://localhost:5678/api';

// GET
const fetchData = async (route, category) => {
  const res = await fetch(`${baseRoute}${route}`);
  let data = await res.json();

  console.log('data:',data);
  if (category) data = data.filter(item => item.category.name === category);

  console.log(`Get complete: ${res.statusText}`);
  return data;
};

export { fetchData };