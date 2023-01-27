import { DropdownOptions } from '@/_components/dropdown/dropdown-options'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Dashboard.module.scss'
import AdicionarAlunoPage from './_adicionar-aluno/adicionar-aluno'
import RemoverAluno from './_remover-aluno/remover_aluno'

interface PageModel { title: string, component: JSX.Element}

const pagesMap: Record<string, PageModel> = {
    adicionar: {
        title: 'Adicionar Aluno',
        component: <AdicionarAlunoPage />
    },
    remover: {
        title: 'Remover Aluno',
        component: <RemoverAluno />
    },
}


export default function Dashboard() {
    const { menu } = useRouter().query
    const [pageMenu, setPageMenu] = useState<PageModel>()

    useEffect(() => {
        try {
            setPageMenu(pagesMap[menu as string])
        } catch {
            Router.push('/');
        }
    }, [menu])

  return (
    <div className="w-screen h-screen flex flex-col justify-between">
        <div className="col-span-7 flex items-center justify-between bg-slate-900 text-slate-200 px-5 py-5">
            <p>Aplicação de Cadastro de Alunos v.0.01</p>
        </div>
        <div className="grid grid-cols-12 flex-grow">
            <div className='col-span-2 bg-slate-600 text-slate-200 flex flex-col'>
            {
                Object.keys(pagesMap).map(page => (
                    <Link href={`/dashboard/${page}`}>
                        <button className='w-full px-5 py-5 hover:bg-slate-700 text-left'>{ pagesMap[page].title }</button>
                    </Link>
                ))
            }
            </div>
            <div className='col-span-10 bg-slate-200 p-12 text-slate-800'>
                { pageMenu?.component }
            </div>
        </div>
    </div>
  )
}
