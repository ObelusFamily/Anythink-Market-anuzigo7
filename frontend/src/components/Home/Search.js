import React from "react";
import agent from "../../agent";

export const Search = (props) => {
  const handleChange = (e) => {
    if (e.target.value.length > 2) {
      props.onChangeTitle(
        e.target.value,
        agent.Items.byTitle(e.target.value, 0)
      );
    } else {
      props.onChangeTitle(e.target.value, agent.Items.all());
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="col text-right">A place to get</h3>
          <div className="col input-group mb-3">
            <input
              onChange={handleChange}
              id="search-box"
              type="text"
              style={{ border: "0px white solid" }}
              className=" form-control"
              placeholder="What is it that you truly desire?"
            />
            <div
              style={{ border: "0px white solid" }}
              className="input-group-append"
            >
              <span
                style={{ border: "0px white solid" }}
                className="input-group-text bg-white"
              >
                <i style={{ color: "purple" }} class="bi bi-search "></i>
              </span>
            </div>
          </div>
          <h3 className="col text-left"> the cool stuff.</h3>
        </div>
      </div>
    </>
  );
};

export default Search;
