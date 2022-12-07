import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

interface iLesson {
  id: string;
  title: string;
}

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);

  console.log(data);

  // useEffect(() => {
  //   client
  //     .query({
  //       query: GET_LESSONS_QUERY,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }, []);

  return (
    <ul>
      {data?.lessons.map((lesson: iLesson) => {
        return <li>{lesson.title}</li>;
      })}
    </ul>
  );
}

export default App;
