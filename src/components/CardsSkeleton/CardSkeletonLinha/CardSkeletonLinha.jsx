import React from 'react'

import { Skeleton } from '@mui/material';

export const CardSkeletonLinha = () => {
    return (
        <>
            <Skeleton variant="rectangular" sx={{ bgcolor: 'var(--loading-skeleton)', borderRadius: '.5rem' }} />
        </>
    )
}
