import {
  filterOutListingsWithoutMedia,
  filterOutFloorplans,
  filterOutRejectedAgentNames
} from './Listings.Format.utils';
let EastSideListings = require('../../json/EastSideListings.json');

export class ListingsApi {
  
  Get(criteria) {
    let body = generateBody({...criteria, ...EastSideListings});
    
    return fetch('https://corcoran.azure-api.net/r/api/r1/searchlistings', {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': '847d68cc2ee14d9e908a428595b481d8',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(checkStatus)
    .then(response => response.json() )
    .then(listings => {
      listings = filterOutFloorplans(listings);
      listings = filterOutListingsWithoutMedia(listings);
      listings = filterOutRejectedAgentNames(listings);
      return listings;
    }).catch(err => {
      console.warn('Getting Listings Failed', err)
      return err.response.status == 204 ? [] : null;
    });
  }
  
}

function generateBody(criteria) {
  let body = { 'Page': 1, 'PageSize': 20 };
  for (key in criteria) {
    body[key] = criteria[key];
  }
  return body;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300 && response.status != 204) {
    return response;
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error;
  }
}