import { Grid } from '@mui/material';
import React, { useState } from 'react'
import { api } from '../api/axios/instance';

const validFiles = ['jpg', 'png', 'jpeg']

export const UploadImages = ({setImagesList, images}) => {

    const handleSetFiles = (e) => {

        for( const [key,value] of Object.entries(e.target.files) ){
            const nameArray = value.name.split('.');
            const extension = nameArray[ nameArray.length - 1];

            if(!validFiles.includes(extension)){
                return console.log('Error archivo invalido');
            }

        }

        setImagesList(e.target.files);
        // console.log(files);

        // if( files ){
        //     for( const [key,value] of Object.entries(files) ){
        //         console.log(value.name);
        //     }
        // }

        // console.log(files);
    }

    // const handleUploadFiles = () => {

    //     const data = new FormData();
    //     const usuario = {
    //         nombre: 'manuel',
    //         edad: 27
    //     }

    //     files.forEach( (file, i) => {
    //         data.append(`archivo${i}`, file)
    //     })

    //     data.append('edad', 27);
    //     data.append('nombre', 'manuel');
        

        

    //     console.log(data);

    //     api.post('/archivos',data,{
    //         headers: { "Content-Type": "multipart/form-data"}
    //     }).then( response => console.log(response))
    //         .catch( error => console.log(error))
    // }

    return (
        <Grid item xs={11} margin='0 auto' display='flex' sx={{flexDirection: 'column', alignItems:'center'}}>
            <Grid item>
                <input name='fileinput' id='fileinput' className='inputfile' accept='.jpg, .png, .jpeg' type='file' multiple onChange={handleSetFiles} />
                <label className='fileinputlabel' htmlFor="fileinput">Cargar Imagenes</label>
            </Grid>
            <Grid item xs={12} display='flex' flexDirection={'row'} gap='24px' flexWrap='wrap' sx={{alignItems:'center'}}>
                {
                    images.map( (file,i) => {
                        return <img style={{width:'200px', margin:'24px auto 0 auto'}} key={i} src={URL.createObjectURL(file)} />
                    })
                }
            </Grid>
        </Grid>
    )
}
