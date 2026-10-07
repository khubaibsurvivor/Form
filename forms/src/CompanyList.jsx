import React from 'react';

const companies = [
  {
    "name": "APL",
    "address": "75 King William St, London EC4N 7BE, UK",
    "placeId": "ChIJ_-6_kFMDdkgR0cmC8As5zh0",
    "hasWebsite": false
  },
  {
    "name": "A.P PAREL CLOTHING LTD",
    "address": "85 Bayham St, London NW1 0AG, UK",
    "placeId": "ChIJFbrNYmwbdkgRSDzNXyLCW2I",
    "hasWebsite": false
  },
  {
    "name": "A L Agencies",
    "address": "314-322 Great Marlborough St, London W1B 3BB, UK",
    "placeId": "ChIJeZVUc9UadkgRahGWuAdo5wk",
    "hasWebsite": false
  },
  {
    "name": "The Poppy Appeal, London",
    "address": "199 Borough High St, London SE1 1LB, UK",
    "placeId": "ChIJkaxU01kDdkgRQ-YmU0izTkI",
    "hasWebsite": false
  },
  {
    "name": "Collective Apparels",
    "address": "71-75 Shelton St, London WC2H 9JQ, UK",
    "placeId": "ChIJhatmdLkFdkgRDYl337RTX54",
    "hasWebsite": false
  },
  {
    "name": "Artemis & Apollo Apparel Ltd",
    "address": "1 Tilehurst, London NW1 3PN, UK",
    "placeId": "ChIJnWcFT9gadkgRjgow8gcBYTo",
    "hasWebsite": false
  },
  {
    "name": "AKH Apparel",
    "address": "20-22 Wenlock Rd, London N1 7GU, UK",
    "placeId": "ChIJS1DlteoddkgRqz0GXkKGugI",
    "hasWebsite": false
  },
  {
    "name": "Market Appeal",
    "address": "Atlantic House, 351 Oxford St, London W1C 2JF, UK",
    "placeId": "ChIJlQDQsCwFdkgRQMPhpJ41gn4",
    "hasWebsite": false
  }
];

 function CompanyList() {
  return (
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', padding: '16px' }}>
      {companies.map((company) => (
        <div 
          key={company.placeId} 
          style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', backgroundColor: '#fff' }}
        >
          <h3 style={{ margin: '0 0 8px 0' }}>{company.name}</h3>
          <p style={{ color: '#555', fontSize: '14px', margin: '0 0 12px 0' }}>
            📍 {company.address}
          </p>
          <span style={{ 
            fontSize: '12px', 
            padding: '4px 8px', 
            borderRadius: '4px', 
            backgroundColor: company.hasWebsite ? '#e6fffa' : '#ffebe9',
            color: company.hasWebsite ? '#047857' : '#cf222e'
          }}>
            {company.hasWebsite ? 'Website Available' : 'No Website'}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CompanyList;