import { DropdownOptions } from '@/_components/dropdown/dropdown-options'
import Title from '@/_components/dropdown/title'
import React from 'react'
import styles from '../../../styles/Dashboard.module.scss'

const anos: DropdownOptions[] = [
    { id: 0, title: '1o ano' },
    { id: 1, title: '2o ano' },
    { id: 2, title: '3o ano' },
    { id: 3, title: '4o ano' },
    { id: 4, title: '5o ano' },
    { id: 5, title: '6o ano' },
    { id: 6, title: '7o ano' },
    { id: 7, title: '8o ano' },
    { id: 8, title: '9o ano' },
    { id: 9, title: '1o EM' },
    { id: 10, title: '2o EM' },
    { id: 11, title: '3o EM' },
]

export default function AdicionarAlunoPage() {
  return <>
    <Title title='Adicionar Aluno' />
    <form className={`space-y-6 ${styles.alunoForm}`}>
        <label>
            <span>Nome</span>
            <input type="text"/>
        </label>
        <label>
            <span>Ano</span>
            <select>
                {
                    anos.map(ano => (
                            <option key={ano.id} value={ano.id}>{ ano.title }</option>
                    ))
                }
            </select>
        </label>
        <div className='flex justify-end'>
            <button className='px-5 py-3 bg-slate-900 text-slate-200 hover:bg-slate-700'>Salvar</button>
        </div>
    </form>
  </>
}
