import { useContext } from "react";
import { Auth } from "../../Context/AuthProvider";

const Home = () => {
  const { name } = useContext(Auth);

  return (
    <div>
      <p>{name}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, et illo
        nemo facilis cum eveniet nisi blanditiis quidem adipisci. Porro voluptas
        tempore consequatur ducimus quo, ut dolorum iure accusamus? Delectus
        exercitationem tenetur voluptas, saepe nobis aspernatur neque, enim
        consequuntur ipsum ullam repellendus totam deserunt adipisci. Molestiae
        reiciendis quas, amet nam, odio adipisci dolores itaque sit neque
        voluptatum voluptate rerum laboriosam quisquam vero facilis praesentium
        culpa vitae cupiditate! Molestias omnis accusamus natus, officiis quae
        repellendus aliquam beatae eos quidem commodi cumque alias, nihil minus
        quia, vel rem sapiente voluptates? Et quod facere, ratione praesentium
        harum sit sequi fugiat. Est, qui alias. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Autem non iusto modi pariatur odit
        repudiandae, in nihil reiciendis cumque recusandae illum explicabo.
        Voluptas veritatis iusto repudiandae velit praesentium voluptatem
        maiores necessitatibus sunt consequuntur quod? Nam, omnis illo, ipsa,
        nihil quisquam numquam aspernatur quas et qui mollitia eos. Ut voluptate
        libero error quibusdam deserunt pariatur sint necessitatibus iusto
        cumque dolorem fuga, temporibus distinctio consequuntur, vero
        repellendus eius laboriosam aperiam ea optio, quisquam nobis! Delectus
        nihil accusantium, quis amet alias aperiam officia placeat eveniet
        consequatur exercitationem. Excepturi sint iusto ipsa error magnam
        praesentium quis, consectetur nesciunt ipsam ullam blanditiis! Repellat
        animi, quisquam at dolor excepturi consectetur nulla necessitatibus!
        Quam fugiat necessitatibus eveniet natus consequatur consequuntur beatae
        maiores? Cum temporibus molestias nostrum voluptatem eligendi quaerat
        placeat eveniet saepe, laboriosam eum sunt explicabo doloribus? Tempore
        praesentium ipsum repellat corrupti ipsa dolores accusantium eaque,
        nesciunt totam placeat beatae, in adipisci provident earum. Pariatur
        saepe asperiores hic sed tenetur! Nisi velit officiis ab sint maxime ex
        eius veritatis molestias dolores voluptatem. Dolore distinctio
        asperiores totam assumenda sunt maiores saepe quae omnis veniam. Et quia
        expedita reprehenderit facilis atque beatae natus, quo deleniti
        obcaecati modi mollitia animi exercitationem deserunt, voluptatibus,
        eius fugit tempore? Eius temporibus esse quo dignissimos provident ea
        iure quas quam, quia rerum repellendus blanditiis? Reiciendis laudantium
        eveniet dolore temporibus quisquam cumque tenetur minima veniam? Ab,
        totam beatae, quidem aspernatur aliquam optio repellendus ratione nobis
        nesciunt hic libero tempora ipsam esse dolor. Officia cum, ipsam
        perferendis dolor atque quisquam placeat aspernatur eos ducimus minus
        vero quas, quae veniam ad quam et! Maiores ad ea laudantium beatae
        quidem ipsa. Illo molestiae repudiandae labore pariatur provident.
        Corporis, dicta quos harum facilis reprehenderit sunt illum tempore
        placeat delectus earum fuga cum! Pariatur quasi accusantium sint,
        consequatur officia cum aut, dignissimos ab placeat facilis aperiam
        magni explicabo quidem officiis.
      </p>
    </div>
  );
};

export default Home;
