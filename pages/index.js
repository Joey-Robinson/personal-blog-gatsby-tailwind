import Head from "next/head"
import Footer from "../components/footer/footer.main"
import GlobalLayout from "../components/global/global.layout"

const Home = () => (
  <GlobalLayout className="general">
    <Head>
      <title>Home</title>
      <meta name="description" content="Home for Joey" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1
      className="
    text-secondaryLink
    font-semibold
    text-5xl
    mb:px-3
    xfl:px-3
    lpt:px-3"
    >
      Home
    </h1>
    <div className="grid grid-rows-pp">
      <h2
        className="
    text-secondaryLink
    font-semibold
    self-center
    text-3xl
    mb:px-3
    xfl:px-3
    lpt:px-3"
      >
        This is from an H2 tag
      </h2>
      <p
        className="
        text-secondary
      text-2xl
      row-start-2
      mb:px-4
      "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis
        voluptates enim libero itaque sit? Facilis quidem beatae aut, quisquam
        odio animi reprehenderit maxime. Ex nemo nisi neque natus molestias sint
        voluptates, quisquam assumenda magnam quibusdam ut doloremque magni
        delectus tenetur id iusto consequatur, consectetur nobis maiores itaque
        unde est! Dolores ea illo aliquid, ipsum labore necessitatibus quia
        deserunt odio officiis temporibus. Vel amet commodi accusantium quas
        similique provident in quisquam officiis inventore, tempore, deserunt
        autem dolor doloribus ea! Enim doloremque natus recusandae facilis dicta
        provident perferendis officia laborum quisquam? Placeat ducimus
        doloremque eligendi esse odio, voluptatem sapiente illo expedita.
      </p>
    </div>
    <div className="mt-10 h-0.5 bg-input px-3" />
    <Footer className="mt-5" />
  </GlobalLayout>
)

export default Home
