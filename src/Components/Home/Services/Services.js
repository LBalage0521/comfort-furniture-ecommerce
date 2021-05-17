import React from 'react';
import ServiceCard from './ServiceCard';
import delivery from '../../../Images/delivery.svg';
import pencil from '../../../Images/pencil.svg';
import tools from '../../../Images/tools.svg';

export default function Services() {
  return (
    <>
    <section className="services-section d-flex flex-column justify-content-center align-items-stretch">
    <h1 className="text-center py-5 mb-0">Services</h1>
      <div className="row services-row">
        <div className="col-md-4 services-col">
          <ServiceCard
            cardFooter={'Excellent designers'}
            cardTitle={'Visual Design'}
            img={pencil}
          />
        </div>
        <div className="col-md-4 services-col">
          <ServiceCard
            cardFooter={'Competent professionals'}
            cardTitle={'Assembly & Installation'}
            img={tools}
          />
        </div>
        <div className="col-md-4 services-col">
          <ServiceCard
            cardFooter={'Fast & Free'}
            cardTitle={'Delivery'}
            img={delivery}
          />
        </div>
      </div>
    </section>
    </>
  )
}
