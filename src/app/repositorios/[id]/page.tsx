interface PageDetailProps{
    params: {
        id: string;
    }
}

async function getData(id: string){
  const response = await fetch("https://api.github.com/users/MichelangeloCB/repos")

return response.json();
 }

export default async function RepositorioId({ params }: PageDetailProps){
    const data =  await getData(params.id);


    return(
        <div>
            <h1>Página detalhes do repositório {params.id}</h1>
        </div>
    )
}