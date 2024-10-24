import { Footer } from "../Footer"
import { Form } from "../Form"

export const Home = () => {
    return (
        <div className="bg-[#1e1f22f1] min-h-screen flex flex-col items-center">
            <div className="text-center text-white sm:p-10 pt-8">
                <h1 className="md:text-4xl text-2xl font-bold mb-2 md:mb-0">Formulário de Cadastro para Membros</h1>
                <h2 className="text-xl font-semibold">Frontend Fusion</h2>
            </div>
            <Form />
            <Footer />
        </div>
    )
}