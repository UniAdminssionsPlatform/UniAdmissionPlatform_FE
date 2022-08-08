import { data } from './location';

export const city = () => {
  const cities = data.filter((c) => c);
  const name = [];
  for (let i = 0; i < cities.length; i++) name.push(cities[i].name);
  return name;
};

export const cityByName = (cityName) => {
  const cities = data.filter((c) => c.name === cityName);
  return cities;
};

export const distric = (cityName) => {
  const ditrics = cityByName(cityName).filter((ds) => ds);
  const name = [];
  for (let i = 0; i < ditrics[0].districts.length; i++) name.push(ditrics[i].name);
  return name;
};

export const ward = (districID) => {
  const ward = distric(districID).filter((wa) => wa);
  return ward;
};
