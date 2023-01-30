import toast from "react-hot-toast";

export const errorAlert = (message : any) => 
toast.error(message, {
    position: 'top-left',
    duration: 2200,
    style: {
        padding: '16px',
        color: '#090909',
        maxWidth: '100%',
    },
    iconTheme: {
        primary: '#FF0000',
        secondary: '#FFFAEE',
    },
});

export const successfullAlert = (message : any) => 
toast.success(message, {
    position: 'top-left',
    duration: 2200,
    style: {
        padding: '16px',
        color: '#090909',
        maxWidth: '100%',
    },
    iconTheme: {
        primary: '#00a000',
        secondary: '#FFFAEE',
    },
});