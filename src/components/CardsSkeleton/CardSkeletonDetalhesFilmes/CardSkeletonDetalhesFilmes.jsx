import React from 'react'

import { Skeleton } from '@mui/material';

export const CardSkeletonDetalhesFilmes = () => {
    return (
        <>
            <Skeleton variant="rectangular" sx={{ bgcolor: 'var(--loading-skeleton)', borderRadius: '.5rem', maxWidth: '90%' }} className='nome-filme-principal' />
            <Skeleton variant="rectangular" sx={{ bgcolor: 'var(--loading-skeleton)', borderRadius: '.5rem', maxWidth: '100%' }} className='sinopse-filme' height={100} />
            <Skeleton variant="rectangular" sx={{ bgcolor: 'var(--loading-skeleton)', borderRadius: '.5rem', maxWidth: '40%' }} className='infos-filme' />
            <Skeleton variant="rectangular" sx={{ bgcolor: 'var(--loading-skeleton)', borderRadius: '.5rem', maxWidth: '200px' }} height={60} />
        </>
    )
}
