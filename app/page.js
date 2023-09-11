import Head from "next/head";
import Image from "next/image";

export default function Home () {
  return (
    <div className="container-login min-h-screen flex flex-col lg:flex-row">
    <Head>
      <title>Next</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* Image box */}
    <div className="img-box w-full lg:w-1/2 bg-blue-500 p-4 md:p-20 flex items-center justify-center">
      <Image
        src="/img/login.svg"
        alt="Login Image"
        width={600} // Set your desired width
        height={600} // Set your desired height
        priority // Add this if you want to prioritize loading this image
        className="w-full h-full" // Ensure the image covers the entire container
      />
    </div>
    {/* Content box */}
    <div className="content-box w-full lg:w-1/2 p-4 flex justify-center items-center">
      <div className="form-box w-full md:w-1/2">
        <h2 className="text-3xl font-semibold text-gray-700 uppercase mb-6 text-center">
          Login
        </h2>
        <form>
          <div className="input-box mb-6">
            <span className="text-gray-700">Username</span>
            <input
              type="email"
              placeholder="@mail.com"
              className="w-full px-4 py-2 outline-none border rounded-md text-gray-700"
            />
          </div>

          <div className="input-box mb-6">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              placeholder="password"
              className="w-full px-4 py-2 outline-none border rounded-md text-gray-700"
            />
          </div>

          <div className="remember flex items-center justify-between mb-6 text-gray-700">
            <label className="cursor-pointer">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="text-blue-500">
              Esqueceu a Senha?
            </a>
          </div>

          <div className="input-box mb-6">
            <input
              type="submit"
              value="Entrar"
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md cursor-pointer transition duration-300 hover:bg-blue-600"
            />
          </div>

          <div className="input-box">
            <p className="text-gray-700">
              Não Tem Uma Conta?{" "}
              <a href="#" className="text-blue-500">
                Inscrever-se
              </a>
            </p>
          </div>
        </form>
        <h3 className="text-gray-500 font-semibold mt-10 text-center text-lg">
          Logar Com
        </h3>
        <ul className="ul flex justify-center mt-4">
          <li className="list-none w-16 h-16 flex items-center justify-center rounded-full mx-2 cursor-pointer transition duration-300 hover:bg-gray-300">
            <Image
              className="w-10"
              src="/img/facebook.png"
              alt="Facebook"
              width={180}
              height={37}
              priority
            />
          </li>
          <li className="list-none w-16 h-16 flex items-center justify-center rounded-full mx-2 cursor-pointer transition duration-300 hover:bg-gray-300">
            <Image
              src="/img/google.png"
              alt="Google"
              className="w-10"
              width={180}
              height={37}
              priority
            />
          </li>
          <li className="list-none w-16 h-16 flex items-center justify-center rounded-full mx-2 cursor-pointer transition duration-300 hover:bg-gray-300">
            <Image
              src="/img/apple.png"
              alt="Apple"
              className="w-10"
              width={180}
              height={37}
              priority
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}