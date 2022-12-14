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
  const { data } = useQuery<{lessons: iLesson[]}>(GET_LESSONS_QUERY);

  console.log(data);

  // useEffect(() => {                     //useQuery é uma alternativa menor
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
      {data?.lessons.map((lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
  );
}

export default App;
