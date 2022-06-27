import React, { FunctionComponent, useEffect } from "react";
import { Badge } from "react-bootstrap";
import s from "./CardPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Link } from "react-router-dom";
import { fetchFacts, fetchVideo } from "../../store/reducers/ActionCreators";

type TCardPage = {
  id: string;
};

const CardPage: FunctionComponent<TCardPage> = ({ id }) => {
  const { kinopoiskId, filterMovies, video, facts } = useAppSelector(
    (state) => state.mainReducer
  );
  const dispatch = useAppDispatch();
  const newArr = filterMovies.filter((el) => el.kinopoiskId === kinopoiskId);
  const getVideo = async () => {
    dispatch(
      fetchVideo({
        id: kinopoiskId,
      })
    );
  };
  const getFacts = async () => {
    dispatch(
      fetchFacts({
        id: kinopoiskId,
      })
    );
  };
  let videoArray;
  let videoArray2;
  let videoYotube;
  let factsArray;
  let factsArray2;
  let factsArray3;
  useEffect(() => {
    getVideo();
    getFacts();
  }, [videoArray]);

  if (video.items.length !== 0) {
    videoArray = video.items.filter((el) => el.url.includes("youtube.com"))[0];
    videoArray2 = video.items.filter((el) => el.url.includes("youtu.be"))[0];
  }

  if (facts.items.length !== 0) {
    factsArray = facts.items.map((el) => el.text.replace(/<\/?[^>]+>/g, ""));
    factsArray2 = factsArray.map((el) => el.replace(/&#171;/g, ""));
    factsArray3 = factsArray2.map((el) => el.replace(/&#187;/g, ""));
  }

  if (videoArray !== undefined) {
    videoYotube = videoArray.url.replace("watch?v=", "embed/");
  } else {
    videoYotube = videoArray2?.url.replace("youtu.be/", "youtube.com/embed/");
  }
  return (
    <div className={s.container}>
      <div className={s.wrap1}>
        <div className={s.wrap}>
          <div className={s.body1}>
            <nav style={{ paddingBottom: 10 }}>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: 20,
                  color: "black",
                }}
                to="/"
              >
                Назад
              </Link>
            </nav>
            <h2>
              <Badge bg="secondary">{newArr[0].nameRu}</Badge>
            </h2>
            <div className={s.body}>
              <img
                className={s.body__img}
                src={newArr[0].posterUrlPreview}
              ></img>
              <div className={s.body__block}>
                {newArr[0].countries.map((item, index) => (
                  <p key={index}>
                    {" "}
                    <strong>Страна:</strong>
                    <span> {item.country}</span>
                  </p>
                ))}
                <p>
                  <strong>Жанр:</strong>{" "}
                  {newArr[0].genres.map((item, index) => (
                    <span key={index}> {item.genre}</span>
                  ))}
                </p>
                <p>
                  <strong>Рейтинг Kinopoisk: </strong>
                  <span> {newArr[0].ratingKinopoisk}</span>
                </p>

                <p>
                  <strong>Год выпуска: </strong>
                  <span>{newArr[0].year}</span>
                </p>
              </div>
            </div>
          </div>
          <div className={s.iframe}>
            <iframe
              className={s.video}
              src={videoYotube}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </div>
        </div>
      </div>
      <div className={s.facts}>Интересные факты о фильме:</div>
      <div className={s.facts__item}>
        {factsArray3?.map((el) => (
          <p className={s.facts__el} key={el}>
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardPage;
