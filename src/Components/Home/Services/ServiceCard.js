export default function ServiceCard({cardFooter, cardTitle, img}) {

  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title text-center mb-3">
          <img src={img} className="card-img-top" alt={cardTitle}/>
          {cardTitle}
        </h5>
        <p className="card-text">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content here',
          making it look like readable English.
        </p>
      </div>
      <div className="card-footer text-center">
        <p className="mb-0">{cardFooter}</p>
      </div>
    </div>
  )
}