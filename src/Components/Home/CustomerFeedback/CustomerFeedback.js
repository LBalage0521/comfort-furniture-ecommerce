import React from 'react';

export default function CustomerFeedback() {
  return (
    <div className="quote px-5 pb-5">
      <h1 className="text-center py-5">Customer Feedback</h1>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>
            "Excellent service! We were kept well informed of any delays and delivery times.<br/>
            We received our bed ahead of schedule, which was great for us.<br/>
            It was exactly as described, good quality and easy to assemble.<br/>
            Overall we were delighted with the company and product: would 100% recommend."
          </p>
        </blockquote>
        <figcaption className="m-0">
          - Jaimie Alexander
        </figcaption>
      </figure>
    </div>
  )
}
