export function filterOutListingsWithoutMedia(listings) {
  return listings.filter(l => l.Media.length);
}


const acceptedMediaTypes = [
  'Listing',
  'AdditionalListing'
];

export function filterOutFloorplans(listings) {
  listings.forEach(listing => {
    listing.Media = listing.Media.filter(m => acceptedMediaTypes.includes(m.Type) );
  });
  return listings;
}


const rejectedAgentNames = [
  'House  (CORC)',
  '200 East 59th Street Sales Gallery',
  '200 East 59th Street Sales Gallery '
];

export function filterOutRejectedAgentNames(listings) {
  listings.forEach(listing => {
    listing.Agents = listing.Agents.filter(a => !rejectedAgentNames.includes(a.Name) );
  });
  return listings.filter(l => l.Agents.length);
}