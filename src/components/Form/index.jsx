import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import { Modal } from "../Modal";

// Importa as funções do arquivo separado
import { schemaValidation, checkAndStorageData } from '../../function/formHelpers';

export const Form = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMensage, setModalMessage] = useState('');

    // Hook useForm com integração do Yup para resolver a validação
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaValidation)
    });

    const onSubmit = (data) => {
        const result = checkAndStorageData(data);

        setModalMessage(result.message);
        setIsModalOpen(true);

        if (result.success) {
            console.log('Dados enviados:', data);
        }
    };

    const onError = () => {
        setModalMessage('Algum campo não foi preenchido, ou foi preenchido incorretamente! ❌');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <main className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mx-auto mt-8">
            <form
                onSubmit={handleSubmit(onSubmit, onError)}
                noValidate
                className="w-full p-4 flex flex-col ">

                <div className="w-full bg-white">
                    <label className="relative">
                        <input
                            type="text"
                            name="name"
                            required
                            {...register("name")}
                            className="w-full px-4 py-2  outline-none border border-gray-400 rounded duration-200 peer focus:border-indigo-600 valid:border-indigo-600 bg-inherit" />
                        <span className="absolute left-0 top-[-1px] px-1 tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-[19px] bg-white ml-2 peer-valid:text-indigo-600 peer-valid:border-indigo-600 peer-valid:text-sm peer-valid:-translate-y-[19px]">
                            Nome
                        </span>
                        <span className="absolute -bottom-7 left-0 text-red-500 text-xs">{errors.name?.message}</span>
                    </label>
                </div>

                <div className="w-full bg-white mt-7">
                    <label className="relative">
                        <input
                            type="email"
                            name="email"
                            required
                            {...register("email")}
                            className="w-full px-4 py-2 outline-none border border-gray-400 rounded duration-200 peer focus:border-indigo-600 valid:border-indigo-600 bg-inherit" />
                        <span className="absolute left-0 top-[-1px] px-1 tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-[19px] bg-white ml-2 peer-valid:text-indigo-600 peer-valid:border-indigo-600 peer-valid:text-sm peer-valid:-translate-y-[19px]">
                            Email
                        </span>
                        <span className="absolute -bottom-7 left-0 text-red-500 text-xs">{errors.email?.message}</span>
                    </label>
                </div>

                <div className="w-full bg-white mt-7">
                    <label className="relative">
                        <input
                            type="tel"
                            name="phone"
                            required
                            {...register("phone")}
                            className="w-full px-4 py-2 outline-none border border-gray-400 rounded duration-200 peer focus:border-indigo-600 valid:border-indigo-600 bg-inherit" />
                        <span className="absolute left-0 top-[-0.063rem] px-1 tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-[1.188rem] bg-white ml-2 peer-valid:text-indigo-600 peer-valid:border-indigo-600 peer-valid:text-sm peer-valid:-translate-y-[1.188rem]">
                            Telefone
                        </span>
                        <span className="absolute -bottom-7 left-0 text-red-500 text-xs">{errors.phone?.message}</span>
                    </label>
                </div>

                <div className="w-full bg-white mt-7">
                    <label className="relative">
                        <select
                            name="cargo"
                            required
                            {...register("cargo")}
                            className="w-full px-2 py-2 outline-none font-bold border border-gray-400 rounded duration-200 focus:border-indigo-600 valid:border-indigo-600">
                            <option value="">Cargo</option>
                            <option value="frontend">Desenvolvedor Frontend</option>
                            <option value="backend">Desenvolvedor Backend</option>
                            <option value="fullstack">Desenvolvedor Full Stack</option>
                            <option value="mobile">Desenvolvedor Mobile</option>
                            <option value="desenvolvedor-software">Desenvolvedor de Software</option>
                            <option value="engenheiro-software">Engenheiro de Software</option>
                            <option value="arquiteto-software">Arquiteto de Software</option>
                            <option value="ui-ux-designer">UI/UX Designer</option>
                            <option value="analista-sistemas">Analista de Sistemas</option>
                            <option value="analista-programador">Analista Programador</option>
                            <option value="devops-engineer">DevOps Engineer</option>
                            <option value="engenheiro-dados">Engenheiro de Dados</option>
                            <option value="qa-engineer">QA Engineer</option>
                            <option value="scrum-master">Scrum Master</option>
                            <option value="product-owner">Product Owner</option>
                        </select>
                        <span className="absolute -bottom-7 left-0 text-red-500 text-xs">{errors.cargo?.message}</span>
                    </label>
                </div>

                <div className="w-full bg-white mt-7">
                    <label className="relative">
                        <input
                            type="text"
                            name="linkedin"
                            required
                            {...register("linkedin")}
                            className="w-full px-4 py-2 outline-none border border-gray-400 rounded duration-200 peer focus:border-indigo-600 valid:border-indigo-600 bg-inherit" />
                        <span className="absolute left-0 top-[-0.063rem] px-1 tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-[1.188rem] bg-white ml-2 peer-valid:text-indigo-600 peer-valid:border-indigo-600 peer-valid:text-sm peer-valid:-translate-y-[1.188rem]">
                            LinkedIn (opcional)
                        </span>
                    </label>
                </div>

                <div className="w-full bg-white mt-7">
                    <label className="relative">
                        <input
                            type="text"
                            name="github"
                            required
                            {...register("github")}
                            className="w-full px-4 py-2 outline-none border border-gray-400 rounded duration-200 peer focus:border-indigo-600 valid:border-indigo-600 bg-inherit" />
                        <span className="absolute left-0 top-[-0.063rem] px-1 tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-[1.188rem] bg-white ml-2 peer-valid:text-indigo-600 peer-valid:border-indigo-600 peer-valid:text-sm peer-valid:-translate-y-[1.188rem]">
                            GitHub (opcional)
                        </span>
                    </label>
                </div>

                <input
                    type="submit"
                    value="Cadastrar"
                    className="w-full mt-7 py-2 text-white bg-indigo-600 rounded cursor-pointer hover:bg-indigo-700 duration-200" />

            </form>

            <Modal
                isOpen={isModalOpen}
                message={modalMensage}
                onClose={closeModal} />
        </main>
    );
};