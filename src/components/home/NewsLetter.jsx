import bg from "../../assets/News Letter/newsletter2.avif";
import email from "../../assets/News Letter/email.svg";
function NewsLetter() {
  return (
    <div className="container mx-auto rounded-2xl mt-12">
      <section className="bg-blue rounded-2xl py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center px-8 py-12 ">
          <h3 className="text-3xl font-semibold text-white mb-8">
            New Things Will Always Update Regularly
          </h3>

          <form className="flex relative flex-col sm:flex-row items-center justify-center w-full gap-4 bg-white px-4 rounded-md">
            <img src={email} alt="" className="hidden md:block" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-1 py-8 rounded-md    focus:outline-none "
            />
            <button className="w-32 absolute right-4 sm:w-auto bg-blue hover:bg-darkBlue text-white  px-6 py-4 rounded-md hover:bg-blue-700 hover:text-white transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default NewsLetter;
