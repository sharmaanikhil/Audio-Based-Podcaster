import React, { useEffect, useState } from "react";
import axios from "axios";
import PodcastCard from "../components/PodcastCard/PodcastCard";

const AllPodcasts = () => {
  const [Podcasts, setPodcasts] = useState();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${backendUrl}/api/v1/get-podcasts`);
      setPodcasts(res.data.data);
    };
    fetch();
  }, [backendUrl]);

  return (
    <div>
      <div className="w-full px-4 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Podcasts &&
          Podcasts.map((items, i) => (
            <div key={i}>
              <PodcastCard items={items} />{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllPodcasts;