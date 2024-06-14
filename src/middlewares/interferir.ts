export const interferir = (req: any, res: any, next: any) => {
    const isLogged = true;

    if(isLogged){
        next()
    }
    else{
        res.status(403).json({msg: 'Você não está logado'})
    }

}