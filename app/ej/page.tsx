import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Página de Ejemplo
      </h1>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <p className="text-gray-600">
          Esta es una página de ejemplo creada para demostrar la estructura básica de una página en Next.js. Esta no es una ruta protegida, por lo que cualquier usuario puede acceder a ella sin necesidad de autenticación.
        </p>
      </div>
    </main>
  );
}
