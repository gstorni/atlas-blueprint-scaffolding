// pages/contacto.js
import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Aspro Energy</title>
        <meta name="description" content="Ponete en contacto con el equipo de Aspro Energy." />
      </Head>
      <main className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contacto</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nombre</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Correo electrónico</label>
            <input type="email" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Mensaje</label>
            <textarea className="w-full border border-gray-300 p-2 rounded" rows={4} />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Enviar
          </button>
        </form>
      </main>
    </>
  );
}
