export default function TeamCard({ id, title, img, content }) {
  return (
    <div className="col">
      <div className="card h-100 p-3">
        <div className="article-info flex-grow-1">
          <h3 className="h5">{title ? title : ""}</h3>
          <div className="img-container mb-2">
            <img src={img} alt="" className="img-fluid w-100" />
          </div>
          <h4 className="h6 fw-light mb-3">{content ? content : ""}</h4>
        </div>
      </div>
    </div>
  );
}
