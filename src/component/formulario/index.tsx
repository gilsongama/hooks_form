import {useForm} from 'react-hook-form'
import React from 'react-hook-form'
import {Form} from './style'


const Formulario = () => {
    const  {register, handleSubmit, errors} = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return(
        <>
          <Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Preencha o formulário </h2>
               <div>
                    <input name="nome" placeholder="Seu nome" ref={register({required: true})}></input>
                    {errors.nome && <p>Nome obrigatório</p>}
                </div> 

               <div>
                    <input name="cidade" placeholder="Cidade" ref={register}></input>
               </div>
                 
                <div>
                    <input name="email" placeholder="seu email" type="email" ref={register({required:true, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email inválido"}})}></input>
                    {errors.email?.type === "required" && <p>Email obrigatório</p>}
                    {errors.email?.type === "pattern" && <p>Email inválido</p>}
                    
                </div>

                <div>
                    <input name="idade" placeholder="Sua idade" type="number" ref={register({required:true, min: 19})}></input>
                    {errors.idade?.type === "required" && <p>Idade obrigatório</p>}
                    {errors.idade?.type === "min" && <p>Obrigatório ser maior que 18 anos</p>}

                </div>

                <div>
                    <input name="estado_civil" placeholder="Estado civil" ref={register({required: true})}></input> 
                    {errors.estado_civil && <p>Estado civil obrigatório</p>}
                </div>
                    
                <button>Enviar</button>
            </Form>
        </>
    )
}
export default Formulario