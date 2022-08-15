// DNS Module
import dns from "dns";

dns.lookup("facebook.com", (error, address, family) => {
  if (error) throw error;
  console.log(address);
  console.log(family);
});

// dns.resolve('facebook.com', 'NS', (error, records) => {
//  if (error) throw error;
//  console.log(records);
// });
