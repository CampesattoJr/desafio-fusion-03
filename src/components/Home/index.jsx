import { Form } from "../Form"

export const Home = () => {
    return (
        <div className="bg-[#1e1f22f1] min-h-screen flex flex-col items-center px-4">
            <div className="text-center text-white p-10">
                <h1 className="md:text-4xl font-bold">Formulário de Cadastro para Membros</h1>
                <h2 className="text-2xl font-semibold">Frontend Fusion</h2>
            </div>
            <Form />
        </div>
    )
}