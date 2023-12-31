import {} from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { useGlobalStoreOnly } from "../../../store";

function AdminDashboard() {
  const crypto = useGlobalStoreOnly(store => store.metadata?.stocks?.crypto)
  return (
    <AdminLayout.Content>
      <AdminLayout.ContentBox className="min-h-screen">
        Admin Dashboards
        {crypto?.length? crypto.map((c,index) => {

          return (
            <div key={c.name}>
              <span className="text-slate-300">{c.name}</span>
              <span className="text-emerald-400 inline-block px-2">{c.price}</span>
            </div>
          )
        }) : null}
      </AdminLayout.ContentBox>
      <div className="px-6 bg-zinc-950 sticky top-0 py-4">Sticky Header</div>
      <AdminLayout.ContentBox className="min-h-screen">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus
        totam eveniet amet nesciunt voluptatum distinctio, ullam nulla delectus
        illum sint voluptatem explicabo? Possimus reprehenderit fugit dolorem!
        Quibusdam est temporibus voluptatibus sequi magnam nulla recusandae
        sapiente iusto modi itaque nobis in fuga sunt deleniti consectetur
        perferendis accusamus autem, debitis quas? Repellat voluptate itaque,
        quo quia expedita pariatur delectus ad error. Aliquam vitae et facilis
        animi cupiditate laudantium dolorum cumque a explicabo atque quasi
        delectus accusantium consequatur, repudiandae voluptatibus hic magni
        iste error vel amet. Eius, pariatur aliquid illum, excepturi sapiente
        maiores corrupti a ea consectetur explicabo in laboriosam esse
        exercitationem, veniam possimus assumenda rerum. Facere eveniet
        consequatur pariatur fugit iure exercitationem, officiis, quo ratione,
        laborum similique nostrum officia iste corporis atque id impedit quidem
        dolorem iusto obcaecati tempore? Ratione eius quasi temporibus adipisci
        est blanditiis optio excepturi aut ut nobis suscipit nihil perferendis
        aspernatur, sed reiciendis omnis minus deleniti. Nisi incidunt quos nam
        dolorum voluptate impedit ullam tempore dignissimos aspernatur odit cum
        quae ducimus provident maxime magni ratione perspiciatis quibusdam fuga
        dolorem eius reprehenderit dicta, repudiandae illum. Porro, velit! Illo
        dolorem, sed id commodi ut et consequatur libero ipsam veniam,
        recusandae quaerat sapiente. Et illum accusantium, provident eaque,
        necessitatibus placeat laborum explicabo ducimus praesentium blanditiis,
        doloremque voluptates! Deserunt dicta incidunt amet, debitis beatae
        cumque eum reiciendis ut optio perferendis est nemo fugit sapiente
        corporis quo aliquid. Deserunt, placeat! Repellendus distinctio quam
        doloremque magnam, laborum id itaque ratione obcaecati earum alias sit
        commodi? Temporibus aliquam laborum error et adipisci? Tempora excepturi
        dolores eaque voluptatem quidem officia reiciendis quisquam atque eos
        blanditiis, quasi incidunt, officiis veritatis dolorem ab error
        similique ipsam deserunt pariatur culpa cupiditate? Ratione dolorum
        voluptas eligendi magnam iure culpa deserunt nihil eum officia ipsam
        voluptatum mollitia quaerat, cum molestiae distinctio aliquid aperiam
        sunt exercitationem. Distinctio cumque ad saepe expedita.
      </AdminLayout.ContentBox>
      <AdminLayout.ContentBox className="min-h-screen">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsam
        deleniti autem velit, tenetur placeat, enim quos iure asperiores dolorem
        laudantium amet? Tenetur distinctio, architecto unde obcaecati deleniti
        recusandae cumque aliquid repellendus, corrupti mollitia iure odio porro
        fuga vel minus est amet tempora alias animi pariatur ea ex similique
        molestiae reprehenderit. Iure reiciendis amet culpa vero, eius commodi
        rem labore laudantium ad dolore, possimus, error cumque aliquid
        doloremque necessitatibus unde rerum voluptatem? Provident, voluptas
        nostrum unde aperiam aliquid similique enim tenetur blanditiis et iste
        dolor odio consectetur voluptate, porro deserunt, eaque earum maxime
        inventore. Unde vitae quasi nemo odit magni voluptate itaque alias culpa
        cupiditate similique, facere totam maxime harum repudiandae illum, natus
        nobis blanditiis labore accusantium quo velit facilis maiores! Veritatis
        assumenda consequatur perspiciatis? Ex porro alias quisquam animi
        incidunt eos possimus quas! Assumenda asperiores natus ipsum ducimus
        dolorem, dolorum quae sunt ipsam saepe, vero totam. Eius nesciunt odio
        numquam? Ut nostrum facilis nobis maiores voluptatibus veritatis porro
        esse quam nemo qui nam cum ducimus ea dolores tempora, laudantium magnam
        pariatur, ipsum voluptatem eveniet similique rem! Totam minima
        voluptatem nisi quia cum provident atque alias vero laboriosam nesciunt
        quas nam, ut omnis rem magnam explicabo placeat necessitatibus sint
        similique?
      </AdminLayout.ContentBox>
    </AdminLayout.Content>
  );
}

export default AdminDashboard;
