import React, { useState, useEffect, useRef, useContext } from "react";
import RestApi from "./API/RestApi";
import Card from "./Card";
import { useFetching } from "./Hooks/useFetching";
import { FavoriteCatsContext } from "./context/Context";

function AllCats() {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);

  const lastElement = useRef();
  const observer = useRef();

  const { favoriteCats } = useContext(FavoriteCatsContext);

  const [fetchCounties, isLoading] = useFetching(async (page) => {
    const responce = await RestApi.getCats(page);

    const newResponce = responce.map((cat) => {
      const check = favoriteCats.find((item) => item.id == cat.id);

      if (check === undefined) {
        cat.like = false;
        return cat;
      } else {
        cat.like = true;
        return cat;
      }
    });

    setCats([...cats, ...newResponce]);
  });

  useEffect(() => {
    fetchCounties(page);
  }, [page]);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    var callback = function (entries) {
      if (entries[0].isIntersecting) {
        setPage(page + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isLoading]);

  return (
    <div>
      <div className={"card-list"}>
        {cats.map((cat, index) => (
          <Card cat={cat} key={index} />
        ))}
      </div>

      {!isLoading ? (
        <h2
          style={{ textAlign: "center", marginTop: "20px", fontSize: "18px" }}
        >
          ...Загружаем еще котиков...
        </h2>
      ) : (
        <div className="lds-dual-ring"></div>
      )}
      <h2
        style={{
          textAlign: "center",
          marginTop: "5px",
          marginBottom: "25px",
          fontSize: "18px",
        }}
        ref={lastElement}
      >
        ...Загружаем котиков...
      </h2>
    </div>
  );
}

export default AllCats;
