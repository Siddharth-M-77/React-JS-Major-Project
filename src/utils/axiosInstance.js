import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWU2ZDY1ZGRkMTg4Zjc2NDZkNGZkMjY3ZGYwOTcwZiIsIm5iZiI6MTczMTE3MjY2MC4xMjIsInN1YiI6IjY3MmY5OTM0NTdiMzAxZjNjOTMxOTU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.roM1Jo_TzieU64RPI6kouurGZiPffUOZRbSzJlt51y8",
  },
});

export default instance;
