const profileStyle = theme => {
    return {
        styleContainerMare:{

            [theme.breakpoints.up('sm')]: {
                display: 'inline',
            },
            [theme.breakpoints.up('sm')]: {
                display: 'flex',
            },
        },
        textNumePrenume:{
            color:'#C7C7C7',
            fontSize:'16px',
        },
        containerProfileCard:{
            background: '#FFFFFF',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
            borderRadius: '14px',
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        
            width: '400px',
            height: '96px',
            left: 'calc(50% - 400px/2 - 332px)',
        },
        pozaProfilCard:{
            width: '64px',
            height: '64px',
            margin: '16px',
            padding: '0px',
            borderRadius: '14px',
            border: '5px black',
            borderStyle: 'solid',
        },
        containerNumePrenumProfileCard:{
            padding: '0',
            margin: '16px',
            marginRight: 'auto',
        },
        textNume:{
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '45px',
            color: '#202020',
            padding: '0',
            margin: '0',
        },
        textPrenume:{
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '19px',
            color: 'A5A5A5',
            padding: '0',
            margin: '0',
        },
        pozaEditProfilCard:{
            height: '26px',
            width: '26px',
        },
        containerAdresaEmailTelefonFunctieDataAngajare:{
            display: 'flex',
            padding: '0',
            margin: '16px',
            width: '300px',
            marginTop: '1.4rem',
        },
        pozaAdresaEmailTelefon:{
            height: '50px',
            width: '50px',
            borderRadius: '50%',
        },
        textAdresaEmailTelefonFunctiaDataAngajare:{
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '22px',
            color: '#202020',
        },


        styleCnpSerieNumarCi:{
            [theme.breakpoints.up('lg')]: {
                display: 'inline',
            },
            [theme.breakpoints.up('lg')]: {
                display: 'flex',
            },
        },


        styleContainerConcediileMele:{
            margin: '1rem',
        },
        stilTabel:{
            height:'19rem',
        },



        butonUploadAtasament:{
            background: '#F5F5F5',
            border: '2px dashed #C2C2C2',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
        },

        stilADouaJumatateDePagina:{
            overflow: 'scroll',
        },


        stilEditPageDivContainer:{
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
        },
        stilEditPageInput:{
            padding:'0.22rem',
        },
        
    }
}
export default profileStyle