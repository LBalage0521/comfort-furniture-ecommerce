import React from 'react';
import SummaryForm from './SummaryForm';

function Summary({cartContent, removeAllFromCart, subtotal, setSubtotal}) {
  return (
    <section className="summary-section">
      <h1 className="text-center py-5 mb-0">Summary</h1>
      <SummaryForm
        cartContent={cartContent}
        setSubtotal={setSubtotal}
        subtotal={subtotal}
        removeAllFromCart={removeAllFromCart}
      />
    </section>
  )
}

export default Summary;