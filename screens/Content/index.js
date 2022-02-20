import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Hashnode from "./Hashnode";

const ContentScreen = ({ data }) => {
  const { hashNodeContent } = data;

  return (
    <div>
      <Header />
      <div className="flex flex-col text-center w-full my-10">
        <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">
          All my writing in one place
        </h1>
      </div>

      {/*  */}
      <Hashnode hashNodeContent={hashNodeContent} />
      <Footer />
    </div>
  );
};

export default ContentScreen;
