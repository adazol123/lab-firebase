import { useEffect } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { io } from "socket.io-client";
import { useState } from "react";
import { useGlobalStoreOnly } from "../../../store";

function AdminHome() {
  const socket = useGlobalStoreOnly(store => store.metadata.socket)

  const [val, setVal] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    //socket.emit("heartbeat", { value: val });
  };
  return (
    <AdminLayout.Content>
      <AdminLayout.ContentBox>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
        voluptates. Debitis cupiditate eaque earum id fugit, cumque sequi dolore
        deserunt ea? Voluptatibus architecto eligendi laudantium iusto repellat
        tenetur libero quis dolorum ipsum pariatur eius assumenda nobis, aliquid
        velit doloremque incidunt veritatis. Dolores fugit magnam a, corporis
        voluptatum illum inventore recusandae fugiat vero iure. Ex consequatur
        vitae laborum! Temporibus, adipisci? Neque, architecto doloremque! Ut
        eaque aliquam rem quia, dolorum dolores doloribus magnam veritatis
        recusandae qui sequi praesentium! Delectus laudantium libero minus
        voluptatem laboriosam, voluptates quod explicabo ea eum molestiae iure
        maiores.
        <form onSubmit={submitForm}>
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </AdminLayout.ContentBox>
      <AdminLayout.ContentBox>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
        voluptates. Debitis cupiditate eaque earum id fugit, cumque sequi dolore
        deserunt ea? Voluptatibus architecto eligendi laudantium iusto repellat
        tenetur libero quis dolorum ipsum pariatur eius assumenda nobis, aliquid
        velit doloremque incidunt veritatis. Dolores fugit magnam a, corporis
        voluptatum illum inventore recusandae fugiat vero iure. Ex consequatur
        vitae laborum! Temporibus, adipisci? Neque, architecto doloremque! Ut
        eaque aliquam rem quia, dolorum dolores doloribus magnam veritatis
        recusandae qui sequi praesentium! Delectus laudantium libero minus
        voluptatem laboriosam, voluptates quod explicabo ea eum molestiae iure
        maiores.
      </AdminLayout.ContentBox>
      <AdminLayout.ContentBox>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
        voluptates. Debitis cupiditate eaque earum id fugit, cumque sequi dolore
        deserunt ea? Voluptatibus architecto eligendi laudantium iusto repellat
        tenetur libero quis dolorum ipsum pariatur eius assumenda nobis, aliquid
        velit doloremque incidunt veritatis. Dolores fugit magnam a, corporis
        voluptatum illum inventore recusandae fugiat vero iure. Ex consequatur
        vitae laborum! Temporibus, adipisci? Neque, architecto doloremque! Ut
        eaque aliquam rem quia, dolorum dolores doloribus magnam veritatis
        recusandae qui sequi praesentium! Delectus laudantium libero minus
        voluptatem laboriosam, voluptates quod explicabo ea eum molestiae iure
        maiores.
      </AdminLayout.ContentBox>
    </AdminLayout.Content>
  );
}

export default AdminHome;
