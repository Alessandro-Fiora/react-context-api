import { Link } from "react-router-dom";

export default function Card({ id, title, img }) {
  return (
    <div className="col">
      <div className="card h-100 p-3">
        <div className="article-info flex-grow-1">
          <h3 className="h5 m-2">{title}</h3>
          <div className="img-container mb-2">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="article-buttons d-flex justify-content-around">
          <button
            className="btn"
            data-bs-toggle="modal"
            data-bs-target={`#delete-modal-${id}`}
          >
            <i className=" fa-solid fa-trash-can"></i>
          </button>
          <button disabled className="btn edit-btn">
            <i className=" fa-solid fa-pencil"></i>
          </button>

          <Link to={"/posts/" + id} className="btn">
            <i className=" fa-solid fa-eye"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
