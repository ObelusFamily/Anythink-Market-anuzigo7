import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  

  if (props.items.length === 0 &&
    (!props.title || props.title.length < 3)
    ) {
    return <div className="py-4 no-items">No items are here... yet.</div>;
  }

  if (props.items.length === 0 && props.title.length > 2) {
    return (
      <div
        id="empty"
        className="container-fluid mx-10 my-5 py-5 col text-center"
        style={{ backgroundColor: "rgba(255,255,255,.3)" }}
      >
        <i class="bi bi-emoji-frown" style={{ fontSize: "44px" }}></i>
        <h5>No Items found for '{props.title}'</h5>
      </div>
    );
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
